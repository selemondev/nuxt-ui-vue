<script setup lang='ts'>
import { computed, defineComponent, onMounted, ref, useSlots } from 'vue'
import classNames from 'classnames'
import { useFormEvents } from '@/composables/useFormEvents'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import { useVariants } from '@/composables/useVariants'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { Components } from '@/Types/enums/Components'
import type { UInput } from '@/Types/componentsTypes/components'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UInput>(),
  modelValue: {
    type: [String, Number],
    default: '',
  },
  type: {
    type: String,
    default: 'text',
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
  autofocus: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
  loadingIcon: {
    type: String,
    default: () => nuxtLabsTheme.UInput.base.default.loadingIcon,
  },
  leadingIcon: {
    type: String,
    default: null,
  },
  trailingIcon: {
    type: String,
    default: null,
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
  size: {
    type: String,
    default: () => nuxtLabsTheme.UInput.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UInput.base.size).includes(value)
    },
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UInput.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.UInput.base.default.intent,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
  (event: 'blur'): void
}>()
const slots = useSlots()
const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UInput>(
    Components.UInput,
    customProps as VariantJSWithClassesListProps<UInput>,
  )
})

const { emitFormBlur } = useFormEvents()

const input = ref<HTMLInputElement | null>(null)

function autoFocus() {
  if (props.autofocus)
    input.value?.focus()
}

function onInput(event: InputEvent) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function onBlur(event: FocusEvent) {
  emitFormBlur()
  emit('blur', event)
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, 100)
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

const inputClass = computed(() => {
  const variants = nuxtLabsTheme.UInput.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.UInput.base.intent[props.intent]
  return classNames(
    variant.value.base,
    variant.value.rounded,
    variant.value.placeholder,
    nuxtLabsTheme.UInput.base.size[props.size],
    props.padded ? nuxtLabsTheme.UInput.base.padding[props.size] : 'p-0',
    variants?.replace('{color}', props.color),
    (isLeading.value || slots.leading) && nuxtLabsTheme.UInput.base.leading.padding[props.size],
    (isTrailing.value || slots.trailing) && nuxtLabsTheme.UInput.base.trailing.padding[props.size],
  )
})

const leadingWrapperIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UInput.base.icon.leading.wrapper,
    nuxtLabsTheme.UInput.base.icon.leading.pointer,
    nuxtLabsTheme.UInput.base.icon.leading.padding[props.size],
  )
})

const leadingIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UInput.base.icon.base,
    nuxtLabsTheme.UInput.base.icon.color.replaceAll('{color}', props.color),
    nuxtLabsTheme.UInput.base.icon.size[props.size],
    props.loading && 'animate-spin',
  )
})

const trailingWrapperIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UInput.base.icon.trailing.wrapper,
    nuxtLabsTheme.UInput.base.icon.trailing.pointer,
    nuxtLabsTheme.UInput.base.icon.trailing.padding[props.size],
  )
})

const trailingIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UInput.base.icon.base,
    nuxtLabsTheme.UInput.base.icon.color.replaceAll('{color}', props.color),
    nuxtLabsTheme.UInput.base.icon.size[props.size],
    props.loading && !isLeading.value && 'animate-spin',
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UInput,
  inheritAttrs: false,
})
</script>

<template>
  <div :class="variant.root">
    <input
      :id="name"
      ref="input"
      :name="name"
      :value="modelValue"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled || loading"
      class="form-input"
      :class="inputClass"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
    >
    <slot />

    <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
      <slot name="leading" :disabled="disabled" :loading="loading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
      <slot name="trailing" :disabled="disabled" :loading="loading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" />
      </slot>
    </span>
  </div>
</template>
