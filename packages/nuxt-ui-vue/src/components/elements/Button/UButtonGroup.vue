<script setup lang="ts">
import { computed } from 'vue'
import { getVariantPropsWithClassesList } from '../../../utils/getVariantProps'
import type { UButtonGroup } from '../../../Types/componentsTypes/components'
import { Components } from '../../../Types/enums/Components'
import { useVariants } from '../../../composables/useVariants'

defineOptions({
  name: Components.UButtonGroup,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UButtonGroup>(),
  orientation: {
    type: String,
    default: 'horizontal',
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.orientation === 'vertical' ? 'vertical' : 'horizontal',
  }
  return useVariants<UButtonGroup>(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Components.UButtonGroup, customProps,
  )
})
</script>

<template>
  <div :class="variant.root">
    <slot />
  </div>
</template>
