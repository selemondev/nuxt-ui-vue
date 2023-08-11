<script setup lang='ts'>
import { computed, defineComponent, ref, watch } from 'vue'
import classNames from 'classnames'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import { Components } from '@/Types/enums/Components'
import type { UAvatar } from '@/Types/componentsTypes/components'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import { useVariants } from '@/composables/useVariants'

const props = defineProps({
  ...getVariantPropsWithClassesList<UAvatar>(),
  src: {
    type: [String, Boolean],
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  text: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: () => nuxtLabsTheme.UAvatar.base.default.icon,
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.UAvatar.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UAvatar.base.size).includes(value)
    },
  },
  chipColor: {
    type: String,
    default: () => nuxtLabsTheme.UAvatar.base.default.chipColor,
  },
  chipPosition: {
    type: String,
    default: () => nuxtLabsTheme.UAvatar.base.default.chipPosition,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UAvatar.base.chip.position).includes(value)
    },
  },
  chipText: {
    type: [String, Number],
    default: null,
  },
})

const error = ref(false)

watch(() => props.src, () => {
  if (error.value)
    error.value = false
})

function onError() {
  error.value = true
}

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

const url = computed(() => {
  if (typeof props.src === 'boolean')
    return null

  return props.src
})

const placeholder = computed(() => {
  return (props.alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2)
})

const wrapperClass = computed(() => {
  return classNames(
    variant.value.root,
    (error.value || !url.value) && variant.value.background,
    variant.value.rounded,
    nuxtLabsTheme.UAvatar.base.size[props.size],
  )
})

const avatarClass = computed(() => {
  return classNames(
    variant.value.rounded,
    nuxtLabsTheme.UAvatar.base.size[props.size],
  )
})
const iconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UAvatar.base.icon?.base,
    nuxtLabsTheme.UAvatar.base.size[props.size],
  )
})

const chipClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UAvatar?.base?.chip?.base,
    nuxtLabsTheme.UAvatar.base?.chip?.size[props.size],
    nuxtLabsTheme.UAvatar.base?.chip?.position[props.chipPosition],
    nuxtLabsTheme.UAvatar.base?.chip?.background.replaceAll('{color}', props.chipColor),
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UAvatar,
  inheritAttrs: false,
})
</script>

<template>
  <span :class="wrapperClass">
    <img
      v-if="url && !error"
      :class="avatarClass"
      :alt="alt"
      :src="url"
      v-bind="$attrs"
      @error="onError"
    >
    <span v-else-if="text" :class="variant.text">{{ text }}</span>
    <UIcon v-else-if="icon" :name="icon" :class="iconClass" />
    <span v-else-if="placeholder" :class="variant.placeholder">{{ placeholder }}</span>

    <span v-if="chipColor" :class="chipClass">
      {{ chipText }}
    </span>
    <slot />
  </span>
</template>
