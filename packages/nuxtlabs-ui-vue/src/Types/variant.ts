import type { Components } from './enums/Components'
import type { UAccordionVariants, UAlertVariants, UAvatarVariants, UBadgeVariants, UButtonGroupVariants, UButtonVariants, UCheckboxVariants, UDropdownVariants, UIconVariants, UInputVariants, UKbdVariants, URadioVariants, USelectVariants, UTextareaVariants } from './componentsTypes/components'

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
  [Components.UCheckbox]?: UCheckboxVariants
  [Components.UDropdown]?: UDropdownVariants
  [Components.UIcon]?: UIconVariants
  [Components.UInput]?: UInputVariants
  [Components.UKbd]?: UKbdVariants
  [Components.UTextarea]?: UTextareaVariants
  [Components.URadio]?: URadioVariants
  [Components.USelect]?: USelectVariants
}
