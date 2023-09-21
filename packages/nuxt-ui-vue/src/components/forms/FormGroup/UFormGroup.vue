<script lang='ts'>
import { computed, defineComponent, inject, provide } from 'vue'
import type { Ref } from 'vue'
import { twMerge } from 'tailwind-merge'
import { omit } from '../../../utils/lodash'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UFormGroup } from '@/Types/componentsTypes/components'
import type { FormError } from '@/Types/components/form'
import { Components } from '@/Types/enums/Components'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

export default defineComponent({
  name: Components.UFormGroup,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<UFormGroup>(),
    name: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
      validator(value: string) {
        return Object.keys(nuxtLabsTheme.UFormGroup.base.size).includes(value)
      },
    },
    label: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    help: {
      type: String,
      default: null,
    },
    error: {
      type: [String, Boolean],
      default: null,
    },
    hint: {
      type: String,
      default: null,
    },
  },

  setup(props, { attrs }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.variant,
      }
      return useVariants<UFormGroup>(
        Components.UFormGroup,
        customProps as VariantJSWithClassesListProps<UFormGroup>,
      )
    })

    const wrapperClass = computed(() => twMerge(variant.value.root, attrs.class as string))

    const formErrors = inject<Ref<FormError[]> | null>('form-errors', null)
    const error = computed(() => {
      return (props.error && typeof props.error === 'string') || typeof props.error === 'boolean'
        ? props.error
        : formErrors?.value?.find(error => error.path === props.name)?.message
    })

    const size = computed(() => nuxtLabsTheme.UFormGroup.base.size[props.size ?? nuxtLabsTheme.UInput.base.default.size])

    provide('form-group', {
      error,
      name: computed(() => props.name),
      size: computed(() => props.size),
    })

    return {
      attrs: omit(attrs, ['class']),

      wrapperClass,

      variant,

      size,

      nuxtLabsTheme,

      error,
    }
  },
},
)
</script>

<template>
  <div :class="wrapperClass" v-bind="attrs">
    <label>
      <div v-if="label" :class="[variant.labelWrapper, size]">
        <p :class="[variant.labelBase, required ? variant.labelRequired : '']">{{ label }}</p>
        <span v-if="hint" :class="[variant.hint]">{{ hint }}</span>
      </div>

      <p v-if="description" :class="[variant.description, size]">{{ description }}</p>

      <div :class="[label ? variant.container : '']">
        <slot v-bind="{ error }" />

        <p v-if="error && typeof error !== 'boolean'" :class="[variant.error, size]">{{ error }}</p>
        <p v-else-if="help" :class="[variant.help, size]">{{ help }}</p>
      </div>
    </label>
  </div>
</template>
