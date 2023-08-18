import { createDefu } from 'defu'
import { twMerge } from 'tailwind-merge'

export const defuTwMerge = createDefu((obj, key, value) => {
  if (typeof obj[key] === 'string' && typeof value === 'string' && obj[key] && value) {
    obj[key] = twMerge(obj[key], value)
    return true
  }
})

export function getSlotsChildren(slots: any) {
  let children = slots.default?.()
  if (children.length) {
    children = children.flatMap((c) => {
      if (typeof c.type === 'symbol') {
        if (typeof c.children === 'string') {
          // eslint-disable-next-line array-callback-return
          return
        }
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
