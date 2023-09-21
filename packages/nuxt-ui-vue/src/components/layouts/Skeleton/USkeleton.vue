<script setup lang='ts'>
import { computed, useAttrs } from 'vue'
import { twJoin, twMerge } from 'tailwind-merge'
import { omit } from '../../../utils/lodash'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { USkeleton } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

defineOptions({
  name: Components.USkeleton,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<USkeleton>(),
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<USkeleton>(
    Components.USkeleton,
    customProps as VariantJSWithClassesListProps<USkeleton>,
  )
})

const skeletonClass = computed(() => {
  return twMerge(twJoin(
    variant.value.root,
    variant.value.background,
    variant.value.rounded,
  ), attrs.class as string)
})
</script>

<template>
  <div :class="skeletonClass" v-bind="attrsOmitted" />
</template>
