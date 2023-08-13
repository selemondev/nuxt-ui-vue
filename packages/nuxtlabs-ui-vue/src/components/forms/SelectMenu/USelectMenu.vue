<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import type { ComponentPublicInstance, PropType } from 'vue'
import {
  Combobox as HCombobox,
  ComboboxButton as HComboboxButton,
  ComboboxInput as HComboboxInput,
  ComboboxOption as HComboboxOption,
  ComboboxOptions as HComboboxOptions,
  Listbox as HListbox,
  ListboxButton as HListboxButton,
  ListboxOption as HListboxOption,
  ListboxOptions as HListboxOptions,
} from '@headlessui/vue'

import { computedAsync, useDebounceFn } from '@vueuse/core'
import classNames from 'classnames'
import defu from 'defu'
import UIcon from '@/components/elements/Icon/UIcon.vue'
import UAvatar from '@/components/elements/Avatar/UAvatar.vue'
import type { PopperOptions } from '@/Types/components/popper'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'
import { Components } from '@/Types/enums/Components'
import type { USelect } from '@/Types/componentsTypes/components'
import { usePopper } from '@/composables/usePopper'
import { useFormEvents } from '@/composables/useFormEvents'

import { useVariants } from '@/composables/useVariants'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'

export default defineComponent({
  name: Components.USelectMenu,
  components: {
    HCombobox,
    HComboboxButton,
    HComboboxOptions,
    HComboboxOption,
    HComboboxInput,
    HListbox,
    HListboxButton,
    HListboxOptions,
    HListboxOption,
    UIcon,
    UAvatar,
  },
  inheritAttrs: false,
  ...getVariantPropsWithClassesList<USelect>(),
  props: {
    modelValue: {
      type: [String, Number, Object, Array],
      default: '',
    },
    by: {
      type: String,
      default: undefined,
    },
    options: {
      type: Array as PropType<{ [key: string]: any; disabled?: boolean }[] | string[]>,
      default: () => [],
    },
    name: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    loadingIcon: {
      type: String,
      default: () => nuxtLabsTheme.UInput.base.default.loadingIcon,
    },
    leadingIcon: {
      type: String,
      default: null,
    },
    trailingIcon: {
      type: String,
      default: () => nuxtLabsTheme.USelect.base.default.trailingIcon,
    },
    trailing: {
      type: Boolean,
      default: false,
    },
    leading: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    selectedIcon: {
      type: String,
      default: () => nuxtLabsTheme.USelectMenu.base.default.selectedIcon,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    searchable: {
      type: [Boolean, Function] as PropType<boolean | ((query: string) => Promise<any[]> | any[])>,
      default: false,
    },
    searchablePlaceholder: {
      type: String,
      default: 'Search...',
    },
    debounce: {
      type: Number,
      default: 200,
    },
    creatable: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    padded: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: () => nuxtLabsTheme.USelect.base.default.size,
    },
    color: {
      type: String,
      default: () => nuxtLabsTheme.USelect.base.default.color,
    },
    intent: {
      type: String,
      default: () => nuxtLabsTheme.USelect.base.default.intent,
    },
    optionAttribute: {
      type: String,
      default: 'label',
    },
    valueAttribute: {
      type: String,
      default: null,
    },
    searchAttributes: {
      type: Array,
      default: null,
    },
    popper: {
      type: Object as PropType<PopperOptions>,
      default: () => ({}),
    },
  },
  emits: ['update:modelValue', 'open', 'close', 'change'],
  setup(props, { emit, slots }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.intent,
      }
      return useVariants<USelect>(
        Components.USelect,
        customProps as unknown as VariantJSWithClassesListProps<USelect>,
      )
    })

    const popper = computed<PopperOptions>(() => defu({}, props.popper, variant.value.popper as PopperOptions))

    const [trigger, container] = usePopper(popper.value)
    const { emitFormBlur } = useFormEvents()

    const query = ref('')
    const searchInput = ref<ComponentPublicInstance<HTMLElement>>()
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

    const selectClass = computed(() => {
      const variants = nuxtLabsTheme.USelect.base.color[props.color as string]?.[props.intent as string] || nuxtLabsTheme.USelect.base.intent[props.intent]

      return classNames(
        variant.value.base,
        variant.value.rounded,
        'text-left cursor-default',
        nuxtLabsTheme.USelect.base.size[props.size],
        nuxtLabsTheme.USelect.base.gap[props.size],
        props.padded ? nuxtLabsTheme.USelect.base.padding[props.size] : 'p-0',
        variants?.replaceAll('{color}', props.color),
        (isLeading.value || slots.leading) && nuxtLabsTheme.USelect.base.leading.padding[props.size],
        (isTrailing.value || slots.trailing) && nuxtLabsTheme.USelect.base.trailing.padding[props.size],
        'inline-flex items-center',
      )
    })

    const leadingWrapperIconClass = computed(() => {
      return classNames(
        nuxtLabsTheme.USelect.base.icon.leading.wrapper,
        nuxtLabsTheme.USelect.base.icon.leading.pointer,
        nuxtLabsTheme.USelect.base.icon.leading.padding[props.size],
      )
    })

    const leadingIconClass = computed(() => {
      return classNames(
        nuxtLabsTheme.USelect.base.icon.base,
        nuxtLabsTheme.USelect.base.icon.color.replaceAll('{color}', props.color),
        nuxtLabsTheme.USelect.base.icon.size[props.size],
        props.loading && 'animate-spin',
      )
    })

    const trailingWrapperIconClass = computed(() => {
      return classNames(
        nuxtLabsTheme.USelect.base.icon.trailing.wrapper,
        nuxtLabsTheme.USelect.base.icon.trailing.pointer,
        nuxtLabsTheme.USelect.base.icon.trailing.padding[props.size],
      )
    })

    const trailingIconClass = computed(() => {
      return classNames(
        nuxtLabsTheme.USelect.base.icon.base,
        nuxtLabsTheme.USelect.base.icon.color.replaceAll('{color}', props.color),
        nuxtLabsTheme.USelect.base.icon.size[props.size],
        props.loading && !isLeading.value && 'animate-spin',
      )
    })

    const debouncedSearch = typeof props.searchable === 'function' ? useDebounceFn(props.searchable, props.debounce) : undefined

    const filteredOptions = computedAsync(async () => {
      if (props.searchable && debouncedSearch)
        return await debouncedSearch(query.value)

      if (query.value === '')
        return props.options

      return (props.options as any[]).filter((option: any) => {
        return (props.searchAttributes?.length ? props.searchAttributes : [props.optionAttribute]).some((searchAttribute: any) => {
          return typeof option === 'string' ? option.search(new RegExp(query.value, 'i')) !== -1 : (option[searchAttribute] && option[searchAttribute].search(new RegExp(query.value, 'i')) !== -1)
        })
      })
    })

    const queryOption = computed(() => {
      return query.value === '' ? null : { [props.optionAttribute]: query.value }
    })

    watch(container, (value) => {
      if (value) {
        emit('open')
      }
      else {
        emit('close')
        emitFormBlur()
      }
    })

    function onUpdate(event: any) {
      if (query.value && searchInput.value?.$el) {
        query.value = ''
        // explicitly set input text because `ComboboxInput` `displayValue` is not reactive
        searchInput.value.$el.value = ''
      }
      emit('update:modelValue', event)
      emit('change', event)
      emitFormBlur()
    }

    return {
      variant,
      trigger,
      container,
      searchInput,
      isLeading,
      isTrailing,
      selectClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      filteredOptions,
      queryOption,
      query,
      nuxtLabsTheme,
      onUpdate,

    }
  },
})
</script>

<template>
  <component
    :is="searchable ? 'HCombobox' : 'HListbox'"
    v-slot="{ open }"
    :by="by"
    :name="name"
    :model-value="modelValue"
    :multiple="multiple"
    :disabled="disabled || loading"
    as="div"
    :class="variant.root"
    @update:model-value="onUpdate"
  >
    <input
      v-if="required"
      :value="modelValue"
      :required="required"
      class="absolute inset-0 w-px opacity-0 cursor-default"
      tabindex="-1"
      aria-hidden="true"
    >

    <component
      :is="searchable ? 'HComboboxButton' : 'HListboxButton'"
      ref="trigger"
      as="div"
      role="button"
      class="inline-flex w-full"
    >
      <slot :open="open" :disabled="disabled" :loading="loading">
        <button :class="selectClass" :disabled="disabled || loading" type="button" v-bind="$attrs">
          <span v-if="(isLeading && leadingIconName) || $slots.leading" :class="leadingWrapperIconClass">
            <slot name="leading" :disabled="disabled" :loading="loading">
              <UIcon :name="leadingIconName" :class="leadingIconClass" />
            </slot>
          </span>

          <slot name="label">
            <span v-if="multiple && Array.isArray(modelValue) && modelValue.length" class="block truncate">{{ modelValue.length }} selected</span>
            <span v-else-if="!multiple && modelValue" class="block truncate">{{ typeof modelValue === 'string' ? modelValue : modelValue[optionAttribute] }}</span>
            <span v-else class="block truncate" :class="nuxtLabsTheme.USelect.base.placeholder">{{ placeholder || '&nbsp;' }}</span>
          </slot>

          <span v-if="(isTrailing && trailingIconName) || $slots.trailing" :class="trailingWrapperIconClass">
            <slot name="trailing" :disabled="disabled" :loading="loading">
              <UIcon :name="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
            </slot>
          </span>
        </button>
      </slot>
    </component>

    <div v-if="open" ref="container" :class="[nuxtLabsTheme.USelectMenu.base.container, nuxtLabsTheme.USelectMenu.base.width]">
      <Transition appear v-bind="nuxtLabsTheme.USelectMenu.base.transition">
        <component :is="searchable ? 'HComboboxOptions' : 'HListboxOptions'" static :class="[nuxtLabsTheme.USelectMenu.base.base, nuxtLabsTheme.USelect.base.divide, nuxtLabsTheme.USelectMenu.base.ring, nuxtLabsTheme.USelectMenu.base.rounded, nuxtLabsTheme.USelectMenu.base.shadow, nuxtLabsTheme.USelectMenu.base.background, nuxtLabsTheme.USelectMenu.base.padding, nuxtLabsTheme.USelectMenu.base.height]">
          <HComboboxInput
            v-if="searchable"
            ref="searchInput"
            :display-value="() => query"
            name="q"
            :placeholder="searchablePlaceholder"
            autofocus
            autocomplete="off"
            :class="nuxtLabsTheme.USelectMenu.base.input"
            @change="query = $event.target.value"
          />
          <component
            :is="searchable ? 'HComboboxOption' : 'HListboxOption'"
            v-for="(option, index) in filteredOptions"
            v-slot="{ active, selected, disabled: optionDisabled }"
            :key="index"
            as="template"
            :value="valueAttribute ? option[valueAttribute] : option"
            :disabled="option.disabled"
          >
            <li :class="[nuxtLabsTheme.USelectMenu.base.option.base, nuxtLabsTheme.USelectMenu.base.option.rounded, nuxtLabsTheme.USelectMenu.base.option.padding, nuxtLabsTheme.USelectMenu.base.option.size, nuxtLabsTheme.USelectMenu.base.option.color, active ? nuxtLabsTheme.USelectMenu.base.option.active : nuxtLabsTheme.USelectMenu.base.option.inactive, selected && nuxtLabsTheme.USelectMenu.base.option.selected, optionDisabled && nuxtLabsTheme.USelectMenu.base.option.disabled]">
              <div :class="nuxtLabsTheme.USelectMenu.base.option.container">
                <slot name="option" :option="option" :active="active" :selected="selected">
                  <UIcon v-if="option.icon" :name="option.icon" :class="[nuxtLabsTheme.USelectMenu.base.option.icon.base, active ? nuxtLabsTheme.USelectMenu.base.option.icon.active : nuxtLabsTheme.USelectMenu.base.option.icon.inactive, option.iconClass]" aria-hidden="true" />
                  <UAvatar
                    v-else-if="option.avatar"
                    v-bind="{ size: nuxtLabsTheme.USelectMenu.base.option.avatar.size, ...option.avatar }"
                    :class="nuxtLabsTheme.USelectMenu.base.option.avatar.base"
                    aria-hidden="true"
                  />
                  <span v-else-if="option.chip" :class="nuxtLabsTheme.USelectMenu.base.option.chip.base" :style="{ background: `#${option.chip}` }" />

                  <span class="truncate">{{ typeof option === 'string' ? option : option[optionAttribute] }}</span>
                </slot>
              </div>

              <span v-if="selected" :class="[nuxtLabsTheme.USelectMenu.base.option.selectedIcon.wrapper, nuxtLabsTheme.USelectMenu.base.option.selectedIcon.padding]">
                <UIcon :name="selectedIcon" :class="nuxtLabsTheme.USelectMenu.base.option.selectedIcon.base" aria-hidden="true" />
              </span>
            </li>
          </component>

          <component :is="searchable ? 'HComboboxOption' : 'HListboxOption'" v-if="creatable && queryOption && !filteredOptions.length" v-slot="{ active, selected }" :value="queryOption" as="template">
            <li :class="[nuxtLabsTheme.USelectMenu.base.option.base, nuxtLabsTheme.USelectMenu.base.option.rounded, nuxtLabsTheme.USelectMenu.base.option.padding, nuxtLabsTheme.USelectMenu.base.option.size, nuxtLabsTheme.USelectMenu.base.option.color, active ? nuxtLabsTheme.USelectMenu.base.option.active : nuxtLabsTheme.USelectMenu.base.option.inactive]">
              <div :class="nuxtLabsTheme.USelectMenu.base.option.container">
                <slot name="option-create" :option="queryOption" :active="active" :selected="selected">
                  <span class="block truncate">Create "{{ queryOption[optionAttribute] }}"</span>
                </slot>
              </div>
            </li>
          </component>
          <p v-else-if="searchable && query && !filteredOptions.length" :class="nuxtLabsTheme.USelectMenu.base.option.empty">
            <slot name="option-empty" :query="query">
              No results for "{{ query }}".
            </slot>
          </p>
        </component>
      </Transition>
    </div>
  </component>
</template>
