import type { WithVariantProps } from '../variant'

interface UComponentRoot extends Record<string, unknown> {
  root?: string
};

interface IconSize {
  '2xs': string
  'xs': string
  'sm': string
  'md': string
  'lg': string
  'xl': string
}

interface IconStyles {
  base: string
  size: IconSize
}

interface ColorVariantStyles {
  solid: string
  ghost: string
  link: string
}

interface ColorStyles {
  white: ColorVariantStyles
  gray: ColorVariantStyles
  black: ColorVariantStyles
}

interface VariantStyles {
  solid: string
  outline: string
  soft: string
  ghost: string
  link: string
}

interface ButtonColorStyles {
  color: ColorStyles
  variant: VariantStyles
}

export interface UButton extends UComponentRoot {
  font?: string
  size?: string
  gap?: string
  rounded?: string
  padding?: string
  square?: string
  color?: ButtonColorStyles
  icon?: IconStyles
}
export interface UIcon extends UComponentRoot {
  size?: string
}

export type UButtonVariants = WithVariantProps<UButton>
export type UIconVariants = WithVariantProps<UIcon>
