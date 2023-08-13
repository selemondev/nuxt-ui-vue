export default {
  UAlert: {
    base: {
      root: 'w-full relative overflow-hidden',
      title: 'text-sm font-medium',
      description: 'mt-1 text-sm leading-4 opacity-90',
      shadow: '',
      rounded: 'rounded-lg',
      padding: 'p-3',
      icon: {
        base: 'flex-shrink-0 w-5 h-5',
      },
      avatar: {
        base: 'flex-shrink-0 self-center',
        size: 'md',
      },
      color: {
        white: {
          solid: 'text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800',
        },
      },
      intent: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
        outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400',
        soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
        subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
      },
      default: {
        color: 'white',
        intent: 'solid',
        icon: null,
        closeButton: null,
        actionButton: {
          size: 'xs',
          color: 'green',
          variant: 'link',
        },
      },

    },
    variants: {
      default: {
        color: 'white',
        variant: 'solid',
        icon: null,
        closeButton: null,
        actionButton: {
          size: 'xs',
          color: 'green',
          variant: 'link',
        },
      },
      intent: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
        outline: 'text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400',
        soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
        subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
      },
    },
  },
  UAccordion: {
    base: {
      root: 'w-full flex flex-col',
      item: {
        base: '',
        size: 'text-sm',
        color: 'text-gray-500 dark:text-gray-400',
        padding: 'pt-1.5 pb-3',
        icon: 'ms-auto transform transition-transform duration-200',
      },
      transition: {
        enterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
        leaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
      },
      default: {
        openIcon: 'ic:baseline-keyboard-arrow-down',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        variant: 'soft',
      },

      variants: {
        default: {
          openIcon: 'ic:baseline-keyboard-arrow-down',
          closeIcon: '',
          class: 'mb-1.5 w-full',
          variant: 'soft',
        },

      },
    },
  },
  UAvatar: {
    base: {
      'root': 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
      'avatarRounded': 'rounded-full',
      'avatarPlaceholderClass': 'font-medium cursor-pointer text-gray-600 upperCase',
      'avatarIconColor': 'text-black',
      '3xs': 'h-4 w-4 text-[8px]',
      '2xs': 'h-5 w-5 text-[10px]',
      'xs': 'h-6 w-6 text-xs',
      'sm': 'h-8 w-8 text-sm',
      'md': 'h-10 w-10 text-base',
      'lg': 'h-12 w-12 text-lg',
      'xl': 'h-14 w-14 text-xl',
      '2xl': 'h-16 w-16 text-2xl',
      '3xl': 'h-20 w-20 text-3xl',
      'avatarChipClass': 'flex justify-center items-center absolute rounded-full !text-white cursor-pointer text-white dark:text-gray-900',
      'avatarChipPosition': {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0',
      },
      'avatarIconSize': {
        'xs': 'h-3 w-3',
        'sm': 'h-4 w-4',
        'md': 'h-6 w-6',
        'lg': 'h-7 w-7',
        'xl': 'h-8 w-8 ',
        '2xl': 'h-10 w-10',
        '3xl': 'h-12 w-12',
      },
      'avatarChipSize': {
        'xs': 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
        'sm': 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
        'md': 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
        'lg': 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
        'xl': 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
        '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
        '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1',
      },

    },

    variants: {
      default: {
        root: 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
        avatarRounded: 'rounded-full',
        avatarPlaceholderClass: 'font-medium cursor-pointer text-gray-600 upperCase',
        avatarIconColor: 'text-black',
      },
    },

  },
  UAvatarGroup: {
    base: {
      root: 'flex flex-row-reverse',
      avatarGroupMargin: '-mx-2.5',
    },

    variants: {
      root: 'flex flex-row-reverse',
      avatarGroupMargin: 'mx-6',
    },
  },

  UBadge: {
    base: {
      base: 'inline-flex items-center',
      rounded: 'rounded-md',
      font: 'font-medium',
      size: {
        xs: 'text-xs px-1.5 py-0.5',
        sm: 'text-xs px-2 py-1',
        md: 'text-sm px-2 py-1',
        lg: 'text-sm px-2.5 py-1.5',
      },
      color: {
        white: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900',
        },
        gray: {
          solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800',
        },
        black: {
          solid: 'text-white dark:text-gray-900 bg-gray-900 dark:bg-white',
        },
      },
      intent: {
        solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
        outline: 'border border-{color}-400 text-{color}-500 border border-{color}-500 dark:text-{color}-400',
        soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
        subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
      },
      default: {
        size: 'sm',
        intent: 'solid',
        color: 'green',
      },

      variants: {
        default: {
          size: 'sm',
          intent: 'solid',
          color: 'green',
        },
        color: {
          white: {
            solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900',
          },
          gray: {
            solid: 'ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800',
          },
          black: {
            solid: 'text-white dark:text-gray-900 bg-gray-900 dark:bg-white',
          },
        },
        intent: {
          solid: 'bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900',
          outline: 'border border-{color}-400 text-{color}-500 border border-{color}-500 dark:text-{color}-400',
          soft: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400',
          subtle: 'bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25',
        },
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
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:enabled:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:enabled:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
          ghost: 'text-gray-900 dark:text-white hover:enabled:bg-white dark:hover:enabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
        },
        gray: {
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:enabled:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:enabled:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
          ghost: 'text-gray-700 dark:text-gray-200 hover:enabled:text-gray-900 dark:hover:enabled:text-white hover:enabled:bg-gray-50 dark:hover:enabled:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
          link: 'text-gray-500 dark:text-gray-400 hover:enabled:text-gray-700 dark:hover:enabled:text-gray-200 underline-offset-4 hover:enabled:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
        },
        black: {
          solid: 'shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:enabled:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:enabled:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
          link: 'text-gray-900 dark:text-white underline-offset-4 hover:enabled:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
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
      intent: {
        solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:enabled:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:enabled:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
        outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:enabled:bg-{color}-50 disabled:bg-transparent dark:hover:enabled:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:enabled:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:enabled:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        ghost: 'text-{color}-500 dark:text-{color}-400 hover:enabled:bg-{color}-50 disabled:bg-transparent dark:hover:enabled:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        link: 'text-{color}-500 hover:enabled:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:enabled:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:enabled:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
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

  UCheckbox: {
    base: {
      root: 'relative flex items-start',
      base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      rounded: 'rounded',
      color: 'text-{color}-500 dark:text-{color}-400',
      background: 'bg-white dark:bg-gray-900',
      border: 'border border-gray-300 dark:border-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      label: 'font-medium text-gray-700 dark:text-gray-200',
      required: 'text-red-500 dark:text-red-400',
      help: 'text-gray-500 dark:text-gray-400',
      default: {
        color: 'green',
      },
    },

    variants: {
      default: {
        color: 'green',
      },
      color: 'text-{color}-500 dark:text-{color}-400',
      background: 'bg-white dark:bg-gray-900',
      border: 'border border-gray-300 dark:border-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      label: 'font-medium text-gray-700 dark:text-gray-200',
      required: 'text-red-500 dark:text-red-400',
      help: 'text-gray-500 dark:text-gray-400',
    },
  },
  UDropdown: {
    base: {
      root: 'relative inline-flex text-left rtl:text-right',
      container: 'z-20',
      width: 'w-48',
      height: '',
      background: 'bg-white dark:bg-gray-800',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
      base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      padding: 'p-1',
      item: {
        base: 'group flex items-center gap-2 w-full',
        rounded: 'rounded-md',
        padding: 'px-2 py-1.5',
        size: 'text-sm',
        active: 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white',
        inactive: 'text-gray-700 dark:text-gray-200',
        disabled: 'cursor-not-allowed opacity-50',
        icon: {
          base: 'flex-shrink-0 h-4 w-4',
          active: 'text-gray-500 dark:text-gray-400',
          inactive: 'text-gray-400 dark:text-gray-500',
        },
        avatar: {
          base: 'flex-shrink-0',
          size: 'xs',
        },
        shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
      },
      transition: {
        enterActiveClass: 'transition duration-100 ease-out',
        enterFromClass: 'transform scale-95 opacity-0',
        enterToClass: 'transform scale-100 opacity-100',
        leaveActiveClass: 'transition duration-75 ease-in',
        leaveFromClass: 'transform scale-100 opacity-100',
        leaveToClass: 'transform scale-95 opacity-0',
      },
      popper: {
        placement: 'bottom-end',
        strategy: 'fixed',
      },
    },

    variants: {
      default: {
        root: 'relative inline-flex text-left rtl:text-right',
        container: 'z-20',
        width: 'w-48',
        height: '',
        background: 'bg-white dark:bg-gray-800',
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
  UInput: {
    base: {
      root: 'relative',
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 border-none',
      rounded: 'rounded-md',
      placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
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
      leading: {
        padding: {
          '2xs': 'ps-7',
          'xs': 'ps-8',
          'sm': 'ps-9',
          'md': 'ps-10',
          'lg': 'ps-11',
          'xl': 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          'xs': 'pe-8',
          'sm': 'pe-9',
          'md': 'pe-10',
          'lg': 'pe-11',
          'xl': 'pe-12',
        },
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
      },
      intent: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset focus:border focus:border-{color}-500 focus:ring-{color}-500 ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'ps-2',
            'xs': 'ps-2.5',
            'sm': 'ps-2.5',
            'md': 'ps-3',
            'lg': 'ps-3.5',
            'xl': 'ps-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'pe-2',
            'xs': 'pe-2.5',
            'sm': 'pe-2.5',
            'md': 'pe-3',
            'lg': 'pe-3.5',
            'xl': 'pe-3.5',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        intent: 'outline',
        loadingIcon: 'heroicons:arrow-path-20-solid',
      },
    },

    variants: {
      default: {
        root: 'relative',
        base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 border-0 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        size: 'sm',
        color: 'white',
        intent: 'outline',
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
      },
      intent: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white focus:border ring-1 ring-inset ring-{color}-500 focus:border-{color}-500 focus:ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
    },
  },
  URadio: {
    base: {
      root: 'relative flex items-start',
      base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      color: 'text-{color}-500 dark:text-{color}-400',
      background: 'bg-white dark:bg-gray-900',
      border: 'border border-gray-300 dark:border-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      label: 'font-medium text-gray-700 dark:text-gray-200',
      required: 'text-red-500 dark:text-red-400',
      help: 'text-gray-500 dark:text-gray-400',
      default: {
        color: 'green',
      },
    },
    variants: {
      default: {
        color: 'green',
      },
      base: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      color: 'text-{color}-500 dark:text-{color}-400',
      background: 'bg-white dark:bg-gray-900',
      border: 'border border-gray-300 dark:border-gray-700',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      label: 'font-medium text-gray-700 dark:text-gray-200',
      required: 'text-red-500 dark:text-red-400',
      help: 'text-gray-500 dark:text-gray-400',
    },
  },

  UKbd: {
    base: {
      root: 'inline-flex items-center justify-center text-gray-900 dark:text-white',
      padding: 'px-1',
      size: {
        xs: 'h-4 min-w-[16px] text-[10px]',
        sm: 'h-5 min-w-[20px] text-[11px]',
        md: 'h-6 min-w-[24px] text-[12px]',
      },
      rounded: 'rounded',
      font: 'font-medium font-sans',
      background: 'bg-gray-100 dark:bg-gray-800',
      ring: 'ring-1 ring-gray-300 dark:ring-gray-700 ring-inset',
      default: {
        size: 'sm',
      },
    },

    variants: {
      default: {
        root: 'inline-flex items-center justify-center text-gray-900 dark:text-white',
        padding: 'px-1',
      },
      background: 'bg-gray-100 dark:bg-gray-800',
      ring: 'ring-1 ring-gray-300 dark:ring-gray-700 ring-inset',
    },
  },

  URange: {
    base: {
      root: 'relative w-full flex items-center',
      base: 'w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group',
      rounded: 'rounded-lg',
      background: 'bg-transparent',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      progress: {
        base: 'absolute pointer-events-none peer-disabled:bg-opacity-50',
        rounded: 'rounded-s-lg',
        background: 'bg-{color}-500 dark:bg-{color}-400',
        size: {
          sm: 'h-1',
          md: 'h-2',
          lg: 'h-3',
        },
      },
      thumb: {
        base: '[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0',
        color: 'text-{color}-500 dark:text-{color}-400',
        background: '[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:dark:bg-gray-900 [&::-moz-range-thumb]:bg-current',
        ring: '[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current',
        size: {
          sm: '[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
          md: '[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
          lg: '[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
        },
      },
      track: {
        base: '[&::-webkit-slider-runnable-track]:group-disabled:bg-opacity-50 [&::-moz-slider-runnable-track]:group-disabled:bg-opacity-50',
        background: '[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-moz-slider-runnable-track]:bg-gray-200 [&::-webkit-slider-runnable-track]:dark:bg-gray-700 [&::-moz-slider-runnable-track]:dark:bg-gray-700',
        rounded: '[&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-slider-runnable-track]:rounded-lg',
        size: {
          sm: '[&::-webkit-slider-runnable-track]:h-1 [&::-moz-slider-runnable-track]:h-1',
          md: '[&::-webkit-slider-runnable-track]:h-2 [&::-moz-slider-runnable-track]:h-2',
          lg: '[&::-webkit-slider-runnable-track]:h-3 [&::-moz-slider-runnable-track]:h-3',
        },
      },
      size: {
        sm: 'h-3',
        md: 'h-4',
        lg: 'h-5',
      },
      default: {
        size: 'md',
        color: 'green',
      },
    },
    variants: {
      default: {
        size: 'md',
        color: 'green',
      },
      background: 'bg-transparent',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
    },
  },

  UTextarea: {
    base: {
      root: 'relative',
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      rounded: 'rounded-md',
      placeholder: 'placeholder-gray-400 dark:placeholder-gray-500',
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
      leading: {
        padding: {
          '2xs': 'ps-7',
          'xs': 'ps-8',
          'sm': 'ps-9',
          'md': 'ps-10',
          'lg': 'ps-11',
          'xl': 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          'xs': 'pe-8',
          'sm': 'pe-9',
          'md': 'pe-10',
          'lg': 'pe-11',
          'xl': 'pe-12',
        },
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
      },
      intent: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'ps-2',
            'xs': 'ps-2.5',
            'sm': 'ps-2.5',
            'md': 'ps-3',
            'lg': 'ps-3.5',
            'xl': 'ps-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'pe-2',
            'xs': 'pe-2.5',
            'sm': 'pe-2.5',
            'md': 'pe-3',
            'lg': 'pe-3.5',
            'xl': 'pe-3.5',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        intent: 'outline',
      },
    },

    variants: {
      default: {
        size: 'sm',
        color: 'white',
        intent: 'outline',
      },
    },
  },
  USelect: {
    base: {
      root: 'relative',
      base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
      rounded: 'rounded-md',
      placeholder: 'text-gray-900 dark:text-white',
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
      leading: {
        padding: {
          '2xs': 'ps-7',
          'xs': 'ps-8',
          'sm': 'ps-9',
          'md': 'ps-10',
          'lg': 'ps-11',
          'xl': 'ps-12',
        },
      },
      trailing: {
        padding: {
          '2xs': 'pe-7',
          'xs': 'pe-8',
          'sm': 'pe-9',
          'md': 'pe-10',
          'lg': 'pe-11',
          'xl': 'pe-12',
        },
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
      },
      intent: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
      icon: {
        base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
        color: 'text-{color}-500 dark:text-{color}-400',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
        leading: {
          wrapper: 'absolute inset-y-0 start-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'ps-2',
            'xs': 'ps-2.5',
            'sm': 'ps-2.5',
            'md': 'ps-3',
            'lg': 'ps-3.5',
            'xl': 'ps-3.5',
          },
        },
        trailing: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          pointer: 'pointer-events-none',
          padding: {
            '2xs': 'pe-2',
            'xs': 'pe-2.5',
            'sm': 'pe-2.5',
            'md': 'pe-3',
            'lg': 'pe-3.5',
            'xl': 'pe-3.5',
          },
        },
      },
      default: {
        size: 'sm',
        color: 'white',
        intent: 'outline',
        loadingIcon: 'heroicons:arrow-path-20-solid',
        trailingIcon: 'heroicons:chevron-down-20-solid',
      },
    },

    variants: {
      default: {
        size: 'sm',
        color: 'white',
        intent: 'outline',
        loadingIcon: 'heroicons:arrow-path-20-solid',
        trailingIcon: 'heroicons:chevron-down-20-solid',
      },
      color: {
        white: {
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
        },
      },
      intent: {
        outline: 'shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400',
        none: 'bg-transparent focus:ring-0 focus:shadow-none',
      },
    },
  },
  USelectMenu: {
    base: {
      container: 'z-20',
      width: 'w-full',
      height: 'max-h-60',
      base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
      background: 'bg-white dark:bg-gray-800',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      padding: 'p-1',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
      input: 'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
      option: {
        base: 'cursor-default select-none relative flex items-center justify-between gap-1',
        rounded: 'rounded-md',
        padding: 'px-2 py-1.5',
        size: 'text-sm',
        color: 'text-gray-900 dark:text-white',
        container: 'flex items-center gap-2 min-w-0',
        active: 'bg-gray-100 dark:bg-gray-900',
        inactive: '',
        selected: 'pe-7',
        disabled: 'cursor-not-allowed opacity-50',
        empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
        icon: {
          base: 'flex-shrink-0 h-4 w-4',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-400 dark:text-gray-500',
        },
        selectedIcon: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          padding: 'pe-2',
          base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
        },
        avatar: {
          base: 'flex-shrink-0',
          size: '3xs',
        },
        chip: {
          base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
        },
      },
      transition: {
        leaveActiveClass: 'transition ease-in duration-100',
        leaveFromClass: 'opacity-100',
        leaveToClass: 'opacity-0',
      },
      popper: {
        placement: 'bottom-end',
      },
      default: {
        selectedIcon: 'heroicons:check-20-solid',
      },
    },

    variants: {
      default: {
        selectedIcon: 'heroicons:check-20-solid',
      },
      option: {
        base: 'cursor-default select-none relative flex items-center justify-between gap-1',
        rounded: 'rounded-md',
        padding: 'px-2 py-1.5',
        size: 'text-sm',
        color: 'text-gray-900 dark:text-white',
        container: 'flex items-center gap-2 min-w-0',
        active: 'bg-gray-100 dark:bg-gray-900',
        inactive: '',
        selected: 'pe-7',
        disabled: 'cursor-not-allowed opacity-50',
        empty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
        icon: {
          base: 'flex-shrink-0 h-4 w-4',
          active: 'text-gray-900 dark:text-white',
          inactive: 'text-gray-400 dark:text-gray-500',
        },
        selectedIcon: {
          wrapper: 'absolute inset-y-0 end-0 flex items-center',
          padding: 'pe-2',
          base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
        },
        avatar: {
          base: 'flex-shrink-0',
          size: '3xs',
        },
        chip: {
          base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
        },
      },
    },
  },

  UToggle: {
    base: {
      root: 'relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
      rounded: 'rounded-full',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      active: 'bg-{color}-500 dark:bg-{color}-400',
      inactive: 'bg-gray-200 dark:bg-gray-700',
      container: {
        base: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
        active: 'translate-x-4 rtl:-translate-x-4',
        inactive: 'translate-x-0 rtl:-translate-x-0',
      },
      icon: {
        base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        active: 'opacity-100 ease-in duration-200',
        inactive: 'opacity-0 ease-out duration-100',
        on: 'h-3 w-3 text-{color}-500 dark:text-{color}-400',
        off: 'h-3 w-3 text-gray-400 dark:text-gray-500',
      },
      default: {
        onIcon: null,
        offIcon: null,
        color: 'green',
      },
    },

    variants: {
      default: {
        onIcon: null,
        offIcon: null,
        color: 'green',
      },
      icon: {
        base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        active: 'opacity-100 ease-in duration-200',
        inactive: 'opacity-0 ease-out duration-100',
        on: 'h-3 w-3 text-{color}-500 dark:text-{color}-400',
        off: 'h-3 w-3 text-gray-400 dark:text-gray-500',
      },
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      active: 'bg-{color}-500 dark:bg-{color}-400',
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
