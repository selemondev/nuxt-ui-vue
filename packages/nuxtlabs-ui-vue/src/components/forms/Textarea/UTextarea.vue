<script setup lang='ts'>
import { computed, defineComponent, nextTick, onMounted, ref, watch } from 'vue'
import classNames from 'classnames'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import { Components } from '@/Types/enums/Components'
import type { UTextarea } from '@/Types/componentsTypes/components'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import { useVariants } from '@/composables/useVariants'
import { useFormEvents } from '@/composables/useFormEvents'

const props = defineProps({
  ...getVariantPropsWithClassesList<UTextarea>(),
  modelValue: {
    type: [String, Number],
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
  rows: {
    type: Number,
    default: 3,
  },
  autoresize: {
    type: Boolean,
    default: false,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  resize: {
    type: Boolean,
    default: false,
  },
  padded: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.UTextarea.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UTextarea.base.size).includes(value)
    },
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UTextarea.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.UTextarea.base.default.intent,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
  (event: 'blur'): void
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UTextarea>(
    Components.UTextarea,
    customProps as VariantJSWithClassesListProps<UTextarea>,
  )
})

const textarea = ref<HTMLTextAreaElement | null>(null)

const { emitFormBlur } = useFormEvents()

function autoFocus() {
  if (props.autofocus)
    textarea.value?.focus()
}

function autoResize() {
  if (props.autoresize) {
    if (!textarea.value)
      return

    textarea.value.rows = props.rows

    const styles = window.getComputedStyle(textarea.value)
    const paddingTop = Number.parseInt(styles.paddingTop)
    const paddingBottom = Number.parseInt(styles.paddingBottom)
    const padding = paddingTop + paddingBottom
    const lineHeight = Number.parseInt(styles.lineHeight)
    const { scrollHeight } = textarea.value
    const newRows = (scrollHeight - padding) / lineHeight

    if (newRows > props.rows)
      textarea.value.rows = newRows
  }
}

function onInput(event: InputEvent) {
  autoResize()

  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

function onBlur(event: FocusEvent) {
  emitFormBlur()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  emit('blur', event)
}

onMounted(() => {
  setTimeout(() => {
    autoFocus()
  }, 100)
})

watch(() => props.modelValue, () => {
  nextTick(autoResize)
})

onMounted(() => {
  setTimeout(() => {
    autoFocus()
    autoResize()
  }, 100)
})

const textareaClass = computed(() => {
  const variants = nuxtLabsTheme.UTextarea.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.UTextarea.base.intent[props.intent]

  return classNames(
    variant.value.textAreaBase,
    variant.value.rounded,
    variant.value.placeholder,
    nuxtLabsTheme.UTextarea.base.size[props.size],
    props.padded ? nuxtLabsTheme.UTextarea.base.padding[props.size] : 'p-0',
    variants?.replaceAll('{color}', props.color),
    !props.resize && 'resize-none',
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UTextarea,
  inheritAttrs: false,
})
</script>

<template>
  <div :class="variant.root">
    <!-- @vue-ignore -->
    <textarea
      :id="name"
      ref="textarea"
      :value="modelValue"
      :name="name"
      :rows="rows"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      class="form-textarea"
      :class="textareaClass"
      v-bind="$attrs"
      @input="onInput"
      @blur="onBlur"
    />
  </div>
</template>
