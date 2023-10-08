<script setup lang='ts'>
import type { UAlert } from '@/Types/componentsTypes/components'
import type { Avatar } from '@/Types/components/avatar'
import type { Button } from '@/Types/components/button'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'

defineOptions({
  name: Components.UAlert,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UAlert>(),
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: () => nuxtLabsTheme.UAlert.base.default.icon,
  },
  avatar: {
    type: Object as PropType<Avatar>,
    default: null,
  },
  closeButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UAlert.base.default.closeButton,
  },
  actions: {
    type: Array as PropType<(Button & { click: () => void })[]>,
    default: () => [],
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UAlert.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.UAlert.base.default.intent,
    validator(value: string) {
      return [
        ...Object.keys(nuxtLabsTheme.UAlert.base.intent),
        ...Object.values(nuxtLabsTheme.UAlert.base.color).flatMap(value => Object.keys(value)),
      ].includes(value)
    },
  },
})

const emit = defineEmits<{
  (event: 'close'): void
}>()

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UAlert>(
    Components.UAlert,
    customProps as VariantJSWithClassesListProps<UAlert>,
  )
})

const alertClass = computed(() => {
  const variants = nuxtLabsTheme.UAlert.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.UAlert.base.intent[props.intent]

  return classNames(
    variant.value.root,
    variant.value.rounded,
    variant.value.shadow,
    variant.value.padding,
    variants?.replaceAll('{color}', props.color),
  )
})

const closeButtonClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UAlert.base.default.closeButton,
  )
})

function handleClose() {
  emit('close')
}
</script>

<template>
  <div :class="alertClass" v-bind="attrsOmitted">
    <div
      class="flex gap-3"
      :class="{ 'items-start': (description || $slots.description), 'items-center': !description && !$slots.description }"
    >
      <UIcon v-if="icon" :name="icon" :class="variant.iconBase" />

      <UAvatar v-if="avatar" v-bind="{ size: variant.avatarSize, ...avatar }" :class="variant.avatarBase" />

      <div class="flex-1 w-0">
        <p :class="nuxtLabsTheme.UAlert.base.title">
          <slot name="title" :title="title">
            {{ title }}
          </slot>
        </p>
        <p v-if="description || $slots.description" :class="nuxtLabsTheme.UAlert.base.description">
          <slot name="description" :description="description">
            {{ description }}
          </slot>
        </p>

        <div v-if="(description || $slots.description) && actions.length" class="flex items-center gap-2 mt-3">
          <UButton
            v-for="(action, index) of actions" :key="index"
            v-bind="{ ...nuxtLabsTheme.UAlert.base.default.actionButton, ...action }" @click.stop="action.click"
          />
        </div>
      </div>
      <div class="flex items-center flex-shrink-0 gap-3">
        <div v-if="!description && !$slots.description && actions.length" class="flex items-center gap-2">
          <UButton
            v-for="(action, index) of actions" :key="index"
            v-bind="{ ...nuxtLabsTheme.UAlert.base.default.actionButton, ...action }" @click.stop="action.click"
          />
        </div>
        <UButton v-if="closeButton" v-bind="{ closeButtonClass, ...closeButton }" @click.stop="handleClose" />
      </div>
    </div>
  </div>
</template>
