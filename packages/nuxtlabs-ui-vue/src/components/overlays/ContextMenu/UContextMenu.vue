<script setup lang='ts'>
import { computed, defineComponent, toRef, useAttrs } from 'vue'
import type { PropType } from 'vue'
import { twJoin, twMerge } from 'tailwind-merge'
import defu from 'defu'
import { onClickOutside } from '@vueuse/core'
import type { VirtualElement } from '@popperjs/core'
import { omit } from 'lodash-es'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UContextMenu } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import { usePopper } from '@/composables/usePopper'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UContextMenu>(),
  modelValue: {
    type: Boolean,
    default: false,
  },
  virtualElement: {
    type: Object,
    required: true,
  },
  popper: {
    type: Object as PropType<PopperOptions>,
    default: () => ({}),
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const attrs = useAttrs()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UContextMenu>(
    Components.UContextMenu,
    customProps as VariantJSWithClassesListProps<UContextMenu>,
  )
})

const popper = computed<PopperOptions>(() => defu({}, props.popper, nuxtLabsTheme.UContextMenu.base.popper as PopperOptions))

const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const virtualElement = toRef(props, 'virtualElement') as Ref<VirtualElement>

const [, container] = usePopper(popper.value, virtualElement)

const wrapperClass = computed(() => {
  return twMerge(twJoin(
    variant.value.container,
    variant.value.width,
  ), attrs.class as string)
})

onClickOutside(container, () => {
  isOpen.value = false
})

const attrsOmitted = omit(attrs, ['class'])

const contextMenuTransitions = {
  enter: variant.value.enterActiveClass,
  enterFrom: variant.value.enterFromClass,
  enterTo: variant.value.enterToClass,
  leave: variant.value.leaveActiveClass,
  leaveFrom: variant.value.leaveFromClass,
  leaveTo: variant.value.leaveToClass,
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UContextMenu,
  inheritAttrs: false,
})
</script>

<template>
  <div v-if="isOpen" ref="container" :class="wrapperClass" v-bind="attrsOmitted">
    <Transition appear v-bind="contextMenuTransitions">
      <div :class="[variant.base, variant.ring, variant.rounded, variant.shadow, variant.background]">
        <slot />
      </div>
    </Transition>
  </div>
</template>
