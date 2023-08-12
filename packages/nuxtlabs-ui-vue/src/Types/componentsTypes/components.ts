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

interface ItemStyle {
  base: string
  size: string
  color: string
  padding: string
  icon: string
}

interface TransitionStyle {
  enterActiveClass: string
  leaveActiveClass: string
}

interface DefaultStyle {
  openIcon: string
  closeIcon: string
  class: string
  variant: string
}

interface objectProp {
  [key: string]: string
}

interface UComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface UAccordion extends UComponentRoot {
  item: ItemStyle
  transition: TransitionStyle
  default: DefaultStyle
}

export interface UAlert extends UComponentRoot {
  title?: string
  description?: string
  shadow?: string
  rounded?: string
  padding?: string
  icon: {
    base?: string
  }
  avatar: {
    base?: string
    size?: string
  }
  color?: string
  variant?: string
}

export interface UAvatar extends UComponentRoot {
  avatarWrapper?: string
  avatarChipClass?: string
  avatarSize?: string
  avatarIconSize?: string
  avatarRounded?: string
  avatarClass?: string
  avatarChipSize?: string
  avatarChipPosition?: string
  avatarPlaceholderClass?: string
  avatarIconColor?: string
}

export interface UAvatarGroup extends UComponentRoot {
  avatarGroupMargin?: string
  reverse?: string
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

export interface UBadge extends UComponentRoot {
  rounded?: string
  font?: string
  size?: objectProp
  color?: objectProp
  variant?: objectProp
  default?: objectProp

}

export interface UIcon extends UComponentRoot {
  size?: string
}

export type UAccordionVariants = WithVariantProps<UAccordion>
export type UAlertVariants = WithVariantProps<UAlert>
export type UAvatarVariants = WithVariantProps<UAvatar>
export type UAvatarGroupVariants = WithVariantProps<UAvatarGroup>
export type UBadgeVariants = WithVariantProps<UBadge>
export type UButtonVariants = WithVariantProps<UButton>
export type UButtonGroupVariants = WithVariantProps<UButtonGroup>
export type UIconVariants = WithVariantProps<UIcon>
