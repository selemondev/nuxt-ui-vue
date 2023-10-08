<script lang='ts'>
import { upperFirst } from 'scule'
import { twMerge } from 'tailwind-merge'
import UButton from '../../elements/Button/UButton.vue'
import UIcon from '../../elements/Icon/UIcon.vue'
import UCheckbox from '../../forms/Checkbox/UCheckbox.vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UTable } from '@/Types/componentsTypes/components'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import type { Button } from '@/Types/components/button'

function defaultComparator<T>(a: T, z: T): boolean {
  return a === z
}

export default defineComponent({
  name: Components.UTable,
  components: {
    UButton,
    UIcon,
    UCheckbox,
  },
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<UTable>(),
    modelValue: {
      type: Array,
      default: null,
    },
    by: {
      type: [String, Function],

      default: () => defaultComparator,
    },
    rows: {
    // eslint-disable-next-line @typescript-eslint/ban-types
      type: Array as PropType<{ [key: string]: any; click?: Function }[]>,
      default: () => [],
    },
    columns: {
      type: Array as PropType<{ key: string; sortable?: boolean; direction?: 'asc' | 'desc'; class?: string; [key: string]: any }[]>,
      default: null,
    },
    columnAttribute: {
      type: String,
      default: 'label',
    },
    sort: {
      type: Object as PropType<{ column: string; direction: 'asc' | 'desc' }>,
      default: () => ({}),
    },
    sortButton: {
      type: Object as PropType<Button>,
      default: () => nuxtLabsTheme.UTable.base.default.sortButton,
    },
    sortAscIcon: {
      type: String,
      default: () => nuxtLabsTheme.UTable.base.default.sortAscIcon,
    },
    sortDescIcon: {
      type: String,
      default: () => nuxtLabsTheme.UTable.base.default.sortDescIcon,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingState: {
      type: Object as PropType<{ icon: string; label: string }>,
      default: () => nuxtLabsTheme.UTable.base.default.loadingState,
    },
    emptyState: {
      type: Object as PropType<{ icon: string; label: string }>,
      default: () => nuxtLabsTheme.UTable.base.default.emptyState,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit, attrs }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.variant,
      }
      return useVariants<UTable>(
        Components.UTable,
        customProps as VariantJSWithClassesListProps<UTable>,
      )
    })

    const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

    const columns = computed(() => props.columns ?? Object.keys(omit(props.rows[0] ?? {}, ['click'])).map(key => ({ key, label: upperFirst(key), sortable: false })))

    const sort = ref(defu({}, props.sort, { column: null, direction: 'asc' }))

    const rows = computed(() => {
      if (!sort.value?.column)
        return props.rows

      const { column, direction } = sort.value

      return props.rows.slice().sort((a, b) => {
        const aValue = a[column]
        const bValue = b[column]
        if (aValue === bValue)
          return 0

        if (direction === 'asc')
          return aValue < bValue ? -1 : 1

        else
          return aValue > bValue ? -1 : 1
      })
    })

    const selected = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })

    const indeterminate = computed(() => selected.value && selected.value.length > 0 && selected.value.length < props.rows.length)

    const emptyState = computed(() => {
      if (props.emptyState === null)
        return null
      return { ...nuxtLabsTheme.UTable.base.default.emptyState, ...props.emptyState }
    })

    function compare(a: any, z: any) {
      if (typeof props.by === 'string') {
        const property = props.by as unknown as any
        return a?.[property] === z?.[property]
      }
      return props.by(a, z)
    }

    function isSelected(row) {
      if (!props.modelValue)
        return false

      return selected.value.some(item => compare(toRaw(item), toRaw(row)))
    }

    function onSort(column: { key: string; direction?: 'asc' | 'desc' }) {
      if (sort.value.column === column.key) {
        const direction = !column.direction || column.direction === 'asc' ? 'desc' : 'asc'

        if (sort.value.direction === direction)
          sort.value = defu({}, props.sort, { column: null, direction: 'asc' })

        else
          sort.value.direction = sort.value.direction === 'asc' ? 'desc' : 'asc'
      }
      else {
        sort.value = { column: column.key, direction: column.direction || 'asc' }
      }
    }

    function onSelect(row) {
      if (!attrs.onSelect)
        return

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      attrs.onSelect(row)
    }

    function selectAllRows() {
      props.rows.forEach((row) => {
        if (selected.value.some(item => compare(toRaw(item), toRaw(row))))
          return

        onSelect(row)
      })
    }

    function onChange(event: any) {
      if (event.target.checked)
        selectAllRows()

      else
        selected.value = []
    }

    function getRowData(row: object, rowKey: string | string[], defaultValue: any = 'Failed to get cell value') {
      return get(row, rowKey, defaultValue)
    }

    return {
      attrs: omit(attrs, ['class']),
      variant,

      wrapperClass,

      sort,

      columns,

      rows,
      selected,
      indeterminate,

      emptyState,
      nuxtLabsTheme,
      isSelected,
      onSort,
      onSelect,
      onChange,
      getRowData,
    }
  },
})
</script>

<template>
  <div :class="wrapperClass" v-bind="attrs">
    <table :class="[variant.base, variant.divide]">
      <thead :class="variant.thead">
        <tr :class="variant.trBase">
          <th v-if="modelValue" scope="col" class="ps-4">
            <UCheckbox :checked="indeterminate || selected.length === rows.length" :indeterminate="indeterminate" @change="onChange" />
          </th>

          <th v-for="(column, index) in columns" :key="index" scope="col" :class="[variant.thBase, variant.thPadding, variant.thColor, variant.thFont, variant.thSize, column.class]">
            <slot :name="`${column.key}-header`" :column="column" :sort="sort" :on-sort="onSort">
              <!-- @vue-ignore -->
              <UButton
                v-if="column.sortable"
                v-bind="{ ...nuxtLabsTheme?.UTable.base.default.sortButton, ...sortButton }"
                :icon="(!sort.column || sort.column !== column.key) ? (sortButton.icon || nuxtLabsTheme.UTable.base.default.sortButton.icon) : sort.direction === 'asc' ? sortAscIcon : sortDescIcon"
                :label="column[columnAttribute]"
                @click="onSort(column)"
              />
              <span v-else>{{ column[columnAttribute] }}</span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody :class="variant.tbody">
        <tr v-if="loadingState && loading">
          <td :colspan="columns.length + (modelValue ? 1 : 0)">
            <slot name="loading-state">
              <div :class="variant.loadingStateWrapper">
                <UIcon v-if="loadingState.icon" :name="loadingState.icon" :class="variant.loadingStateIcon" aria-hidden="true" />
                <p :class="variant.loadingStateLabel">
                  {{ loadingState.label }}
                </p>
              </div>
            </slot>
          </td>
        </tr>

        <tr v-else-if="emptyState && !rows.length">
          <td :colspan="columns.length + (modelValue ? 1 : 0)">
            <slot name="empty-state">
              <div :class="variant.emptyStateWrapper">
                <UIcon v-if="emptyState.icon" :name="emptyState.icon" :class="variant.emptyStateIcon" aria-hidden="true" />
                <p :class="variant.emptyStateLabel">
                  {{ emptyState.label }}
                </p>
              </div>
            </slot>
          </td>
        </tr>

        <template v-else>
          <tr v-for="(row, index) in rows" :key="index" :class="[variant.trBase, isSelected(row) && variant.trSelected, $attrs.onSelect && variant.trActive]" @click="() => onSelect(row)">
            <td v-if="modelValue" class="ps-4">
              <UCheckbox v-model="selected" :value="row" @click.stop />
            </td>

            <td v-for="(column, subIndex) in columns" :key="subIndex" :class="[variant.tdBase, variant.tdPadding, variant.tdColor, variant.tdFont, variant.tdSize]">
              <slot :name="`${column.key}-data`" :column="column" :row="row" :index="index" :get-row-data="(defaultValue) => getRowData(row, column.key, defaultValue)">
                {{ getRowData(row, column.key) }}
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
