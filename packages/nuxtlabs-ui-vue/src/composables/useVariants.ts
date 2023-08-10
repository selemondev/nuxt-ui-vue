/* eslint-disable @typescript-eslint/ban-ts-comment */
import { inject } from 'vue'
import { twMerge } from 'tailwind-merge'
import type {
  CSSClass,
  CSSClassKeyValuePair,
  CSSClasses,
  CSSRawClassesList,
  WindiUIConfiguration,
} from '../Types/variant'
import type { Components } from '../Types/enums/Components'
import type { VariantJSWithClassesListProps } from '../utils/getVariantProps'

export function selectClasses(classesObject: CSSClassKeyValuePair): CSSClasses {
  return Object.keys(classesObject).filter(
    (className: string) => !!classesObject[className],
  )
}

function mergeClasses(...classes: CSSClasses): string {
  return classes
    .map((className: CSSClass): string => {
      if (typeof className === 'string' || className === undefined)
        return className || ''

      if (Array.isArray(className))
        return mergeClasses(...className)

      return mergeClasses(...selectClasses(className))
    })
    .join(' ')
    .replace(/  +/g, ' ')
    .trim()
}

export function useVariants<T>(name: Components,
  props: VariantJSWithClassesListProps<T> = {}): {
    transitions?: Record<string, Record<string, string>>
  } & CSSRawClassesList<T> {
  const config = inject<WindiUIConfiguration>(
    'config',
    {} as WindiUIConfiguration,
  )

  const globalVariant = config && config[name]

  const finalResult: {
    transitions?: Record<string, Record<string, string>>
  } & CSSRawClassesList<T> = {}

  if (globalVariant) {
    for (const [key, value] of Object.entries(globalVariant.base || {})) {
      const result = props.base?.[key]
        ? [props.base[key]]
        : [value]

      const variant = props.variant || 'default'
      result.push(
        Array.isArray(variant)
          ? variant.map(
            el =>

              props.variants?.[el]?.[key]
                  || globalVariant?.variants?.[el]?.[key],
          )
        // @ts-expect-error
          : props.variants?.[variant]?.[key]
          // @ts-expect-error
                || globalVariant?.variants?.[variant]?.[key],
      )
      // @ts-expect-error
      finalResult[key as keyof T] = result.filter(el => !!el)
    }
  }

  for (const [key, value] of Object.entries(finalResult))

    finalResult[key] = twMerge(mergeClasses(value))

  finalResult.transitions = config?.transitions || {}

  return finalResult
}
