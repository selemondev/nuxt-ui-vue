<!-- eslint-disable @typescript-eslint/ban-types -->
<script setup lang="ts">
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import type { UNotifications } from '@/Types/componentsTypes/components'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

export type Position = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

defineOptions({
  name: Components.UNotifications,
  inheritAttrs: false,
})

const props = defineProps({
  ...getVariantPropsWithClassesList<UNotifications>(),
  position: {
    type: String as PropType<Position>,
    default: Positions.BR,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UNotifications>(
    Components.UNotifications,
    customProps as VariantJSWithClassesListProps<UNotifications>,
  )
})

const { notifications, remove } = useToast()

const wrapperClass = computed(() => {
  return classNames(
    variant.value.root,
    nuxtLabsTheme.UNotifications.base.position[props.position],
    variant.value.width,
  )
})

const attrs = useAttrs()

const attrsOmitted = omit(attrs, ['class'])
</script>

<template>
  <div :class="wrapperClass" v-bind="attrsOmitted">
    <div v-if="notifications.length" :class="variant.container">
      <div v-for="notification of notifications" :key="notification.id">
        <UNotification
          v-bind="notification"
          :class="notification.click && 'cursor-pointer'"
          @click="notification.click && notification.click(notification)"
          @close="remove(notification.id)"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData" />
          </template>
        </UNotification>
      </div>
    </div>
  </div>
</template>
