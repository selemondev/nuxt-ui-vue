<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { URange } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useFormEvents } from '@/composables/useFormEvents'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<URange>(),
  modelValue: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.URange.base.default.size,
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.URange.base.default.color,
  },
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: any): void
  (event: 'change', value: any): void
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<URange>(
    Components.URange,
    customProps as VariantJSWithClassesListProps<URange>,
  )
})

const { emitFormBlur } = useFormEvents()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  },
})

function onChange(event: Event) {
  emits('change', event)
  emitFormBlur()
}

const wrapperClass = computed(() => {
  return classNames(
    variant.value.root,
    nuxtLabsTheme.URange.base.size[props.size],
  )
})

const inputClass = computed(() => {
  return classNames(
    variant.value.base,
    variant.value.background,
    variant.value.rounded,
    nuxtLabsTheme.URange.base.ring.replaceAll('{color}', props.color),
    nuxtLabsTheme.URange.base.size[props.size],
  )
})

const thumbClass = computed(() => {
  return classNames(
    nuxtLabsTheme.URange.base.thumb.base,
    // Intermediate class to allow thumb ring or background color (set to `current`) as it's impossible to safelist with arbitrary values
    nuxtLabsTheme.URange.base.thumb.color.replaceAll('{color}', props.color),
    nuxtLabsTheme.URange.base.thumb.ring,
    nuxtLabsTheme.URange.base.thumb.background,
    nuxtLabsTheme.URange.base.thumb.size[props.size],
  )
})

const trackClass = computed(() => {
  return classNames(
    nuxtLabsTheme.URange.base.track.base,
    nuxtLabsTheme.URange.base.track.background,
    nuxtLabsTheme.URange.base.track.rounded,
    nuxtLabsTheme.URange.base.track.size[props.size],
  )
})

const progressClass = computed(() => {
  return classNames(
    nuxtLabsTheme.URange.base.progress.base,
    nuxtLabsTheme.URange.base.progress.rounded,
    nuxtLabsTheme.URange.base.progress.background.replaceAll('{color}', props.color),
    nuxtLabsTheme.URange.base.progress.size[props.size],
  )
})

const progressStyle = computed(() => {
  const { modelValue, min, max } = props
  const clampedValue = Math.max(min, Math.min(modelValue, max))
  const relativeValue = (clampedValue - min) / (max - min)
  return {
    width: `${relativeValue * 100}%`,
  }
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.URange,
  inheritAttrs: false,
})
</script>

<template>
  <div :class="wrapperClass">
    <input
      :id="name"
      v-model.number="value"
      :name="name"
      :min="min"
      :max="max"
      :disabled="disabled"
      :step="step"
      type="range"
      :class="[inputClass, thumbClass, trackClass]"
      v-bind="$attrs"
      @change="onChange"
    >

    <span :class="progressClass" :style="progressStyle" />
  </div>
</template>
