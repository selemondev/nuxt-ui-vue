<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { twMerge } from 'tailwind-merge'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UVerticalNavigation } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import type { VerticalNavigationLink } from '@/Types/components/vertical-navigation'

const props = defineProps({
  ...getVariantPropsWithClassesList<UVerticalNavigation>(),
  links: {
    type: Array as PropType<VerticalNavigationLink[]>,
    default: () => [],
  },
})

const attrs = useAttrs()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UVerticalNavigation>(
    Components.UVerticalNavigation,
    customProps as VariantJSWithClassesListProps<UVerticalNavigation>,
  )
})
const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UVerticalNavigation,
  inheritAttrs: false,
})
</script>

<template>
  {{ variant }}
  <nav :class="wrapperClass" v-bind="omit(attrs, ['class'])">
    <ULink
      v-for="(link, index) of links"
      v-slot="{ isActive }"
      :key="index"
      v-bind="omit(link, ['label', 'icon', 'iconClass', 'avatar', 'badge', 'click'])"
      :to="link.to"
      :class="[variant.base, variant.padding, variant.width, variant.ring, variant.rounded, variant.font, variant.size]"
      :active-class="variant.active"
      :inactive-class="variant.inactive"
      @click="link.click"
      @keyup.enter="$event.target.blur()"
    >
      <slot name="avatar" :link="link" :is-active="isActive">
        <UAvatar
          v-if="link.avatar"
          v-bind="{ size: variant.avatarSize, ...link.avatar }"
          :class="[variant.avatarBase]"
        />
      </slot>
      <slot name="icon" :link="link" :is-active="isActive">
        <UIcon
          v-if="link.icon"
          :name="link.icon"
          :class="[variant.iconBase, isActive ? variant.iconActive : variant.iconInActive, link.iconClass]"
        />
      </slot>
      <slot :link="link" :is-active="isActive">
        <span v-if="link.label" :class="variant.label">{{ link.label }}</span>
      </slot>
      <slot name="badge" :link="link" :is-active="isActive">
        <span v-if="link.badge" :class="[variant.badgeBase, isActive ? variant.badgeActive : variant.badgeInActive]">
          {{ link.badge }}
        </span>
      </slot>
    </ULink>
  </nav>
</template>
