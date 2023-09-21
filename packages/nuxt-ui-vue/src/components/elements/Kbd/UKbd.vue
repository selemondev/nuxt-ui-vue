<script setup lang='ts'>
import { computed } from 'vue'
import { useVariants } from '@/composables/useVariants'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { Components } from '@/Types/enums/Components'
import type { UKbd } from '@/Types/componentsTypes/components'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

defineOptions({
  name: Components.UKbd,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UKbd>(),
  value: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.UKbd.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UKbd.base.size).includes(value)
    },
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }

  return useVariants(
    Components.UKbd,
    customProps as VariantJSWithClassesListProps<UKbd>,
  )
})
</script>

<template>
  <kbd :class="[variant.root, nuxtLabsTheme.UKbd.base.size[size], variant.padding, variant.rounded, variant.font, variant.background, variant.ring]">
    <slot>{{ value }}</slot>
  </kbd>
</template>
