<script setup lang='ts'>
import { computed, onMounted, ref, useAttrs } from 'vue'
import type { PropType } from 'vue'
import { twMerge } from 'tailwind-merge'
import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from '@headlessui/vue'
import defu from 'defu'
import { omit } from '../../../utils/lodash'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UPopover } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import type { PopperOptions } from '@/Types/components/popper'
import { useVariants } from '@/composables/useVariants'
import { usePopper } from '@/composables/usePopper'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

defineOptions({
  name: Components.UPopover,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UPopover>(),
  mode: {
    type: String,
    default: 'click',
    validator: (value: string) => {
      return ['click', 'hover'].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  popper: {
    type: Object as PropType<PopperOptions>,
    default: () => ({}),
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UPopover>(
    Components.UPopover,
    customProps as VariantJSWithClassesListProps<UPopover>,
  )
})

const attrs = useAttrs()

const popper = computed<PopperOptions>(() => defu(props.mode === 'hover' ? { offsetDistance: 0 } : {}, props.popper, nuxtLabsTheme.UPopover.base.popper as PopperOptions))

const [trigger, container] = usePopper(popper.value)

const popover = ref<any>(null)
const popoverApi = ref<any>(null)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

onMounted(() => {
  const popoverProvides = popover.value?.$.provides
  if (!popoverProvides)
    return

  const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides)
  popoverApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]]
})

const containerStyle = computed(() => {
  const offsetDistance = (props.popper as PopperOptions)?.offsetDistance || (nuxtLabsTheme.UPopover.base.popper as PopperOptions)?.offsetDistance || 8

  return props.mode === 'hover' ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {}
})

const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

function onMouseOver() {
  if (props.mode !== 'hover' || !popoverApi.value)
    return

  // cancel programmed closing
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  // dropdown already open
  if (popoverApi.value.popoverState === 0)
    return

  openTimeout = openTimeout || setTimeout(() => {
    popoverApi.value.togglePopover && popoverApi.value.togglePopover()
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave() {
  if (props.mode !== 'hover' || !popoverApi.value)
    return

  // cancel programmed opening
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  // dropdown already closed
  if (popoverApi.value.popoverState === 1)
    return

  closeTimeout = closeTimeout || setTimeout(() => {
    popoverApi.value.closePopover && popoverApi.value.closePopover()
    closeTimeout = null
  }, props.closeDelay)
}

const attrsOmitted = omit(attrs, ['class'])

const popoverTransitions = {
  enterActiveClass: variant.value.transitionEnterActiveClass,
  enterFromClass: variant.value.transitionEnterFromClass,
  enterToClass: variant.value.transitionEnterToClass,
  leaveClass: variant.value.transitionLeaveActiveClass,
  leaveFromClass: variant.value.transitionLeaveFromClass,
  leaveToClass: variant.value.transitionLeaveToClass,
}
</script>

<template>
  <HPopover ref="popover" v-slot="{ open, close }" :class="wrapperClass" v-bind="attrsOmitted" @mouseleave="onMouseLeave">
    <HPopoverButton
      ref="trigger"
      as="div"
      :disabled="disabled"
      :class="variant.popover"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :close="close">
        <button :disabled="disabled">
          Open
        </button>
      </slot>
    </HPopoverButton>

    <div v-if="open" ref="container" :class="[variant.container, variant.width]" :style="containerStyle" @mouseover="onMouseOver">
      <!-- @vue-ignore -->
      <Transition appear v-bind="popoverTransitions">
        <HPopoverPanel :class="[variant.base, variant.background, variant.ring, variant.rounded, variant.shadow]" static>
          <slot name="panel" :open="open" :close="close" />
        </HPopoverPanel>
      </Transition>
    </div>
  </HPopover>
</template>
