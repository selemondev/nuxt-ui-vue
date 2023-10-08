<script setup lang='ts'>
import { twJoin, twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UCard } from '@/Types/componentsTypes/components'

defineOptions({
  name: Components.UCard,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UCard>(),
  as: {
    type: String,
    default: 'div',
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UCard>(
    Components.UCard,
    customProps as VariantJSWithClassesListProps<UCard>,
  )
})

const attrs = useAttrs()

const cardClass = computed(() => {
  return twMerge(twJoin(
    variant.value.root,
    variant.value.rounded,
    variant.value.divide,
    variant.value.ring,
    variant.value.shadow,
    variant.value.background,
  ), attrs.class as string)
})

const attrsOmitted = omit(attrs, ['class'])
</script>

<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class="cardClass"
    v-bind="attrsOmitted"
  >
    <div v-if="$slots.header" :class="[variant.headerBase, variant.headerPadding, variant.headerBackground]">
      <slot name="header" />
    </div>
    <div :class="[variant.bodyBase, variant.bodyPadding, variant.bodyBackground]">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="[variant.footerBase, variant.footerPadding, variant.footerBackground]">
      <slot name="footer" />
    </div>
  </component>
</template>
