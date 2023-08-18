<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import { omit } from 'lodash-es'
import { twJoin, twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UContainer } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<UCard>(),
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

<script lang="ts">
export default defineComponent({
  name: Components.UContainer,
  inheritAttrs: false,
})
</script>

<template>
  <component :is="as" :class="containerClass" v-bind="attrsOmitted">
    <slot />
  </component>
</template>
