import type { Slot, VNode } from 'vue'

export function getSlotsFromChildren(slot: Slot | any): VNode[] {
  let children = slot?.default?.()
  if (children.length) {
    children = children.flatMap((c: { type: { name: string }; children: any; ctx: { slots: { default: () => any } } }) => {
      if (typeof c.type === 'symbol') {
        if (typeof c.children === 'string')
          return false

        return c.children
      }
      else if (c.type.name === 'ContentSlot') {
        return c.ctx.slots.default?.()
      }
      return c
    }).filter(Boolean)
  }
  return children
}
