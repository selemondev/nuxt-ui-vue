<script setup lang='ts'>
import { RouterLink } from 'vue-router'
import { isEqual } from 'lodash-es'
import { defineComponent } from 'vue'
import { Components } from '@/Types/enums/Components'

const props = defineProps({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  ...RouterLink?.props,
  type: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: null,
  },
  exact: {
    type: Boolean,
    default: false,
  },
  exactQuery: {
    type: Boolean,
    default: false,
  },
  exactHash: {
    type: Boolean,
    default: false,
  },
  inactiveClass: {
    type: String,
    default: undefined,
  },
})

function resolveLinkClass(route: { query: any; hash: any }, $route: { query: any; hash: any }, { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }) {
  if (props.exactQuery && !isEqual(route.query, $route.query))
    return props.inactiveClass

  if (props.exactHash && route.hash !== $route.hash)
    return props.inactiveClass

  if (props.exact && isExactActive)
    return props.activeClass

  if (!props.exact && isActive)
    return props.activeClass

  return props.inactiveClass
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.ULink,
  inheritAttrs: false,
})
</script>

<template>
  <button v-if="!$attrs.to" v-bind="$attrs" :class="inactiveClass">
    <slot />
  </button>
  <RouterLink
    v-else-if="$attrs.to" v-slot="{ href, navigate, isActive, isExactActive }" :to="$attrs.to" custom
  >
    <a
      v-bind="$attrs" :href="!disabled ? href : undefined" :aria-disabled="disabled ? 'true' : undefined"
      :role="disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      @click="(e) => navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </RouterLink>
</template>
