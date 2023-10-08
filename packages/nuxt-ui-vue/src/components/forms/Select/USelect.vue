<script setup lang='ts'>
import type { USelect } from '@/Types/componentsTypes/components'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'

defineOptions({
  name: Components.USelect,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<USelect>(),
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  name: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  loadingIcon: {
    type: String,
    default: () => nuxtLabsTheme.USelect.base.default.loadingIcon,
  },
  leadingIcon: {
    type: String,
    default: null,
  },
  trailingIcon: {
    type: String,
    default: () => nuxtLabsTheme.USelect.base.default.trailingIcon,
  },
  trailing: {
    type: Boolean,
    default: false,
  },
  leading: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  padded: {
    type: Boolean,
    default: true,
  },
  options: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.USelect.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.USelect.base.size).includes(value)
    },
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.USelect.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.USelect.base.default.intent,
  },
  optionAttribute: {
    type: String,
    default: 'label',
  },
  valueAttribute: {
    type: String,
    default: 'value',
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number | object): void
  (event: 'change'): void
}>()

const slots = useSlots()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<USelect>(
    Components.USelect,
    customProps as VariantJSWithClassesListProps<USelect>,
  )
})

const { emitFormBlur } = useFormEvents()

function onInput(event: InputEvent) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function onChange(event: Event) {
  emitFormBlur()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  emit('change', event)
}

function guessOptionValue(option: any) {
  return get(option, props.valueAttribute, get(option, props.optionAttribute))
}

function guessOptionText(option: any) {
  return get(option, props.optionAttribute, get(option, props.valueAttribute))
}

function normalizeOption(option: any) {
  if (['string', 'number', 'boolean'].includes(typeof option)) {
    return {
      [props.valueAttribute]: option,
      [props.optionAttribute]: option,
    }
  }

  return {
    ...option,
    [props.valueAttribute]: guessOptionValue(option),
    [props.optionAttribute]: guessOptionText(option),
  }
}

const normalizedOptions = computed(() => {
  return props.options.map(option => normalizeOption(option))
})

const normalizedOptionsWithPlaceholder: ComputedRef<{ disabled?: boolean; children: { disabled?: boolean }[] }[]> = computed(() => {
  if (!props.placeholder)
    return normalizedOptions.value

  return [
    {
      [props.valueAttribute]: '',
      [props.optionAttribute]: props.placeholder,
      disabled: true,
    },
    ...normalizedOptions.value,
  ]
})

const normalizedValue = computed(() => {
  const normalizeModelValue = normalizeOption(props.modelValue)
  const foundOption = normalizedOptionsWithPlaceholder.value.find(option => option[props.valueAttribute] === normalizeModelValue[props.valueAttribute])
  if (!foundOption)
    return ''

  return foundOption[props.valueAttribute]
})

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})

const leadingIconName = computed(() => {
  if (props.loading)
    return props.loadingIcon

  return props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  if (props.loading && !isLeading.value)
    return props.loadingIcon

  return props.trailingIcon || props.icon
})

const selectClass = computed(() => {
  const variants = nuxtLabsTheme.USelect.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.USelect.base.intent[props.intent]

  return classNames(
    variant.value.selectBase,
    variant.value.rounded,
    nuxtLabsTheme.USelect.base.size[props.size],
    props.padded ? nuxtLabsTheme.USelect.base.padding[props.size] : 'p-0',
    variants?.replaceAll('{color}', props.color),
    (isLeading.value || slots.leading) && nuxtLabsTheme.USelect.base.leading.padding[props.size],
    (isTrailing.value || slots.trailing) && nuxtLabsTheme.USelect.base.trailing.padding[props.size],
  )
})

const leadingWrapperIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.USelect.base.icon.leading.wrapper,
    nuxtLabsTheme.USelect.base.icon.leading.pointer,
    nuxtLabsTheme.USelect.base.icon.leading.padding[props.size],
  )
})

const leadingIconClass = computed(() => {
  return classNames(
    variant.value.iconBase,
    nuxtLabsTheme.USelect.base.icon.color.replaceAll('{color}', props.color),
    nuxtLabsTheme.USelect.base.icon.size[props.size],
    props.loading && 'animate-spin',
  )
})

const trailingWrapperIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.USelect.base.icon.trailing.wrapper,
    nuxtLabsTheme.USelect.base.icon.trailing.pointer,
    nuxtLabsTheme.USelect.base.icon.trailing.padding[props.size],
  )
})

const trailingIconClass = computed(() => {
  return classNames(
    variant.value.iconBase,
    nuxtLabsTheme.USelect.base.icon.color.replaceAll('{color}', props.color),
    nuxtLabsTheme.USelect.base.icon.size[props.size],
    props.loading && !isLeading.value && 'animate-spin',
  )
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])
</script>

<template>
  <div :class="variant.root">
    <!-- @vue-ignore -->
    <select
      :id="name"
      :name="name"
      :value="modelValue"
      :required="required"
      :disabled="disabled || loading"
      class="form-select"
      :class="selectClass"
      v-bind="attrsOmitted"
      @input="onInput"
      @change="onChange"
    >
      <template v-for="(option, index) in normalizedOptionsWithPlaceholder">
        <optgroup
          v-if="option.children"
          :key="`${option[valueAttribute]}-optgroup-${index}`"
          :value="option[valueAttribute]"
          :label="option[optionAttribute]"
        >
          <option
            v-for="(childOption, index2) in option.children"
            :key="`${childOption[valueAttribute]}-${index}-${index2}`"
            :value="childOption[valueAttribute]"
            :selected="childOption[valueAttribute] === normalizedValue"
            :disabled="childOption.disabled"
            v-text="childOption[optionAttribute]"
          />
        </optgroup>
        <option
          v-else
          :key="`${option[valueAttribute]}-${index}`"
          :value="option[valueAttribute]"
          :selected="option[valueAttribute] === normalizedValue"
          :disabled="option.disabled"
          v-text="option[optionAttribute]"
        />
      </template>
    </select>

    <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
      <slot name="trailing" :disabled="disabled" :loading="loading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
      </slot>
    </span>
  </div>
</template>
