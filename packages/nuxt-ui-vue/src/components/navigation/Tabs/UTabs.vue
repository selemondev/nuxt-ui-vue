<script setup lang='ts'>
import { computed, onMounted, ref, useAttrs, watch } from 'vue'
import type { PropType } from 'vue'
import { Tab as HTab, TabGroup as HTabGroup, TabList as HTabList, TabPanel as HTabPanel, TabPanels as HTabPanels } from '@headlessui/vue'
import { useResizeObserver } from '@vueuse/core'
import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'
import { omit } from '../../../utils/lodash'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UTabs } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import type { TabItem } from '@/Types/components/tabs'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

defineOptions({
  name: Components.UTabs,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UTabs>(),
  modelValue: {
    type: Number,
    default: undefined,
  },
  orientation: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
    validator: (value: string) => ['horizontal', 'vertical'].includes(value),
  },
  defaultIndex: {
    type: Number,
    default: 0,
  },
  items: {
    type: Array as PropType<TabItem[]>,
    default: () => [],
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UTabs>(
    Components.UTabs,
    customProps as VariantJSWithClassesListProps<UTabs>,
  )
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])

const listRef = ref<HTMLElement>()
const itemRefs = ref<HTMLElement[]>([])
const markerRef = ref<HTMLElement>()

const selectedIndex = ref(props.modelValue || props.defaultIndex)

const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

// Methods

function calcMarkerSize(index: number) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const tab = itemRefs.value[index]?.$el
  if (!tab)
    return

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markerRef.value.style.top = `${tab.offsetTop}px`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markerRef.value.style.left = `${tab.offsetLeft}px`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markerRef.value.style.width = `${tab.offsetWidth}px`
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  markerRef.value.style.height = `${tab.offsetHeight}px`
}

function onChange(index) {
  selectedIndex.value = index

  emit('change', index)

  if (props.modelValue !== undefined)
    emit('update:modelValue', index)

  calcMarkerSize(index)
}

useResizeObserver(listRef, () => {
  calcMarkerSize(selectedIndex.value)
})

watch(() => props.modelValue, (value: any) => {
  selectedIndex.value = value
  calcMarkerSize(value)
})

onMounted(() => calcMarkerSize(selectedIndex.value))

const tabGridClass = computed(() => {
  return classNames(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    nuxtLabsTheme.UTabs.base.tabGrid.replaceAll('{items}', props.items?.length),
  )
})
</script>

<template>
  <HTabGroup
    :vertical="orientation === 'vertical'" :selected-index="selectedIndex" as="div" :class="wrapperClass"
    v-bind="attrsOmitted" @change="onChange"
  >
    <HTabList
      ref="listRef" :class="[
        variant.listBase, variant.listBackground, variant.listRounded, variant.listShadow, variant.listPadding, variant.listWidth, orientation === 'horizontal' && variant.listHeight, orientation === 'horizontal' && variant.horizontalGrid,
      ]" :style="[orientation === 'horizontal' && tabGridClass]"
    >
      <div ref="markerRef" :class="variant.listMarkerWrapper">
        <div
          :class="[variant.listMarkerBase, variant.listMarkerBackground, variant.listMarkerRounded, variant.listMarkerShadow]"
        />
      </div>

      <HTab
        v-for="(item, index) of items" :key="index" ref="itemRefs" v-slot="{ selected, disabled }"
        :disabled="item.disabled" as="template"
      >
        <button
          :class="[variant.listTabBase, variant.listTabBackground, variant.listTabHeight, variant.listTabPadding, variant.listTabSize, variant.listTabFont, variant.listTabRounded, variant.listTabShadow, selected ? variant.listTabActive : variant.listTabInactive]"
        >
          <slot :item="item" :index="index" :selected="selected" :disabled="disabled">
            {{ item.label }}
          </slot>
        </button>
      </HTab>
    </HTabList>

    <HTabPanels :class="variant.container">
      <HTabPanel v-for="(item, index) of items" :key="index" v-slot="{ selected }" :class="variant.tabsBase">
        <slot :name="item.slot || 'item'" :item="item" :index="index" :selected="selected">
          {{ item.content }}
        </slot>
      </HTabPanel>
    </HTabPanels>
  </HTabGroup>
</template>
