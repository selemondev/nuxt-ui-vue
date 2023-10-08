<script setup lang='ts'>
import { twJoin, twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { USkeleton } from '@/Types/componentsTypes/components'

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
