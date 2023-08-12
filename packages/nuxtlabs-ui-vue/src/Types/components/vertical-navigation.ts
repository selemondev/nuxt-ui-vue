import type { Link } from './link'
import type { Avatar } from './avatar'

export interface VerticalNavigationLink extends Link {
  label: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  // eslint-disable-next-line @typescript-eslint/ban-types
  click?: Function
  badge?: string | number
}
