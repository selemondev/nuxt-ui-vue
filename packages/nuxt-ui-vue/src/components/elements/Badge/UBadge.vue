<script setup lang='ts'>
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UBadge } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<UBadge>(),
  size: {
    type: String,
    default: () => nuxtLabsTheme.UBadge.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UBadge.base.size).includes(value)
    },
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UBadge.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.UBadge.base.default.intent,
    validator(value: string) {
      return [
        ...Object.keys(nuxtLabsTheme.UBadge.base.intent),
        ...Object.values(nuxtLabsTheme.UBadge.base.color).flatMap(value => Object.keys(value)),
      ].includes(value)
    },
  },
  label: {
    type: [String, Number],
    default: null,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UBadge>(
    Components.UBadge,
    customProps as VariantJSWithClassesListProps<UBadge>,
  )
})

const badgeClass = computed(() => {
  const variants = nuxtLabsTheme.UBadge.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.UBadge.base.intent[props.intent]

  return classNames(
    variant.value.base,
    variant.value.font,
    variant.value.rounded,
    nuxtLabsTheme.UBadge.base.size[props.size],
    variants?.replaceAll('{color}', props.color),
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UBadge,
  inheritAttrs: false,
})
</script>

<template>
  <span :class="badgeClass">
    <slot>{{ label }}</slot>
  </span>
</template>
