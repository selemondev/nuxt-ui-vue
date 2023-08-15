import type { Components } from './enums/Components'
import type { UAccordionVariants, UAlertVariants, UAvatarVariants, UBadgeVariants, UButtonGroupVariants, UButtonVariants, UCheckboxVariants, UCommandPaletteVariants, UDropdownVariants, UFormGroupVariants, UIconVariants, UInputVariants, UKbdVariants, UModalVariants, UPaginationVariants, URadioVariants, URangeVariants, USelectMenuVariants, USelectVariants, USlideoverVariants, UTabsVariants, UTextareaVariants, UToggleVariants, UTooltipVariants, UVerticalNavigationVariants } from './componentsTypes/components'

export declare interface CSSClassKeyValuePair {
  [key: string]: any
}
export declare type CSSClasses = CSSClass[]
export declare type CSSClass =
    | CSSClassKeyValuePair
    | string
    | CSSClasses
    | undefined

export declare type CSSClassesList<ClassesKeys extends string = string> = {
  [key in ClassesKeys]?: CSSClass
}

export declare type CSSRawClassesList<ClassesKeys> = {
  [T in keyof ClassesKeys]?: CSSClass
}

export type WithVariantProps<P> = {
  base?: CSSRawClassesList<P>
  variants?: Variants<P>
} & P

export interface Variants<P> {
  [key: string]: CSSRawClassesList<P> | undefined
}

export interface NuxtLabsUIConfiguration {
  transitions: Record<string, Record<string, string>>
  [Components.UAlert]?: UAlertVariants
  [Components.UAccordion]?: UAccordionVariants
  [Components.UAvatar]?: UAvatarVariants
  [Components.UBadge]?: UBadgeVariants
  [Components.UButton]?: UButtonVariants
  [Components.UButtonGroup]?: UButtonGroupVariants
  [Components.UCommandPalette]?: UCommandPaletteVariants
  [Components.UCheckbox]?: UCheckboxVariants
  [Components.UDropdown]?: UDropdownVariants
  [Components.UFormGroup]?: UFormGroupVariants
  [Components.UIcon]?: UIconVariants
  [Components.UInput]?: UInputVariants
  [Components.UKbd]?: UKbdVariants
  [Components.UModal]?: UModalVariants
  [Components.UTextarea]?: UTextareaVariants
  [Components.UPagination]?: UPaginationVariants
  [Components.URadio]?: URadioVariants
  [Components.URange]?: URangeVariants
  [Components.USelect]?: USelectVariants
  [Components.USelectMenu]?: USelectMenuVariants
  [Components.USlideover]?: USlideoverVariants
  [Components.UTabs]?: UTabsVariants
  [Components.UToggle]?: UToggleVariants
  [Components.UTooltip]?: UTooltipVariants
  [Components.UVerticalNavigation]?: UVerticalNavigationVariants
}
