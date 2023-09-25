<script lang="ts">
import { cloneVNode, computed, defineComponent, h } from 'vue'
import type { PropType, VNode } from 'vue'
import classNames from 'classnames'
import nuxtLabsTheme from '../../../theme/nuxtLabsTheme'
import { getSlotsFromChildren } from './Types'
import UAvatar from './UAvatar.vue'
import { getVariantPropsWithClassesList } from '@/utils/getVariantProps'
import type { UAvatarGroup } from '@/Types/componentsTypes/components'
import { Components } from '@/Types/enums/Components'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export default defineComponent({
  name: Components.UAvatarGroup,
  ...getVariantPropsWithClassesList<UAvatarGroup>(),

  props: {
    size: {
      type: String as PropType<AvatarSize>,
      default: 'md',
    },
    max: {
      type: Number,
      default: null,
    },
  },
  setup(props, { slots }) {
    const children = computed(() => getSlotsFromChildren(slots))

    // if max is passed as a string, we go ahead and convert it into an integer

    const max = computed(() => typeof props.max === 'string' ? Number.parseInt(props.max) : props.max)

    const clones = computed(() => children.value.map((node: VNode<unknown, unknown, { [key: string]: any }>, index: number) => {
      const vProps: Record<string, string> = {}

      if (!props.max || (max.value && index < max.value)) {
        if (props.size)
          vProps.size = props.size

        vProps.class = node.props?.class || ''
        vProps.class += `${classNames(
          nuxtLabsTheme.UAvatarGroup.base.avatarGroupMargin,
        )}`

        return cloneVNode(node, vProps)
      }

      if (max.value !== undefined && index === max.value) {
        return h(UAvatar, {
          size: props.size,
          text: `${children.value.length - max.value}`,
          name: `${children.value.length - max.value}`,
        })
      }

      return null
    }).filter(Boolean).reverse())

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return () => h('div', { class: nuxtLabsTheme.UAvatarGroup.base.root }, clones.value)
  },
})
</script>
