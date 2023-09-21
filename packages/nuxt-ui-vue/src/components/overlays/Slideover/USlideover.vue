<script setup lang='ts'>
import { computed, useAttrs } from 'vue'
import type { PropType, WritableComputedRef } from 'vue'
import { Dialog as HDialog, DialogPanel as HDialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { USlideover } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

defineOptions({
  name: Components.USlideover,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<USlideover>(),
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  appear: {
    type: Boolean,
    default: false,
  },
  side: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'right'].includes(value),
  },
  overlay: {
    type: Boolean,
    default: true,
  },
  transition: {
    type: Boolean,
    default: true,
  },
  preventClose: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const attrs = useAttrs()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<USlideover>(
    Components.USlideover,
    customProps as VariantJSWithClassesListProps<USlideover>,
  )
})

const isOpen: WritableComputedRef<boolean> = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

const slideOverTransitions = {
  enter: variant.value.transitionEnter,
  leave: variant.value.transitionLeave,
}

const overlayTransitions = {
  enter: variant.value.overlayEnterTransition,
  enterFrom: variant.value.overlayEnterFrom,
  enterTo: variant.value.overlayEnterTo,
  leave: variant.value.overlayLeaveTransition,
  leaveFrom: variant.value.overlayLeaveFrom,
  leaveTo: variant.value.overlayLeaveTo,
}

const transitionClass = computed(() => {
  if (!props.transition)
    return {}

  return {
    ...slideOverTransitions,
    enterFrom: props.side === 'left' ? variant.value.enterFromLeft : variant.value.enterFromRight,
    enterTo: variant.value.enterToAndFrom,
    leaveFrom: variant.value.enterToAndFrom,
    leaveTo: props.side === 'left' ? variant.value.enterFromLeft : variant.value.enterFromRight,
  }
})

function close(value: boolean) {
  isOpen.value = value
  emit('close')
}

const dialogWrapperClass = computed(() => {
  return classNames(
    wrapperClass.value,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    { [variant.value?.justifyEnd]: props.side === 'right' },
  )
})
</script>

<template>
  <TransitionRoot as="template" :appear="appear" :show="isOpen">
    <HDialog
      :class="[
        dialogWrapperClass,
      ]" v-bind="attrs" @close="(e) => !preventClose && close(e)"
    >
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="overlayTransitions">
        <div :class="[variant.overlayBase, variant.overlayBackground]" />
      </TransitionChild>

      <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
        <HDialogPanel :class="[variant.slideOverBase, variant.width, variant.background, variant.ring, variant.padding]">
          <slot />
        </HDialogPanel>
      </TransitionChild>
    </HDialog>
  </TransitionRoot>
</template>
