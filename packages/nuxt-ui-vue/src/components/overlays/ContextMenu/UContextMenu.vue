<script setup lang='ts'>
import { twJoin, twMerge } from 'tailwind-merge'
import type { VirtualElement } from '@popperjs/core'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UContextMenu } from '@/Types/componentsTypes/components'
import type { PopperOptions } from '@/Types/components/popper'

defineOptions({
  name: Components.UContextMenu,
  inheritAttrs: false,
})

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
  enterActiveClass: variant.value.enterActiveClass,
  enterFromClass: variant.value.enterFromClass,
  enterToClass: variant.value.enterToClass,
  leaveActiveClass: variant.value.leaveActiveClass,
  leaveFromClass: variant.value.leaveFromClass,
  leaveToClass: variant.value.leaveToClass,
}
</script>

<template>
  <div v-if="isOpen" ref="container" :class="wrapperClass" v-bind="attrsOmitted">
    <!-- @vue-ignore -->
    <Transition appear v-bind="contextMenuTransitions">
      <div :class="[variant.contextMenuBase, variant.ring, variant.rounded, variant.shadow, variant.background]">
        <slot />
      </div>
    </Transition>
  </div>
</template>
