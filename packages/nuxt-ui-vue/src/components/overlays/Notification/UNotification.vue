<script setup lang='ts'>
import { computed, defineComponent, onMounted, onUnmounted, ref, useAttrs, watchEffect } from 'vue'
import type { PropType } from 'vue'
import { omit } from 'lodash-es'
import { twJoin, twMerge } from 'tailwind-merge'
import UButton from '../../elements/Button/UButton.vue'
import UAvatar from '../../elements/Avatar/UAvatar.vue'
import UIcon from '../../elements/Icon/UIcon.vue'
import { useTimer } from '@/composables/useTimer'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { NotificationAction } from '@/Types/components/notification'
import type { Avatar } from '@/Types/components/avatar'
import type { Button } from '@/Types/components/button'
import { Components } from '@/Types/enums/Components'
import type { UNotification } from '@/Types/componentsTypes/components'
import { useVariants } from '@/composables/useVariants'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UNotification>(),
  id: {
    type: [String, Number],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: () => nuxtLabsTheme.UNotification.base.default.icon,
  },
  avatar: {
    type: Object as PropType<Avatar>,
    default: null,
  },
  closeButton: {
    type: Object as PropType<Button>,
    default: () => nuxtLabsTheme.UNotification.base.default.closeButton,
  },
  timeout: {
    type: Number,
    default: 5000,
  },
  actions: {
    type: Array as PropType<NotificationAction[]>,
    default: () => [],
  },
  callback: {
    type: Function,
    default: null,
  },
  color: {
    type: String,
    default: () => nuxtLabsTheme.UNotification.base.default.color,
  },
})

const emit = defineEmits(['close'])

const attrs = useAttrs()

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }
  return useVariants<UNotification>(
    Components.UNotification,
    customProps as VariantJSWithClassesListProps<UNotification>,
  )
})

let timer: any = null
const remaining = ref(props.timeout)

const wrapperClass = computed(() => {
  return twMerge(twJoin(
    variant.value.wrapper,
    variant.value.background,
    variant.value.rounded,
    variant.value.shadow,
  ), attrs.class as string)
})

const progressClass = computed(() => {
  return twJoin(
    variant.value.progressBase,
    variant.value.progressBackground?.replaceAll('{color}', props.color),
  )
})

const progressStyle = computed(() => {
  const remainingPercent = remaining.value / props.timeout * 100

  return { width: `${remainingPercent || 0}%` }
})

const iconClass = computed(() => {
  return twJoin(
    variant.value.iconBase,
    variant.value.iconColor?.replaceAll('{color}', props.color),
  )
})

function onMouseover() {
  if (timer)
    timer.pause()
}

function onMouseleave() {
  if (timer)
    timer.resume()
}

function onClose() {
  if (timer)
    timer.stop()

  if (props.callback)
    props.callback()

  emit('close')
}

function onAction(action: NotificationAction) {
  if (timer)
    timer.stop()

  if (action.click)
    action.click()

  emit('close')
}

onMounted(() => {
  if (!props.timeout)
    return

  timer = useTimer(() => {
    onClose()
  }, props.timeout)

  watchEffect(() => {
    remaining.value = timer.remaining.value
  })
})

onUnmounted(() => {
  if (timer)
    timer.stop()
})

const attrsOmitted = omit(attrs, ['class'])

const notificationTransitions = {
  enter: variant.value.transitionEnterActiveClass,
  enterFrom: variant.value.transitionEnterFromClass,
  enterTo: variant.value.transitionEnterToClass,
  leave: variant.value.transitionLeaveActiveClass,
  leaveFrom: variant.value.transitionLeaveFromClass,
  leaveTo: variant.value.transitionLeaveToClass,
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UNotification,
  inheritAttrs: false,
})
</script>

<template>
  <Transition appear v-bind="notificationTransitions">
    <div :class="wrapperClass" v-bind="attrsOmitted" @mouseover="onMouseover" @mouseleave="onMouseleave">
      <div :class="[variant.container, variant.rounded, variant.ring]">
        <div :class="variant.padding">
          <div
            :class="[
              { 'items-start': description || $slots.description, 'items-center': !description && !$slots.description },
              variant.flexGap,
            ]"
          >
            <UIcon v-if="icon" :name="icon" :class="iconClass" />
            <UAvatar v-if="avatar" v-bind="{ size: variant.avatarSize, ...avatar }" :class="variant.avatarBase" />

            <div :class="variant.flexTitle">
              <p :class="variant.title">
                <slot name="title" :title="title">
                  {{ title }}
                </slot>
              </p>
              <p v-if="(description || $slots.description)" :class="variant.description">
                <slot name="description" :description="description">
                  {{ description }}
                </slot>
              </p>

              <div v-if="(description || $slots.description) && actions.length" :class="variant.notificationButtonDescription">
                <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...nuxtLabsTheme.UNotification.base.default.actionButton, ...action }" @click.stop="onAction(action)" />
              </div>
            </div>
            <div :class="variant.flexDescription">
              <div v-if="!description && !$slots.description && actions.length" :class="variant.flexDescriptionLength">
                <UButton v-for="(action, index) of actions" :key="index" v-bind="{ ...nuxtLabsTheme.UNotification.base.default.actionButton, ...action }" @click.stop="onAction(action)" />
              </div>

              <UButton v-if="closeButton" v-bind="{ ...nuxtLabsTheme.UNotification.base.default.closeButton, ...closeButton }" @click.stop="onClose" />
            </div>
          </div>
        </div>
        <div v-if="timeout" :class="progressClass" :style="progressStyle" />
      </div>
    </div>
  </Transition>
</template>