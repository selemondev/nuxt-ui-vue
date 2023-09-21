<script setup lang='ts'>
import { computed, useAttrs } from 'vue'
import type { PropType } from 'vue'
import { twMerge } from 'tailwind-merge'
import { omit } from '../../../utils/lodash'
import UButton from '../../elements/Button/UButton.vue'
import UButtonGroup from '@/components/elements/Button/UButtonGroup.vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UPagination } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import type { Button } from '@/Types/components/button'

defineOptions({
  name: Components.UPagination,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UPagination>(),
  modelValue: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: 7,
    validate(value) {
      return value >= 7 && value < Number.MAX_VALUE
    },
  },
  size: {
    type: String,
    default: () => nuxtLabsTheme.UPagination.base.default.size,
    validator(value: string) {
      return Object.keys(nuxtLabsTheme.UButton.base.size).includes(value)
    },
  },
  activeButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UPagination.base.default.activeButton,
  },
  inactiveButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UPagination.base.default.inactiveButton,
  },
  prevButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UPagination.base.default.prevButton,
  },
  nextButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UPagination.base.default.nextButton,
  },
  divider: {
    type: String,
    default: '…',
  },
})

const emit = defineEmits(['update:modelValue'])

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UPagination>(
    Components.UPagination,
    customProps as VariantJSWithClassesListProps<UPagination>,
  )
})

const attrs = useAttrs()

const currentPage = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1))

const displayedPages = computed(() => {
  if (!props.max || pages.value.length <= 5) {
    return pages.value
  }
  else {
    const current = currentPage.value
    const max = pages.value.length
    const r = Math.floor((Math.min(props.max, max) - 5) / 2)
    const r1 = current - r
    const r2 = current + r
    const beforeWrapped = r1 - 1 > 1
    const afterWrapped = r2 + 1 < max
    const items: Array<number | string> = [1]

    if (beforeWrapped)
      items.push(props.divider)

    if (!afterWrapped) {
      const addedItems = (current + r + 2) - max
      for (let i = current - r - addedItems; i <= current - r - 1; i++)
        items.push(i)
    }

    for (let i = r1 > 2 ? (r1) : 2; i <= Math.min(max, r2); i++)
      items.push(i)

    if (!beforeWrapped) {
      const addedItems = 1 - (current - r - 2)
      for (let i = current + r + 1; i <= current + r + addedItems; i++)
        items.push(i)
    }

    if (afterWrapped)
      items.push(props.divider)

    if (r2 < max)
      items.push(max)

    // Replace divider by number on start edge case [1, '…', 3, ...]
    if (items.length >= 3 && items[1] === props.divider && items[2] === 3)
      items[1] = 2

    // Replace divider by number on end edge case [..., 48, '…', 50]
    if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length)
      items[items.length - 2] = items.length - 1

    return items
  }
})

const canGoPrev = computed(() => currentPage.value > 1)
const canGoNext = computed(() => currentPage.value < pages.value.length)

const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

function onClickPage(page: number | string) {
  if (typeof page === 'string')
    return

  currentPage.value = page
}

function onClickPrev() {
  if (!canGoPrev.value)
    return

  currentPage.value--
}

function onClickNext() {
  if (!canGoNext.value)
    return

  currentPage.value++
}

const attrsOmitted = omit(attrs, ['class'])
</script>

<template>
  <div :class="wrapperClass" v-bind="attrsOmitted">
    <UButtonGroup>
      <slot name="prev" :on-click="onClickPrev">
        <UButton
          v-if="props.prevButton"
          :size="props.size"
          :disabled="!canGoPrev"
          :class="[variant.paginationBase, variant.rounded]"
          v-bind="{ ...nuxtLabsTheme.UPagination.base.default.prevButton, ...props.prevButton }"
          :ui="{ rounded: '' }"
          @click="onClickPrev"
        />
      </slot>

      <UButton
        v-for="(page, index) of displayedPages"
        :key="index"
        :size="props.size"
        :label="`${page}`"
        v-bind="page === currentPage ? { ...nuxtLabsTheme.UPagination.base.default.activeButton, ...props.activeButton } : { ...nuxtLabsTheme.UPagination.base.default.inactiveButton, ...props.inactiveButton }"
        :class="[{ 'pointer-events-none': typeof page === 'string', 'z-[1]': page === currentPage }, variant.base, variant.rounded]"
        :ui="{ rounded: '' }"
        @click="() => onClickPage(page)"
      />

      <slot name="next" :on-click="onClickNext">
        <UButton
          v-if="props.nextButton"
          :size="props.size"
          :disabled="!canGoNext"
          :class="[variant.paginationBase, variant.rounded]"
          v-bind="{ ...nuxtLabsTheme.UPagination.base.default.nextButton, ...props.nextButton }"
          :ui="{ rounded: '' }"
          @click="onClickNext"
        />
      </slot>
    </UButtonGroup>
  </div>
</template>
