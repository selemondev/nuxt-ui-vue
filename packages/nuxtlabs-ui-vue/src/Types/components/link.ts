import type { RouterLinkProps } from 'vue-router'

export interface Link extends RouterLinkProps {
  exact?: boolean
  exactQuery?: boolean
  exactMatch?: boolean
  inactiveClass?: string
}
