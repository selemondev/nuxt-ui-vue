<script setup lang='ts'>
import { computed, useAttrs } from 'vue'
import { twJoin, twMerge } from 'tailwind-merge'
import { omit } from '../../../utils/lodash'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UContainer } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

defineOptions({
  name: Components.UContainer,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UContainer>(),
  as: {
    type: String,
    default: 'div',
  },
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UContainer>(
    Components.UContainer,
    customProps as VariantJSWithClassesListProps<UContainer>,
  )
})

const containerClass = computed(() => {
  return twMerge(twJoin(
    variant.value.root,
    variant.value.padding,
    variant.value.constrained,
  ), attrs.class as string)
})
</script>

<template>
  <component :is="as" :class="containerClass" v-bind="attrsOmitted">
    <slot />
  </component>
</template>
