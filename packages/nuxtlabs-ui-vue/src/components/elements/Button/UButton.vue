<script setup lang='ts'>
import { computed, defineComponent, useAttrs, useSlots } from 'vue'
import type { PropType } from 'vue'
import classNames from 'classnames'
import type { RouteLocationRaw } from 'vue-router'
import type { VariantJSWithClassesListProps } from '../../../utils/getVariantProps'
import { getVariantPropsWithClassesList } from '../../../utils/getVariantProps'
import type { UButton } from '../../../Types/componentsTypes/components'
import { Components } from '../../../Types/enums/Components'
import UIcon from '../../elements/Icon/UIcon.vue'
import { useVariants } from '../../../composables/useVariants'
import nuxtLabsTheme from '../../../theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UButton>(),

  type: {
    type: String,
    default: 'button',
  },
  block: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: null,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  padded: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.UButton.base.default.size,
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UButton.base.default.color,
  },
  intent: {
    type: String,
    default: () => nuxtLabsTheme.UButton.base.default.intent,
  },
  icon: {
    type: String,
    default: null,
  },
  loadingIcon: {
    type: String,
    default: () => nuxtLabsTheme.UButton.base.default.loadingIcon,
  },
  leadingIcon: {
    type: String,
    default: null,
  },
  trailingIcon: {
    type: String,
    default: null,
  },
  trailing: {
    type: Boolean,
    default: false,
  },
  leading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: [String, Object] as PropType<string | RouteLocationRaw>,
    default: null,
  },
  target: {
    type: String,
    default: null,
  },
  ariaLabel: {
    type: String,
    default: null,
  },
  square: {
    type: Boolean,
    default: false,
  },
  truncate: {
    type: Boolean,
    default: false,
  },
})
const slots = useSlots()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UButton>(
    Components.UButton,
    customProps as VariantJSWithClassesListProps<UButton>,
  )
})

const bind = Object.assign({}, useAttrs(), props.to ? { href: props.to } : {})

const isLeading = computed(() => {
  return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
})

const isTrailing = computed(() => {
  return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
})

const leadingIconName = computed(() => {
  if (props.loading)
    return props.loadingIcon

  return props.leadingIcon || props.icon
})

const trailingIconName = computed(() => {
  if (props.loading && !isLeading.value)
    return props.loadingIcon

  return props.trailingIcon || props.icon
})

const leadingIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UButton.base.icon?.base,
    nuxtLabsTheme.UButton.base.icon.size[props.size],
    props.loading && 'animate-spin',
  )
})

const trailingIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UButton.base.icon?.base,
    nuxtLabsTheme.UButton.base.icon.size[props.size],
    props.loading && !isLeading.value && 'animate-spin',
  )
})

const isSquare = computed(() => props.square || (!slots.default && !props.label))

const buttonClass = computed(() => {
  const variants = nuxtLabsTheme.UButton.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.UButton.base.intent[props.intent]
  return classNames(
    variant.value.root,
    variant.value.font,
    variant.value.rounded,
    nuxtLabsTheme.UButton.base.size[props.size],
    nuxtLabsTheme.UButton.base.gap[props.size],
    props.padded && nuxtLabsTheme.UButton.base[isSquare.value ? 'square' : 'padding'][props.size],
    variants.replaceAll('{color}', props.color),
    props.block ? 'w-full flex justify-center items-center' : 'inline-flex items-center',
  )
})
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UButton,
  inheritAttrs: false,
})
</script>

<template>
  <component :is="props.to ? 'a' : 'button'" :class="buttonClass" :aria-label="ariaLabel" v-bind="bind">
    <slot name="leading" :disabled="disabled" :loading="loading">
      <UIcon v-if="isLeading && leadingIconName" :name="leadingIconName" :class="leadingIconClass" aria-hidden="true" />
    </slot>

    <slot>
      <span v-if="label" :class="[props.truncate ? 'text-left break-all line-clamp-1' : '']">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <UIcon
        v-if="isTrailing && trailingIconName" :name="trailingIconName" :class="trailingIconClass"
        aria-hidden="true"
      />
    </slot>
  </component>
</template>
