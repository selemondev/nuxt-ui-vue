export default {
  UAvatar: {
    base: {
      root: 'relative inline-flex items-center justify-center flex-shrink-0',
      background: 'bg-gray-100 dark:bg-gray-800',
      rounded: 'rounded-full',
      text: 'font-medium leading-none text-gray-900 dark:text-white truncate',
      placeholder: 'font-medium leading-none text-gray-500 dark:text-gray-400 truncate',
      size: {
        '3xs': 'h-4 w-4 text-[8px]',
        '2xs': 'h-5 w-5 text-[10px]',
        'xs': 'h-6 w-6 text-xs',
        'sm': 'h-8 w-8 text-sm',
        'md': 'h-10 w-10 text-base',
        'lg': 'h-12 w-12 text-lg',
        'xl': 'h-14 w-14 text-xl',
        '2xl': 'h-16 w-16 text-2xl',
        '3xl': 'h-20 w-20 text-3xl',
      },
      chip: {
        base: 'absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium',
        background: 'bg-{color}-500 dark:bg-{color}-400',
        position: {
          'top-right': 'top-0 right-0',
          'bottom-right': 'bottom-0 right-0',
          'top-left': 'top-0 left-0',
          'bottom-left': 'bottom-0 left-0',
        },
        size: {
          '3xs': 'h-[4px] min-w-[4px] text-[4px] p-px',
          '2xs': 'h-[5px] min-w-[5px] text-[5px] p-px',
          'xs': 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
          'sm': 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
          'md': 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
          'lg': 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
          'xl': 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
          '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
          '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1',
        },
      },
      icon: {
        base: 'text-gray-500 dark:text-gray-400 flex-shrink-0',
        size: {
          '3xs': 'h-2 w-2',
          '2xs': 'h-2.5 w-2.5',
          'xs': 'h-3 w-3',
          'sm': 'h-4 w-4',
          'md': 'h-5 w-5',
          'lg': 'h-6 w-6',
          'xl': 'h-7 w-7',
          '2xl': 'h-8 w-8',
          '3xl': 'h-10 w-10',
        },
      },
      default: {
        size: 'sm',
        icon: null,
        chipColor: null,
        chipPosition: 'top-right',
      },
    },

    variants: {
      default: {
        size: 'sm',
        icon: null,
        chipColor: null,
        chipPosition: 'top-right',
      },
    },
  },
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
