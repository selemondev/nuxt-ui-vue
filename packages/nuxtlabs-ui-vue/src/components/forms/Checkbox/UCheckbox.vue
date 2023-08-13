<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UCheckbox } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useFormEvents } from '@/composables/useFormEvents'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UCheckbox>(),
  value: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  modelValue: {
    type: [Boolean, Array],
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UCheckbox.base.default.color,
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
  return useVariants<UCheckbox>(
    Components.UCheckbox,
    customProps as VariantJSWithClassesListProps<UCheckbox>,
  )
})
const { emitFormBlur } = useFormEvents()

const toggle = computed({
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

const inputClass = computed(() => {
  return classNames(
    variant.value.base,
    variant.value.rounded,
    variant.value.background,
    variant.value.border,
    nuxtLabsTheme.UCheckbox.base.ring.replaceAll('{color}', props.color),
    nuxtLabsTheme.UCheckbox.base.color.replaceAll('{color}', props.color),
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UCheckbox,
  inheritAttrs: false,
})
</script>

<template>
  <div :class="variant.root">
    <div class="flex items-center h-5">
      <input
        :id="name"
        v-model="toggle"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled"
        :checked="checked"
        :indeterminate="indeterminate"
        type="checkbox"
        class="form-checkbox"
        :class="inputClass"
        v-bind="$attrs"
        @change="onChange"
      >
    </div>
    <div v-if="label || $slots.label" class="ms-3 text-sm">
      <label :for="name" :class="variant.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="variant.required">*</span>
      </label>
      <p v-if="help" :class="variant.help">
        {{ help }}
      </p>
    </div>
  </div>
</template>
