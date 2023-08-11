export default {
  UButton: {
    base: {
      root: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
      font: 'font-medium',
      rounded: 'rounded-md',
      size: {
        '2xs': 'text-xs',
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-sm',
        'lg': 'text-sm',
        'xl': 'text-base',
      },
      gap: {
        '2xs': 'gap-x-1',
        'xs': 'gap-x-1.5',
        'sm': 'gap-x-1.5',
        'md': 'gap-x-2',
        'lg': 'gap-x-2.5',
        'xl': 'gap-x-2.5',
      },
      padding: {
        '2xs': 'px-2 py-1',
        'xs': 'px-2.5 py-1.5',
        'sm': 'px-2.5 py-1.5',
        'md': 'px-3 py-2',
        'lg': 'px-3.5 py-2.5',
        'xl': 'px-3.5 py-2.5',
      },
      square: {
        '2xs': 'p-1',
        'xs': 'p-1.5',
        'sm': 'p-1.5',
        'md': 'p-2',
        'lg': 'p-2.5',
        'xl': 'p-2.5',
      },
      color: {
        white: {
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:enabled:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:enabled:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          ghost: 'text-gray-900 dark:text-white hover:enabled:bg-white dark:hover:enabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
        gray: {
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:enabled:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:enabled:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          ghost: 'text-gray-700 dark:text-gray-200 hover:enabled:text-gray-900 dark:hover:enabled:text-white hover:enabled:bg-gray-50 dark:hover:enabled:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          link: 'text-gray-500 dark:text-gray-400 hover:enabled:text-gray-700 dark:hover:enabled:text-gray-200 underline-offset-4 hover:enabled:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
        black: {
          solid: 'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:enabled:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:enabled:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
          link: 'text-gray-900 dark:text-white underline-offset-4 hover:enabled:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
      },
      intent: {
        solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:enabled:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:enabled:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
        outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:enabled:bg-{color}-50 disabled:bg-transparent dark:hover:enabled:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:enabled:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:enabled:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        ghost: 'text-{color}-500 dark:text-{color}-400 hover:enabled:bg-{color}-50 disabled:bg-transparent dark:hover:enabled:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        link: 'text-{color}-500 hover:enabled:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:enabled:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:enabled:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
      },
      icon: {
        base: 'flex-shrink-0',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
      },
      default: {
        size: 'sm',
        variant: 'solid',
        color: 'green',
        loadingIcon: 'svg-spinners:bars-rotate-fade',
      },
    },

    variants: {
      default: {
        root: 'green',
        size: 'sm',
        intent: 'solid',
        color: 'green',
        loadingIcon: 'svg-spinners:bars-rotate-fade',
      },
    },
  },
  UButtonGroup: {
    base: {
      root: 'flex [&>:not(:first-child):not(:last-child)]:rounded-none',
    },
    variants: {
      horizontal: {
        root: '[&>:first-child]:rounded-r-none [&>:last-child]:rounded-l-none [&>*+*]:border-l-0',
      },
      vertical: {
        root: 'flex-col [&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none [&>*+*]:border-t-0 [&>:not(:last-child):not(:focus-visible)]:!shadow-none',
      },
    },
  },
  UIcon: {
    base: {
      'root': 'block cursor-pointer',
      'normal': 'text-base',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'base': 'text-base',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '6xl': 'text-6xl',
      '8xl': 'text-8xl',
    },

    variants: {
      default: {
        root: 'block cursor-pointer',
      },
    },
  },

  transitions: {
    scale: {
      'enter-active-class': 'duration-200 ease-[cubic-bezier(0.175,0.885,0.32,1.475)]',
      'enter-from-class': 'transform scale-0',
      'leave-active-class': 'duration-200 ease-in',
      'leave-to-class': 'transform scale-0',
    },
    fade: {
      'enter-active-class': '0.5s ease-in duration-500',
      'enter-to-class': 'opacity-100',
      'enter-from-class': 'opacity-0',
      'leave-active-class': '0.5s ease-in duration-300',
      'leave-to-class': 'opacity-0 duration-300 ease-in',
      'leave-from-class': 'opacity-100',
    },

    slideLeft: {
      'enter-from-class': 'translate-x-[150%] opacity-0',
      'leave-to-class': 'translate-x-[-150%] duration-500 ease-in opacity-0',
      'enter-active-class': 'transition duration-500',
      'leave-active-class': 'transition duration-500',
    },

    slideRight: {
      'enter-from-class': 'translate-x-[150%] opacity-0',
      'leave-to-class': 'translate-x-[150%] duration-500 ease-in opacity-0',
      'enter-active-class': 'transition duration-500',
      'leave-active-class': 'transition duration-500',
    },
  },
}
