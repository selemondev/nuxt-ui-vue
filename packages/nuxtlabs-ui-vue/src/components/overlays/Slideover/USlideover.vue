<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import type { PropType, WritableComputedRef } from 'vue'
import { Dialog as HDialog, DialogPanel as HDialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { USlideover } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

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
    default: 'right',
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
    enterFrom: props.side === 'left' ? '-translate-x-full' : 'translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: props.side === 'left' ? '-translate-x-full' : 'translate-x-full',
  }
})

function close(value: boolean) {
  isOpen.value = value
  emit('close')
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.USlideover,
  inheritAttrs: false,
})
</script>

<template>
  <TransitionRoot as="template" :appear="appear" :show="isOpen">
    <HDialog :class="[wrapperClass, { 'justify-end': side === 'right' }]" v-bind="attrs" @close="(e) => !preventClose && close(e)">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="overlayTransitions">
        <div :class="[variant.overlayBase, variant.overlayBackground]" />
      </TransitionChild>

      <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
        <HDialogPanel :class="[variant.base, variant.width, variant.background, variant.ring, variant.padding]">
          <slot />
        </HDialogPanel>
      </TransitionChild>
    </HDialog>
  </TransitionRoot>
</template>
