<script setup lang='ts'>
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import classNames from 'classnames'
import { Icon } from '@iconify/vue'
import type { VariantJSWithClassesListProps } from '../../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../../utils/getVariantProps'
import type { UAvatar } from '../../../Types/componentsTypes/components'
import { Components } from '../../../Types/enums/Components'
import { useVariants } from '../../../composables/useVariants'
import nuxtLabsTheme from '../../../theme/nuxtLabsTheme'
import { Positions } from '@/Types/enums/Positions'

export type AvatarSize = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type AvatarChipPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
const props = defineProps({
  ...getVariantPropsWithClassesList<UAvatar>(),
  name: {
    type: String,
    required: false,
  },
  src: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<AvatarSize>,
    default: 'md',
  },

  icon: {
    type: String,
    default: 'ic:round-star-border',
  },

  alt: {
    type: String,
    default: null,
  },

  chipColor: {
    type: String,
    default: '',
  },

  chipSize: {
    type: String,
    default: 'md',
  },

  chipPosition: {
    type: String as PropType<AvatarChipPosition>,
    default: Positions.BR,
  },

  chipText: {
    type: String,
    default: '',
  },

})

const placeholder = computed(() => {
  return (props.alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2)
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UAvatar>(
    Components.UAvatar,
    customProps as VariantJSWithClassesListProps<UAvatar>,
  )
})

const avatarWrapperClasses = computed<string>(() => {
  return classNames(
    variant.value.root,
    variant.value.avatarSize && variant.value[props.size],
  )
})
const avatarClasses = computed(() => {
  let sizeClass = ''

  if (typeof props.size === 'number') {
    return props.size
  }
  else {
    sizeClass += variant.value[props.size] || ''
    return classNames(variant.value.avatarRounded, sizeClass, variant.value.root)
  }
})

const avatarChipSize = computed(() => {
  let sizeClass = ''

  if (typeof props.size === 'number') {
    return props.size
  }
  else {
    sizeClass += nuxtLabsTheme.UAvatar.base.avatarChipSize[props.size] || ''
    return classNames(sizeClass)
  }
})

const avatarChipClass = computed(() => {
  return classNames(
    variant.value.avatarChipClass,
    nuxtLabsTheme.UAvatar.base.avatarChipPosition[props.chipPosition],
  )
})

const avatarIconSize = computed(() => {
  return classNames(
    nuxtLabsTheme.UAvatar.base.avatarIconSize[props.size],
  )
})

const avatarChipColorStyles = computed(() => ({
  'background-color': props.chipColor || '',
}))
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UAvatar,
  inheritAttrs: false,
})
</script>

<template>
  <span :class="[avatarWrapperClasses, avatarClasses]" :title="props.name">
    <img v-if="props.src" :class="avatarClasses" :src="props.src" :alt="props.name">
    <span v-else-if="!props.src" :class="variant.avatarPlaceholderClass">{{ placeholder }}</span>
    <Icon v-if="!props.src && !placeholder" :icon="props.icon" :class="[avatarIconSize, variant.avatarIconColor]" />
    <span v-if="props.chipColor" :style="avatarChipColorStyles" :class="[avatarChipClass, avatarChipSize]">
      {{ chipText }}
    </span>
    <slot />
  </span>
</template>
