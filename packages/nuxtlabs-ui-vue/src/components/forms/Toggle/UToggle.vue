<script setup lang='ts'>
import { computed, defineComponent, useAttrs } from 'vue'
import { omit } from 'lodash-es'
import classNames from 'classnames'
import { Switch as HSwitch } from '@headlessui/vue'
import UIcon from '../../elements/Icon/UIcon.vue'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UToggle } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'
import { useFormEvents } from '@/composables/useFormEvents'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UToggle>(),
  name: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  onIcon: {
    type: String,
    default: () => nuxtLabsTheme.UToggle.base.default.onIcon,
  },
  offIcon: {
    type: String,
    default: () => nuxtLabsTheme.UToggle.base.default.offIcon,
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UToggle.base.default.color,
  },
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const variant = computed(() => {
  const customProps = {
    ...props,
  }
  return useVariants<UToggle>(
    Components.UToggle,
    customProps as VariantJSWithClassesListProps<UToggle>,
  )
})

const { emitFormBlur } = useFormEvents()

const active = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
    emitFormBlur()
  },
})

const switchClass = computed(() => {
  return classNames(
    variant.value.root,
    variant.value.rounded,
    nuxtLabsTheme.UToggle.base.ring.replaceAll('{color}', props.color),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (active.value ? variant.value.active : variant.value.inactive)?.replaceAll('{color}', props.color),
  )
})

const onIconClass = computed(() => {
  return classNames(
    nuxtLabsTheme.UToggle.base.iconOn.replaceAll('{color}', props.color),
  )
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UToggle,
  inheritAttrs: false,
})
</script>

<template>
  <HSwitch
    v-model="active"
    :name="name"
    :disabled="disabled"
    :class="switchClass"
    v-bind="attrsOmitted"
  >
    <span :class="[active ? variant.containerActive : variant.containerInactive, variant.containerBase]">
      <span v-if="onIcon" :class="[active ? variant.iconActive : variant.iconInactive, variant.iconBase]" aria-hidden="true">
        <UIcon :name="onIcon" :class="onIconClass" />
      </span>
      <span v-if="offIcon" :class="[active ? variant.iconInactive : variant.iconActive, variant.iconBase]" aria-hidden="true">
        <UIcon :name="offIcon" :class="variant.iconOff" />
      </span>
    </span>
  </HSwitch>
</template>
