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

interface DefaultStyle {
  openIcon: string
  closeIcon: string
  class: string
  variant: string
}

interface objectProp {
  [key: string]: string
}

interface LeadingStyles {
  leading: {
    padding: Record<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', string>
  }
}

interface PaddingStyles {
  trailing: {
    padding: Record<'2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl', string>
  }
}

interface UComponentRoot extends Record<string, unknown> {
  root?: string
};

export interface UAccordion extends UComponentRoot {
  itemBase?: string
  itemSize?: string
  itemColor?: string
  itemPadding?: string
  itemIcon?: string
  transition?: objectProp
  default: DefaultStyle
}

export interface UAlert extends UComponentRoot {
  title?: string
  description?: string
  shadow?: string
  rounded?: string
  padding?: string
  iconBase?: string
  avatarBase?: string
  avatarSize?: string
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

export interface UCommandPalette extends UComponentRoot {
  container?: string
  inputWrapper?: string
  inputBase?: string
  inputPadding?: string
  inputHeight?: string
  inputSize?: string
  inputIconBase?: string
  inputIconSize?: string
  inputIconPadding?: string
  inputCloseButton?: string
  emptyStateWrapper?: string
  emptyStateLabel?: string
  emptyStateQueryLabel?: string
  emptyStateIcon?: string
  groupWrapper?: string
  groupLabel?: string
  groupContainer?: string
  groupCommandBase?: string
  groupCommandActive?: string
  groupCommandInactive?: string
  groupCommandLabel?: string
  groupCommandPrefix?: string
  groupCommandSuffix?: string
  groupCommandContainer?: string
  groupCommandIconBase?: string
  groupCommandIconActive?: string
  groupCommandIconInactive?: string
  groupCommandSelectedIconBase?: string
  groupCommandAvatarBase?: string
  groupCommandAvatarSize?: string
  groupCommandChipBase?: string
  groupCommandDisabled?: string
  groupCommandShortcuts?: string
  groupActive?: string
  groupInactive?: string

}

export interface UContextMenu extends UComponentRoot {
  container?: string
  width?: string
  background?: string
  shadow?: string
  rounded?: string
  ring?: string
  base?: string
  enterActiveClass?: string
  enterFromClass?: string
  enterToClass?: string
  leaveActiveClass?: string
  leaveFromClass?: string
  leaveToClass?: string
  popper?: {
    placement?: string
    scroll?: boolean
  }
}

export interface UCheckbox extends UComponentRoot {
  base?: string
  rounded?: string
  color?: string
  background?: string
  border?: string
  ring?: string
  label?: string
  required?: string
  help?: string
  default?: objectProp
}

export interface UFormGroup extends UComponentRoot {
  container?: string
  description?: string
  hint?: string
  help?: string
  error?: string
  size?: objectProp
  labelWrapper?: string
  labelBase?: string
  labelRequired?: string
}

export interface UDropdown extends UComponentRoot {
  container?: string
  height?: string
  width?: string
  background?: string
  shadow?: string
  rounded?: string
  ring?: string
  base?: string
  divide?: string
  padding?: string
  itemBase: string
  itemRounded: string
  itemPadding: string
  itemSize: string
  itemActive: string
  itemInActive: string
  itemDisabled: string
  itemIconBase: string
  itemIconActive: string
  itemIconInActive: string
  itemAvatarBase: string
  itemAvatarSize: string
  itemShortcuts: string
  transition?: objectProp
  popper?: objectProp
}

export interface UIcon extends UComponentRoot {
  size?: string
}

export interface UInput extends UComponentRoot {
  base?: string
  rounded?: string
  placeholder?: string
  size?: objectProp
  gap?: objectProp
  padding?: objectProp
  leading?: LeadingStyles
  trailing?: PaddingStyles
  color?: objectProp
  icon?: objectProp
  default?: objectProp
}
export interface UKbd extends UComponentRoot {
  padding?: string
  size?: objectProp
  rounded?: string
  font?: string
  background?: string
  ring?: string
  default?: objectProp
}

export interface UModal extends UComponentRoot {
  inner?: string
  container?: string
  padding?: string
  margin?: string
  base?: string
  overlayBase?: string
  overlayBackground?: string
  overlayEnterTransition?: string
  overlayEnterFrom?: string
  overlayEnterTo?: string
  overlayLeaveTransition?: string
  overlayLeaveFrom?: string
  overlayLeaveTo?: string
  background?: string
  ring?: string
  rounded?: string
  shadow?: string
  width?: string
  height?: string
  transitionEnter?: string
  transitionEnterFrom?: string
  transitionEnterTo?: string
  transitionLeave?: string
  transitionLeaveFrom?: string
  transitionLeaveTo?: string
}

export interface UNotification extends UComponentRoot {
  container?: string
  title?: string
  description?: string
  background?: string
  shadow?: string
  rounded?: string
  padding?: string
  ring?: string
  iconBase?: string
  iconColor?: string
  avatarBase?: string
  avatarSize?: string
  progressBase?: string
  progressBackground?: string
  transitionEnterActiveClass?: string
  transitionEnterFromClass?: string
  transitionEnterToClass?: string
  transitionLeaveActiveClass?: string
  transitionLeaveFromClass?: string
  transitionLeaveToClass?: string
  default?: objectProp
}

export interface UPagination extends UComponentRoot {
  base?: string
  rounded?: string
  defaultSize?: string
  defaultActiveButtonColor?: string
  defaultInactiveButtonColor?: string
  defaultPrevButtonColor?: string
  defaultPrevButtonClass?: string
  defaultPrevButtonIcon?: string
  defaultNextButtonColor?: string
  defaultNextButtonClass?: string
  defaultNextButtonIcon?: string
}

export interface UPopover extends UComponentRoot {
  root?: string
  container?: string
  width?: string
  background?: string
  shadow?: string
  rounded?: string
  ring?: string
  base?: string
  transitionEnterActiveClass?: string
  transitionEnterFromClass?: string
  transitionEnterToClass?: string
  transitionLeaveActiveClass?: string
  transitionLeaveFromClass?: string
  transitionLeaveToClass?: string
}

export interface URadio extends UComponentRoot {
  base?: string
  color?: string
  background?: string
  border?: string
  ring?: string
  label?: string
  required?: string
  help?: string
  default: objectProp
}

export interface URange extends UComponentRoot {
  base?: string
  rounded?: string
  background?: string
  ring?: string
  progressBase?: string
  progressRounded?: string
  progressBackground?: string
  progress?: objectProp
  thumb?: objectProp
  track?: objectProp
  size?: objectProp
  default?: objectProp
}

export interface USelect extends UComponentRoot {
  base?: string
  rounded?: string
  placeholder?: string
  size?: objectProp
  gap?: objectProp
  padding?: objectProp
  leading?: objectProp
  trailing?: objectProp
  color?: objectProp
  intent?: objectProp
  iconBase?: string
  icon?: objectProp
  default?: objectProp
}

export interface USelectMenu extends UComponentRoot {
  container?: string
  width?: string
  height?: string
  base?: string
  background?: string
  shadow?: string
  rounded?: string
  padding?: string
  ring?: string
  input?: string
  optionBase?: string
  optionRounded?: string
  optionPadding?: string
  optionSize?: string
  optionColor?: string
  optionContainer?: string
  optionActive?: string
  optionInactive?: string
  optionSelected?: string
  optionDisabled?: string
  optionEmpty?: string
  optionIconBase?: string
  optionIconActive?: string
  optionIconInactive?: string
  optionSelectedIconWrapper?: string
  optionSelectedIconPadding?: string
  optionSelectedIconBase?: string
  optionAvatarBase?: string
  optionAvatarSize?: string
  optionChipBase?: string
  transition?: objectProp
  popper?: objectProp
  default?: objectProp

}

export interface USlideover extends UComponentRoot {
  overlayBase?: string
  overlayBackground?: string
  overlayEnterTransition?: string
  overlayEnterFrom?: string
  overlayEnterTo?: string
  overlayLeaveTransition?: string
  overlayLeaveFrom?: string
  overlayLeaveTo?: string
  base?: string
  background?: string
  ring?: string
  rounded?: string
  padding?: string
  shadow?: string
  width?: string
  transitionEnter?: string
  transitionLeave?: string
}

export interface UTable extends UComponentRoot {
  base?: string
  divide?: string
  tHead?: string
  tBody?: string
  trBase?: string
  trSelected?: string
  trActive?: string
  thBase?: string
  thPadding?: string
  thColor?: string
  thFont?: string
  thSize?: string
  tdBase?: string
  tdPadding?: string
  tdColor?: string
  tdFont?: string
  tdSize?: string
  loadingStateWrapper?: string
  loadingStateLabel?: string
  loadingStateIcon?: string
  emptyStateWrapper?: string
  emptyStateLabel?: string
  emptyStateIcon?: string
  default?: objectProp
}

export interface UTabs extends UComponentRoot {
  container?: string
  base?: string
  listBase?: string
  listBackground?: string
  listRounded?: string
  listShadow?: string
  listPadding?: string
  listHeight?: string
  listWidth?: string
  listMarkerWrapper?: string
  listMarkerBase?: string
  listMarkerBackground?: string
  listMarkerRounded?: string
  listMarkerShadow?: string
  listTabBase?: string
  listTabBackground?: string
  listTabActive?: string
  listTabInactive?: string
  listTabHeight?: string
  listTabPadding?: string
  listTabSize?: string
  listTabFont?: string
  listTabRounded?: string
  listTabShadow?: string
}

export interface UTextarea extends UComponentRoot {
  base?: string
  rounded?: string
  placeholder?: string
  size?: objectProp
  gap?: objectProp
  padding?: objectProp
  leading?: LeadingStyles
  trailing?: PaddingStyles
  color?: objectProp
  iconBase?: string
  leadingWrapper?: string
  leadingPointer?: string
  trailingWrapper?: string
  trailingPointer?: string
  icon?: objectProp
  default?: objectProp
}

export interface UToggle extends UComponentRoot {
  rounded?: string
  ring?: string
  active?: string
  inactive?: string
  containerBase?: string
  containerActive?: string
  containerInactive?: string
  iconBase?: string
  iconActive?: string
  iconInactive?: string
  iconOn?: string
  iconOff?: string
  default?: objectProp
}

export interface UTooltip extends UComponentRoot {
  container?: string
  width?: string
  background?: string
  color?: string
  shadow?: string
  rounded?: string
  ring?: string
  base?: string
  shortcuts?: string
  transitionEnterActiveClass?: string
  transitionEnterFromClass?: string
  transitionEnterToClass?: string
  transitionLeaveActiveClass?: string
  transitionLeaveFromClass?: string
  transitionLeaveToClass?: string
  popper?: {
    strategy?: string
  }
}

export interface UVerticalNavigation extends UComponentRoot {
  base?: string
  ring?: string
  padding?: string
  width?: string
  rounded?: string
  font?: string
  size?: string
  active?: string
  inactive?: string
  label?: string
  iconBase?: string
  iconActive?: string
  iconInActive?: string
  avatarBase?: string
  avatarSize?: string
  badgeBase?: string
  badgeActive?: string
  badgeInActive?: string
}

export type UAccordionVariants = WithVariantProps<UAccordion>
export type UAlertVariants = WithVariantProps<UAlert>
export type UAvatarVariants = WithVariantProps<UAvatar>
export type UAvatarGroupVariants = WithVariantProps<UAvatarGroup>
export type UBadgeVariants = WithVariantProps<UBadge>
export type UButtonVariants = WithVariantProps<UButton>
export type UButtonGroupVariants = WithVariantProps<UButtonGroup>
export type UCommandPaletteVariants = WithVariantProps<UCommandPalette>
export type UContextMenuVariants = WithVariantProps<UContextMenu>
export type UCheckboxVariants = WithVariantProps<UCheckbox>
export type UFormGroupVariants = WithVariantProps<UFormGroup>
export type UDropdownVariants = WithVariantProps<UDropdown>
export type UIconVariants = WithVariantProps<UIcon>
export type UInputVariants = WithVariantProps<UInput>
export type UTableVariants = WithVariantProps<UTable>
export type UTabsVariants = WithVariantProps<UTabs>
export type UTextareaVariants = WithVariantProps<UTextarea>
export type UModalVariants = WithVariantProps<UModal>
export type UNotificationVariants = WithVariantProps<UNotification>
export type UKbdVariants = WithVariantProps<UKbd>
export type UPaginationVariants = WithVariantProps<UPagination>
export type UPopoverVariants = WithVariantProps<UPopover>
export type URadioVariants = WithVariantProps<URadio>
export type URangeVariants = WithVariantProps<URange>
export type USelectVariants = WithVariantProps<USelect>
export type USelectMenuVariants = WithVariantProps<USelectMenu>
export type USlideoverVariants = WithVariantProps<USlideover>
export type UToggleVariants = WithVariantProps<UToggle>
export type UTooltipVariants = WithVariantProps<UTooltip>
export type UVerticalNavigationVariants = WithVariantProps<UVerticalNavigation>
