<script setup lang='ts'>
import type { URadio } from '@/Types/componentsTypes/components'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'

defineOptions({
  name: Components.URadio,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<URadio>(),
  value: {
    type: [String, Number, Boolean],
    default: null,
  },
  modelValue: {
    type: [String, Number, Boolean, Object],
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
    default: () => nuxtLabsTheme.URadio.base.default.color,
  },
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: string | number | boolean | object)
  (event: 'change')
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<URadio>(
    Components.URadio,
    customProps as VariantJSWithClassesListProps<URadio>,
  )
})

const { emitFormBlur } = useFormEvents()

const pick = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
    if (value)
      emitFormBlur()
  },
})

const inputClass = computed(() => {
  return classNames(
    variant.value.radioBase,
    variant.value.background,
    variant.value.border,
    nuxtLabsTheme.URadio.base.ring.replaceAll('{color}', props.color),
    nuxtLabsTheme.URadio.base.color.replaceAll('{color}', props.color),
  )
})
</script>

<template>
  <div :class="variant.root">
    <div class="flex items-center h-5">
      <input
        :id="`${name}-${value}`"
        v-model="pick"
        :name="name"
        :required="required"
        :value="value"
        :disabled="disabled"
        type="radio"
        class="form-radio"
        :class="inputClass"
        v-bind="$attrs"
        @change="onChange"
      >
    </div>
    <div v-if="label || $slots.label" class="text-sm ms-3">
      <label :for="`${name}-${value}`" :class="variant.label">
        <slot name="label">{{ label }}</slot>
        <span v-if="required" :class="variant.required">*</span>
      </label>
      <p v-if="help" :class="variant.help">
        {{ help }}
      </p>
    </div>
  </div>
</template>
