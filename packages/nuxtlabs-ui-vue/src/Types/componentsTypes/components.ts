import type { WithVariantProps } from '../variant'

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

interface size {
  [key: string]: string
}

interface chipPosition {
  [key: string]: string
}

interface UComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface UAvatar extends UComponentRoot {
  background?: string
  rounded?: string
  text?: string
  placeholder?: string
  size?: size
  chip?: {
    base?: string
    background?: string
    position?: chipPosition
    size?: size
  }
  icon?: {
    base?: string
    size?: size
  }
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

export interface UButtonGroup extends UComponentRoot {
  vertical?: boolean
}

export interface UIcon extends UComponentRoot {
  size?: string
}

export type UAvatarVariants = WithVariantProps<UAvatar>
export type UButtonVariants = WithVariantProps<UButton>
export type UButtonGroupVariants = WithVariantProps<UButtonGroup>
export type UIconVariants = WithVariantProps<UIcon>
