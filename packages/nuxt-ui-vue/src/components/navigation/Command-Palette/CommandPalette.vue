<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script lang='ts'>
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import type { ComponentPublicInstance, ComputedRef, PropType } from 'vue'
import { useDebounceFn } from '@vueuse/core'
import { Combobox as HCombobox, ComboboxInput as HComboboxInput, ComboboxOptions as HComboboxOptions } from '@headlessui/vue'
import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import { useFuse } from '@vueuse/integrations/useFuse'
import { twJoin } from 'tailwind-merge'
import defu from 'defu'
import { omit } from '../../../utils/lodash'
import UIcon from '../../elements/Icon/UIcon.vue'
import UButton from '../../elements/Button/UButton.vue'
import CommandPaletteGroup from './CommandPaletteGroup.vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UCommandPalette } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import type { Command, Group } from '@/Types/components/command-palette'
import type { Button } from '@/Types/components/button'

export default defineComponent({
  name: Components.UCommandPalette,
  components: {
    HCombobox,
    HComboboxInput,
    HComboboxOptions,
    UIcon,
    UButton,
    CommandPaletteGroup,
  },
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<UCommandPalette>(),
    modelValue: {
      type: [String, Number, Object, Array],
      default: null,
    },
    by: {
      type: String,
      default: 'id',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    nullable: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    groups: {
      type: Array as PropType<Group[]>,
      default: () => [],
    },
    icon: {
      type: String,
      default: () => nuxtLabsTheme.UCommandPalette.base.default.icon,
    },
    loadingIcon: {
      type: String,
      default: () => nuxtLabsTheme.UCommandPalette.base.default.loadingIcon,
    },
    selectedIcon: {
      type: String,
      default: () => nuxtLabsTheme.UCommandPalette.base.default.selectedIcon,
    },
    closeButton: {
      type: Object as PropType<Button>,
      default: () => nuxtLabsTheme.UCommandPalette.base.default.closeButton,
    },
    emptyState: {
      type: Object as PropType<{ icon: string; label: string; queryLabel: string }>,
      default: () => nuxtLabsTheme.UCommandPalette.base.default.emptyState,
    },
    placeholder: {
      type: String,
      default: 'Search...',
    },
    groupAttribute: {
      type: String,
      default: 'label',
    },
    commandAttribute: {
      type: String,
      default: 'label',
    },
    autoselect: {
      type: Boolean,
      default: true,
    },
    autoclear: {
      type: Boolean,
      default: true,
    },
    debounce: {
      type: Number,
      default: 200,
    },
    fuse: {
      type: Object as PropType<Partial<UseFuseOptions<Command>>>,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit, attrs, expose }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.variant,
      }
      return useVariants<UCommandPalette>(
        Components.UCommandPalette,
        customProps as VariantJSWithClassesListProps<UCommandPalette>,
      )
    })

    const query = ref('')
    const comboboxInput = ref<ComponentPublicInstance<HTMLInputElement>>()
    const comboboxApi = ref(null)
    const isLoading = ref(false)

    onMounted(() => {
      if (props.autoselect)
        activateFirstOption()
    })

    onMounted(() => {
      setTimeout(() => {
        // @ts-expect-error internals
        const popoverProvides = comboboxInput.value?.$.provides
        if (!popoverProvides)
          return

        const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides)
        comboboxApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]]
      }, 200)
    })

    const options: ComputedRef<Partial<UseFuseOptions<Command>>> = computed(() => defu({}, props.fuse, {
      fuseOptions: {
        keys: [props.commandAttribute],
      },
      resultLimit: 12,
      matchAllWhenSearchEmpty: true,
    }))

    const commands = computed(() => {
      const commands: Command[] = []
      for (const group of props.groups) {
        if (!group.search)
          commands.push(...group.commands.map(command => ({ ...command, group: group.key })))
      }
      return commands
    })

    const searchResults = ref<{ [key: string]: any }>({})

    const { results } = useFuse(query, commands, options)

    const groups = computed(() => {
      const groups: Group[] = []
      const groupedCommands: Record<string, typeof results['value']> = {}
      for (const command of results.value) {
        // @ts-expect-error
        groupedCommands[command.item.group] ||= []
        // @ts-expect-error
        groupedCommands[command.item.group].push(command)
      }
      for (const key in groupedCommands) {
        const group = props.groups.find(group => group.key === key)
        const commands = groupedCommands[key].slice(0, options.value.resultLimit).map((result) => {
          const { item, ...data } = result
          return {
            ...item,
            ...data,
          } as Command
        })
        // @ts-expect-error
        groups.push({ ...group, commands })
      }
      for (const group of props.groups) {
        if (group.search && searchResults.value[group.key]?.length)
          groups.push({ ...group, commands: (searchResults.value[group.key] || []).slice(0, options.value.resultLimit) })
      }
      return groups
    })

    const debouncedSearch = useDebounceFn(async () => {
      const searchableGroups = props.groups.filter(group => !!group.search)
      if (!searchableGroups.length)
        return

      isLoading.value = true

      await Promise.all(searchableGroups.map(async (group) => {
        searchResults.value[group.key] = await group.search(query.value)
      }))

      isLoading.value = false
    }, props.debounce)

    watch(query, () => {
      debouncedSearch()

      // Select first item on search changes
      setTimeout(() => {
        // https://github.com/tailwindlabs/headlessui/blob/6fa6074cd5d3a96f78a2d965392aa44101f5eede/packages/%40headlessui-vue/src/components/combobox/combobox.ts#L804
        comboboxInput.value?.$el.dispatchEvent(new KeyboardEvent('keydown', { key: 'PageUp' }))
      }, 0)
    })

    const iconName = computed(() => {
      if ((props.loading || isLoading.value) && props.loadingIcon)
        return props.loadingIcon

      return props.icon
    })

    const iconClass = computed(() => {
      return twJoin(
        variant.value.inputIconBase,
        variant.value.inputIconSize,
        ((props.loading || isLoading.value) && props.loadingIcon) && 'animate-spin',
      )
    })

    const emptyState = computed(() => ({ ...nuxtLabsTheme.UCommandPalette.base.default.emptyState, ...props.emptyState }))

    // Methods

    function activateFirstOption() {
      // hack combobox by using keyboard event
      // https://github.com/tailwindlabs/headlessui/blob/6fa6074cd5d3a96f78a2d965392aa44101f5eede/packages/%40headlessui-vue/src/components/combobox/combobox.ts#L769
      setTimeout(() => {
        comboboxInput.value?.$el.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }))
      }, 0)
    }

    function onSelect(option: Command | Command[]) {
      emit('update:modelValue', option, { query: query.value })

      // Clear input after selection
      if (props.autoclear) {
        setTimeout(() => {
          query.value = ''
        }, 0)
      }
    }

    function onClear() {
      if (query.value)
        query.value = ''

      else
        emit('close')
    }

    expose({
      query,
      updateQuery: (q: string) => {
        query.value = q
      },
      comboboxApi,
      results,
    })
    return {
      attrs: omit(attrs, ['class']),

      variant,

      groups,
      comboboxInput,
      query,
      iconName,
      nuxtLabsTheme,
      iconClass,

      emptyState,
      onSelect,
      onClear,
    }
  },
})
</script>

<template>
  <HCombobox
    :by="by"
    :model-value="modelValue"
    :multiple="multiple"
    :nullable="nullable"
    :class="variant.root"
    v-bind="attrs"
    as="div"
    @update:model-value="onSelect"
  >
    <div v-show="searchable" :class="variant.inputWrapper">
      <UIcon v-if="iconName" :name="iconName" :class="iconClass" aria-hidden="true" />
      <HComboboxInput
        ref="comboboxInput"
        :value="query"
        :class="[variant.inputBase, variant.inputSize, variant.inputHeight, variant.inputPadding, icon && variant.inputIconPadding]"
        :placeholder="placeholder"
        autocomplete="off"
        @change="query = $event.target.value"
      />

      <UButton
        v-if="closeButton"
        v-bind="{ ...nuxtLabsTheme?.UCommandPalette?.base?.default, ...closeButton }"
        :class="variant.inputCloseButton"
        aria-label="Close"
        @click="onClear"
      />
    </div>

    <HComboboxOptions
      v-if="groups.length"
      static
      hold
      as="div"
      aria-label="Commands"
      :class="variant.container"
    >
      <CommandPaletteGroup
        v-for="group of groups"
        :key="group.key"
        :query="query"
        :group="group"
        :group-attribute="groupAttribute"
        :command-attribute="commandAttribute"
        :selected-icon="selectedIcon"
        :ui="nuxtLabsTheme.UCommandPalette.base"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </CommandPaletteGroup>
    </HComboboxOptions>

    <template v-else-if="emptyState">
      <slot name="empty-state">
        <div :class="variant.emptyStateWrapper">
          <UIcon v-if="emptyState.icon" :name="emptyState.icon" :class="variant.emptyStateIcon" aria-hidden="true" />
          <p :class="query ? nuxtLabsTheme.UCommandPalette.base.default.emptyState.queryLabel : nuxtLabsTheme.UCommandPalette.base.default.emptyState.label">
            {{ query ? emptyState.queryLabel : emptyState.label }}
          </p>
        </div>
      </slot>
    </template>
  </HCombobox>
</template>
