import type { PropType } from 'vue'
import type {
  CSSClassesList,
  CSSRawClassesList,
  WithVariantProps,
} from '../Types/variant'

export interface VariantJSWithClassesListProps<ClassesKeys> {
  classes?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  base?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variants?: {
    type: PropType<CSSRawClassesList<ClassesKeys>>
    default: undefined
  }
  variant?: {
    type: PropType<string | string[] | undefined>
    default?: string
  }
}

declare interface ObjectWithClassesList {
  classesList?: CSSClassesList
}

export declare const parseVariantWithClassesList: <
    P extends ObjectWithClassesList,
  >() => P

export function getVariantPropsWithClassesList<
    ClassesKeys extends Record<string, unknown>,
  >(): VariantJSWithClassesListProps<ClassesKeys> {
  return {
    classes: {
      type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
      default: undefined,
    },
    base: {
      type: Object as PropType<CSSRawClassesList<ClassesKeys>>,
      default: undefined,
    },
    variants: {
      type: Object as PropType<WithVariantProps<ClassesKeys>>,
      default: undefined,
    },
    variant: {
      type: [String, Array] as PropType<string | string[] | undefined>,
      default: undefined,
    },
  }
}
