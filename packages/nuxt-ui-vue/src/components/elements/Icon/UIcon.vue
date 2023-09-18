<script setup lang="ts">
import { Icon, loadIcon } from '@iconify/vue'
import { computed, defineComponent, ref, watch } from 'vue'
import { Components } from '../../../Types/enums/Components'
import type { UIcon } from '../../../Types/componentsTypes/components'
import { getVariantPropsWithClassesList } from '../../../utils/getVariantProps'
import { useVariants } from '../../../composables/useVariants'

export type IconSizes = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '6xl' | '8xl'
export type IconNumberSize = number
export interface Props {
  name: string
  size?: IconNumberSize | IconSizes
}
const props = defineProps({
  ...getVariantPropsWithClassesList<UIcon>(),
  size: {
    type: String,
    default: 'base',
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
})
const icon = ref()
const isFetching = ref(false)
const variant = useVariants(Components.UIcon, props)

async function fetchIcon() {
  isFetching.value = true
  icon.value = await loadIcon(props.name).catch((err) => {
    throw err
  })
  isFetching.value = false
}
watch(() => props.name, fetchIcon)

const iconClass = computed(() => {
  let sizeClass = ''
  if (typeof props.size === 'number')
    return props.size
  else
    return sizeClass += variant[props.size]
})
const styleClass = computed(() => {
  return {
    width: props.size,
    height: props.size,
  }
})
const ariaProps = {
  'aria-hidden': true,
}
fetchIcon()
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UIcon,
})
</script>

<template>
  <span v-if="isFetching" :style="styleClass" :class="variant.root" v-bind="ariaProps" />
  <Icon v-else-if="icon" :class="iconClass" :style="styleClass" :icon="icon" v-bind="ariaProps" />
  <span v-else v-bind="ariaProps">{{ props.name }}</span>
</template>
