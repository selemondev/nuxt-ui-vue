<script setup lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { Disclosure as HDisclosure, DisclosureButton as HDisclosureButton, DisclosurePanel as HDisclosurePanel } from '@headlessui/vue'
import UButton from '../Button/UButton.vue'
import UIcon from '../Icon/UIcon.vue'
import type { AccordionItem } from './Types/accordionItem'
import type { UAccordion } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import stateEmitter from '@/utils/stateEmitter'
import { useVariants } from '@/composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<UAccordion>(),
  items: {
    type: Array as PropType<AccordionItem[]>,
    default: () => [],
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
  openIcon: {
    type: String,
    default: () => nuxtLabsTheme.UAccordion.base.default.openIcon,
  },
  closeIcon: {
    type: String,
    default: () => nuxtLabsTheme.UAccordion.base.default.closeIcon,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants(
    Components.UAccordion,
    customProps as VariantJSWithClassesListProps<UAccordion>,
  )
})

// eslint-disable-next-line @typescript-eslint/ban-types
const buttonRefs = ref<Function[]>([])

function closeOthers(itemIndex: number) {
  if (!props.items[itemIndex].closeOthers && props.multiple)
    return

  buttonRefs.value.forEach((close, index) => {
    if (index === itemIndex)
      return

    close()
  })
}

function onEnter(el: HTMLElement, done) {
  el.style.height = '0'
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
  el.style.height = `${el.scrollHeight}px`

  el.addEventListener('transitionend', done, { once: true })
}

function onBeforeLeave(el: HTMLElement) {
  el.style.height = `${el.scrollHeight}px`
  // eslint-disable-next-line no-unused-expressions
  el.offsetHeight // Trigger a reflow, flushing the CSS changes
}

function onAfterEnter(el: HTMLElement) {
  el.style.height = 'auto'
}

function onLeave(el: HTMLElement, done) {
  el.style.height = '0'

  el.addEventListener('transitionend', done, { once: true })
}

const transitions = computed(() => {
  return {
    ...nuxtLabsTheme.UAccordion.base.transition,
  }
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UAccordion,
})
</script>

<template>
  <div :class="variant.root">
    <HDisclosure v-for="(item, index) in items" v-slot="{ open, close }" :key="index" :default-open="defaultOpen || item.defaultOpen">
      <HDisclosureButton :ref="() => buttonRefs[index] = close" as="template" :disabled="item.disabled">
        <slot :item="item" :index="index" :open="open" :close="close">
          <UButton v-bind="{ ...omit(nuxtLabsTheme.UAccordion.base.default, ['openIcon', 'closeIcon']), ...$attrs, ...omit(item, ['slot', 'disabled', 'content', 'defaultOpen']) }">
            <template #trailing>
              <UIcon
                :name="!open ? openIcon : closeIcon ? closeIcon : openIcon"
                :class="[
                  open && !closeIcon ? '-rotate-180' : '',
                  nuxtLabsTheme.UButton.base.icon.size[item.size || nuxtLabsTheme.UButton.base.default.size],
                  nuxtLabsTheme.UAccordion.base?.item?.icon,
                ]"
              />
            </template>
          </UButton>
        </slot>
      </HDisclosureButton>

      <stateEmitter :open="open" @open="closeOthers(index)" />

      <!-- @vue-ignore -->
      <Transition
        v-bind="transitions"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="open">
          <HDisclosurePanel :class="[nuxtLabsTheme.UAccordion.base.item.base, nuxtLabsTheme.UAccordion.base.item.size, nuxtLabsTheme.UAccordion.base.item.color, nuxtLabsTheme.UAccordion.base.item.padding]" static>
            <slot :name="item.slot || 'item'" :item="item" :index="index" :open="open" :close="close">
              {{ item.content }}
            </slot>
          </HDisclosurePanel>
        </div>
      </Transition>
    </HDisclosure>
  </div>
</template>
