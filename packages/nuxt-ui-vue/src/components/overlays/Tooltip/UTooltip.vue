<script setup lang='ts'>
import { twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UTooltip } from '@/Types/componentsTypes/components'
import type { PopperOptions } from '@/Types/components/popper'

defineOptions({
  name: Components.UTooltip,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UTooltip>(),
  text: {
    type: String,
    default: null,
  },
  prevent: {
    type: Boolean,
    default: false,
  },
  shortcuts: {
    type: Array as PropType<string[]>,
    default: () => [],
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

const attrs = useAttrs()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UTooltip>(
    Components.UTooltip,
    customProps as VariantJSWithClassesListProps<UTooltip>,
  )
})

const popper = computed<PopperOptions>(() => defu({}, props.popper, variant.value.popper as PopperOptions))

const [trigger, container] = usePopper(popper.value)

const open = ref(false)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

const wrapperClass = computed(() => twMerge(variant.value.wrapper, attrs.class as string))

// Methods

function onMouseOver() {
  // cancel programmed closing
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  // dropdown already open
  if (open.value)
    return

  openTimeout = openTimeout || setTimeout(() => {
    open.value = true
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave() {
  // cancel programmed opening
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  // dropdown already closed
  if (!open.value)
    return

  closeTimeout = closeTimeout || setTimeout(() => {
    open.value = false
    closeTimeout = null
  }, props.closeDelay)
}

const attrsOmitted = omit(attrs, ['class'])

const toolTipTransitions = {
  enterActiveClass: variant.value.transitionEnterActiveClass,
  enterFromClass: variant.value.transitionEnterFromClass,
  enterToClass: variant.value.transitionEnterToClass,
  leaveActiveClass: variant.value.transitionLeaveActiveClass,
  leaveFromClass: variant.value.transitionLeaveFromClass,
  leaveToClass: variant.value.transitionLeaveToClass,
}
</script>

<template>
  <div ref="trigger" :class="wrapperClass" v-bind="attrsOmitted" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot :open="open">
      Hover
    </slot>

    <div v-if="open && !prevent" ref="container" :class="[variant.container, variant.width]">
      <!-- @vue-ignore -->
      <Transition appear v-bind="toolTipTransitions">
        <div :class="[variant.toolTipBase, variant.background, variant.color, variant.rounded, variant.shadow, variant.ring]">
          <slot name="text">
            {{ text }}
          </slot>

          <span v-if="shortcuts?.length" :class="variant.shortcuts">
            <span :class="variant.toolTip">&middot;</span>
            <UKbd v-for="shortcut of shortcuts" :key="shortcut" size="xs">
              {{ shortcut }}
            </Ukbd>
          </span>
        </div>
      </Transition>
    </div>
  </div>
</template>
