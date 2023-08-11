import type { WithVariantProps } from '../variant'

interface UComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface UIcon extends UComponentRoot {
  size?: string
}

export type UIconVariants = WithVariantProps<UIcon>
