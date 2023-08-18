<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import { omit } from 'lodash-es'
import { twJoin, twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { USkeleton } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'

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

<script lang="ts">
export default defineComponent({
  name: Components.USkeleton,
  inheritAttrs: false,
})
</script>

<template>
  <div :class="skeletonClass" v-bind="attrsOmitted" />
</template>
