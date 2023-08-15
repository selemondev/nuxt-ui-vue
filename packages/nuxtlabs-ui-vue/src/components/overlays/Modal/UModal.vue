<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import { omit } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import { Dialog as HDialog, DialogPanel as HDialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UModal } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<UModal>(),
  modelValue: {
    type: Boolean,
    default: false,
  },
  appear: {
    type: Boolean,
    default: false,
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
  fullscreen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'close'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UModal>(
    Components.UModal,
    customProps as VariantJSWithClassesListProps<UModal>,
  )
})

const attrs = useAttrs()

const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

const isOpen = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

function close(value: boolean) {
  isOpen.value = value

  emit('close')
}

const attrsOmitted = omit(attrs, ['class'])

const overlayTransitions = {
  enter: variant.value.overlayEnterTransition,
  enterFrom: variant.value.overlayEnterFrom,
  enterTo: variant.value.overlayEnterTo,
  leave: variant.value.overlayLeaveTransition,
  leaveFrom: variant.value.overlayLeaveFrom,
  leaveTo: variant.value.overlayLeaveTo,
}

const modalTransitions = {
  enter: variant.value.transitionEnter,
  enterFrom: variant.value.transitionEnterFrom,
  enterTo: variant.value.transitionEnterTo,
  leave: variant.value.transitionLeave,
  leaveFrom: variant.value.transitionLeaveFrom,
  leaveTo: variant.value.transitionLeaveTo,
}

const transitionClass = computed(() => {
  if (!props.transition)
    return {}

  return {
    ...modalTransitions,
  }
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UModal,
  inheritAttrs: false,
})
</script>

<template>
  <TransitionRoot :appear="appear" :show="isOpen" as="template">
    <HDialog :class="wrapperClass" v-bind="attrsOmitted" @close="(e) => !preventClose && close(e)">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="overlayTransitions">
        <div :class="[variant.overlayBase, variant.overlayBackground]" />
      </TransitionChild>

      <div :class="variant.inner">
        <div :class="[variant.container, variant.padding]">
          <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
            <HDialogPanel
              :class="[
                variant.base,
                variant.background,
                variant.ring,
                variant.shadow,
                fullscreen ? variant.widthScreen : variant.width,
                fullscreen ? variant.heightScreen : variant.height,
                fullscreen ? variant.roundedNone : variant.rounded,
                fullscreen ? variant.marginNone : variant.margin,
              ]"
            >
              <slot />
            </HDialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HDialog>
  </TransitionRoot>
</template>
