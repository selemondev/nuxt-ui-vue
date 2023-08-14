<script setup lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { Menu as HMenu, MenuButton as HMenuButton, MenuItem as HMenuItem, MenuItems as HMenuItems } from '@headlessui/vue'
import type { PropType } from 'vue'
import { defu } from 'defu'
import { omit } from 'lodash-es'
import ULink from '../Link/ULink.vue'
import UIcon from '../Icon/UIcon.vue'
import UAvatar from '../Avatar/UAvatar.vue'
import UKbd from '../Kbd/UKbd.vue'
import { usePopper } from '@/composables/usePopper'
import type { DropdownItem } from '@/Types/components/dropdown'
import type { PopperOptions } from '@/Types/components/popper'
import { Components } from '@/Types/enums/Components'
import type { UDropdown } from '@/Types/componentsTypes/components'
import { useVariants } from '@/composables/useVariants'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { VariantJSWithClassesListProps } from '@/utils/getVariantProps'
import nuxtLabsTheme from '@/theme/nuxtLabsTheme'

const props = defineProps({
  ...getVariantPropsWithClassesList<UDropdown>(),
  items: {
    type: Array as PropType<DropdownItem[][]>,
    default: () => [],
  },
  mode: {
    type: String,
    default: 'click',
    validator: (value: string) => {
      return ['click', 'hover'].includes(value)
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  popper: {
    type: Object as PropType<PopperOptions>,
    default: () => ({}),
  },
  openDelay: {
    type: Number,
    default: 50,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
})

const variant = computed(() => {
  const customProps = {
    ...props,
    variant: props.variant,
  }

  return useVariants<UDropdown>(
    Components.UDropdown,
    customProps as VariantJSWithClassesListProps<UDropdown>,
  )
})

const popper = computed<PopperOptions>(() => defu(props.mode === 'hover' ? { offsetDistance: 0 } : {}, props.popper, variant.value.popper as PopperOptions))

const [trigger, container] = usePopper(popper.value)

// https://github.com/tailwindlabs/headlessui/blob/f66f4926c489fc15289d528294c23a3dc2aee7b1/packages/%40headlessui-vue/src/components/menu/menu.ts#L131
const menuApi = ref<any>(null)

let openTimeout: NodeJS.Timeout | null = null
let closeTimeout: NodeJS.Timeout | null = null

onMounted(() => {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const menuProvides = trigger.value?.$.provides
    if (!menuProvides)
      return

    const menuProvidesSymbols = Object.getOwnPropertySymbols(menuProvides)
    menuApi.value = menuProvidesSymbols.length && menuProvides[menuProvidesSymbols[0]]
  }, 200)
})

const containerStyle = computed(() => {
  const offsetDistance = (props.popper as PopperOptions)?.offsetDistance || (variant.value.popper as PopperOptions)?.offsetDistance || 8
  return props.mode === 'hover' ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {}
})

function onMouseOver() {
  if (props.mode !== 'hover' || !menuApi.value)
    return

  // cancel programmed closing
  if (closeTimeout) {
    clearTimeout(closeTimeout)
    closeTimeout = null
  }
  // dropdown already open
  if (menuApi.value.menuState === 0)
    return

  openTimeout = openTimeout || setTimeout(() => {
    menuApi.value.openMenu && menuApi.value.openMenu()
    openTimeout = null
  }, props.openDelay)
}

function onMouseLeave() {
  if (props.mode !== 'hover' || !menuApi.value)
    return

  // cancel programmed opening
  if (openTimeout) {
    clearTimeout(openTimeout)
    openTimeout = null
  }
  // dropdown already closed
  if (menuApi.value.menuState === 1)
    return

  closeTimeout = closeTimeout || setTimeout(() => {
    menuApi.value.closeMenu && menuApi.value.closeMenu()
    closeTimeout = null
  }, props.closeDelay)
}
</script>

<script lang="ts">
export default defineComponent({
  name: Components.UDropdown,
  inheritAttrs: false,
})
</script>

<template>
  <HMenu v-slot="{ open }" as="div" :class="variant.root" @mouseleave="onMouseLeave">
    <HMenuButton
      ref="trigger"
      as="div"
      :disabled="props.disabled"
      class="inline-flex w-full"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :disabled="props.disabled">
        <button :disabled="props.disabled">
          Open
        </button>
      </slot>
    </HMenuButton>

    <div v-if="open && props.items" ref="container" :class="[variant.container, variant.width]" :style="containerStyle" @mouseover="onMouseOver">
      <Transition appear v-bind="nuxtLabsTheme.UDropdown.base.transition">
        <HMenuItems :class="[variant.base, variant.divide, variant.ring, variant.rounded, variant.shadow, variant.background, variant.height]" static>
          <div v-for="(subItems, index) of props.items" :key="index" :class="variant.padding">
            <HMenuItem v-for="(item, subIndex) of subItems" :key="subIndex" v-slot="{ active, disabled: itemDisabled }" :disabled="item.disabled">
              <ULink
                to=""
                v-bind="omit(item, ['label', 'slot', 'icon', 'iconClass', 'avatar', 'shortcuts', 'disabled', 'click'])"
                :class="[variant.itemBase, variant.itemPadding, variant.itemSize, variant.itemRounded, active ? variant.itemActive : variant.itemInActive, itemDisabled && variant.itemDisabled]"
                @click="item.click"
              >
                <slot :name="item.slot || 'item'" :item="item">
                  <UIcon v-if="item.icon" :name="item.icon" :class="[variant.itemIconBase, active ? variant.itemIconActive : variant.itemIconInActive, item.iconClass]" />
                  <UAvatar v-else-if="item.avatar" v-bind="{ size: variant.itemAvatarSize, ...item.avatar, ...$attrs }" :class="variant.itemAvatarBase" />

                  <span class="truncate">{{ item.label }}</span>

                  <span v-if="item.shortcuts?.length" :class="variant.itemShortcuts">
                    <UKbd v-for="shortcut of item.shortcuts" :key="shortcut">{{ shortcut }}</UKbd>
                  </span>
                </slot>
              </ULink>
            </HMenuItem>
          </div>
        </HMenuItems>
      </Transition>
    </div>
  </HMenu>
</template>
