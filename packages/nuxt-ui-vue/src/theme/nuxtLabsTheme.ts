export default {
  UAlert: {
    base: {
      root: 'w-full relative overflow-hidden',
      title: 'text-sm font-medium',
      description: 'mt-1 text-sm leading-4 opacity-90',
      shadow: '',
      rounded: 'rounded-lg',
      padding: 'p-3',
      iconBase: 'flex-shrink-0 w-5 h-5',
      avatarBase: 'flex-shrink-0 self-center',
      avatarSize: 'md',
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
        root: 'w-full relative overflow-hidden',
      },
    },
  },
  UAccordion: {
    base: {
      root: 'w-full flex flex-col',
      itemBase: '',
      itemSize: 'text-sm',
      itemColor: 'text-gray-500 dark:text-gray-400',
      itemPadding: 'pt-1.5 pb-3',
      itemIcon: 'ms-auto transform transition-transform duration-200',
      transitionEnterActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
      transitionLeaveActiveClass: 'overflow-hidden transition-[height] duration-200 ease-out',
      default: {
        openIcon: 'heroicons:chevron-down-20-solid',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        intent: 'soft',
      },
    },

    variants: {
      default: {
        openIcon: 'heroicons:chevron-down-20-solid',
        closeIcon: '',
        class: 'mb-1.5 w-full',
        intent: 'soft',
      },
    },
  },
  UAvatar: {
    base: {
      'root': 'relative cursor-pointer inline-flex items-center justify-center bg-gray-100 rounded-full',
      'avatarRounded': 'rounded-full',
      'avatarBackground': 'bg-gray-100 dark:bg-gray-800',
      'avatarText': 'font-medium leading-none text-gray-900 dark:text-white truncate',
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
      root: 'flex flex-row-reverse justify-end',
      avatarGroupMargin: '-mx-2',
    },

    variants: {
      root: 'flex flex-row-reverse justify-end',
      avatarGroupMargin: '-mx-2',
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
      root: 'focus:outline-none block font-medium focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 transition-all duration-200 ease-in',
      font: 'font-medium',
      rounded: 'rounded-md',
      block: 'w-full flex justify-center items-center',
      normal: 'inline-flex items-center',
      buttonLoading: '!bg-opacity-50 opacity-50 pointer-events-none !cursor-not-allowed !hover:bg-opacity-50 inline-flex items-center',
      buttonDisabled: '!shadow-none !cursor-not-allowed pointer-events-none !bg-opacity-50 opacity-50',
      truncate: 'text-left break-all line-clamp-1',
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
          solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 !text-gray-900 dark:text-white bg-white hover:enabled:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:enabled:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
          ghost: '!text-gray-900 dark:text-white hover:enabled:bg-white dark:hover:enabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
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
          '2xl': 'h-8 w-8',
        },
      },
      default: {
        size: 'sm',
        intent: 'solid',
        color: 'green',
        loadingIcon: 'heroicons:arrow-path-20-solid',
      },
    },

    variants: {
      default: {
        intent: {
          solid: 'shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400',
          outline: 'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          ghost: 'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
          link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400',
        },
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
  UCard: {
    base: {
      root: 'overflow-hidden',
      background: 'bg-white dark:bg-gray-900',
      divide: 'divide-y divide-gray-200 dark:divide-gray-800',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      rounded: 'rounded-lg',
      shadow: 'shadow',
      bodyBase: '',
      bodyBackground: '',
      bodyPadding: 'px-4 py-5 sm:p-6',
      headerBase: '',
      headerBackground: '',
      headerPadding: 'px-4 py-5 sm:px-6',
      footerBase: '',
      footerBackground: '',
      footerPadding: 'px-4 py-4 sm:px-6',
    },

    variants: {
      default: {
        root: 'overflow-hidden',
      },
    },
  },
  UCommandPalette: {
    base: {
      root: 'flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800',
      container: 'relative flex-1 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800 scroll-py-2',
      inputWrapper: 'relative flex items-center',
      inputBase: 'w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none',
      inputPadding: 'px-4',
      inputHeight: 'h-12',
      inputSize: 'sm:text-sm',
      inputIconBase: 'pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500',
      inputIconSize: 'h-4 w-4',
      inputIconPadding: 'ps-10',
      inputCloseButton: 'absolute end-4',
      emptyStateWrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      emptyStateLabel: 'text-sm text-center text-gray-900 dark:text-white',
      emptyStateQueryLabel: 'text-sm text-center text-gray-900 dark:text-white',
      emptyStateIcon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',
      groupWrapper: 'p-2',
      groupLabel: 'px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white',
      groupContainer: 'text-sm text-gray-700 dark:text-gray-200',
      groupCommandBase: 'flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative',
      groupCommandActive: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
      groupCommandInactive: '',
      groupCommandLabel: 'flex items-center gap-1.5 min-w-0',
      groupCommandPrefix: 'text-gray-400 dark:text-gray-500',
      groupCommandSuffix: 'text-gray-400 dark:text-gray-500',
      groupCommandContainer: 'flex items-center gap-2 min-w-0',
      groupCommandIconBase: 'flex-shrink-0 w-4 h-4',
      groupCommandIconActive: 'text-gray-900 dark:text-white',
      groupCommandIconInactive: 'text-gray-400 dark:text-gray-500',
      groupCommandSelectedIconBase: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
      groupCommandAvatarBase: 'flex-shrink-0',
      groupCommandAvatarSize: '3xs',
      groupCommandChipBase: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
      groupCommandDisabled: 'opacity-50',
      groupCommandShortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
      groupActive: 'flex-shrink-0 text-gray-500 dark:text-gray-400',
      groupInactive: 'flex-shrink-0 text-gray-500 dark:text-gray-400',
      default: {
        icon: 'heroicons:magnifying-glass-20-solid',
        loadingIcon: 'heroicons:arrow-path-20-solid',
        emptyState: {
          icon: 'heroicons:magnifying-glass-20-solid',
          label: 'We couldn\'t find any items.',
          queryLabel: 'We couldn\'t find any items with that term. Please try again.',
        },
        closeButton: null,
        selectedIcon: 'heroicons:check-20-solid',
      },
    },
    variants: {
      defaults: {
        root: 'flex flex-col flex-1 min-h-0 divide-y divide-gray-100 dark:divide-gray-800',
        default: {
          icon: 'heroicons:magnifying-glass-20-solid',
          loadingIcon: 'heroicons:arrow-path-20-solid',
          emptyState: {
            icon: 'heroicons:magnifying-glass-20-solid',
            label: 'We couldn\'t find any items.',
            queryLabel: 'We couldn\'t find any items with that term. Please try again.',
          },
          closeButton: null,
          selectedIcon: 'heroicons:check-20-solid',
        },
      },
    },
  },

  UContainer: {
    base: {
      root: 'mx-auto',
      padding: 'px-4 sm:px-6 lg:px-8',
      constrained: 'max-w-7xl',
    },

    variants: {
      default: {
        root: 'mx-auto',
      },
    },
  },

  UContextMenu: {
    base: {
      root: 'relative',
      container: 'z-20',
      width: '',
      background: 'bg-white dark:bg-gray-900',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      contextMenuBase: 'overflow-hidden focus:outline-none',
      enterActiveClass: 'transition ease-out duration-200',
      enterFromClass: 'opacity-0 translate-y-1',
      enterToClass: 'opacity-100 translate-y-0',
      leaveActiveClass: 'transition ease-in duration-150',
      leaveFromClass: 'opacity-100 translate-y-0',
      leaveToClass: 'opacity-0 translate-y-1',
      popper: {
        placement: 'bottom-start',
        scroll: false,
      },
    },

    variants: {
      default: {
        root: 'relative',
        container: 'z-20',
        background: 'bg-white dark:bg-gray-900',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      },
    },
  },
  UCheckbox: {
    base: {
      root: 'relative flex items-start',
      checkboxBase: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
      rounded: 'rounded',
      checkBoxSpace: 'ms-3 text-sm',
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
        color: 'text-{color}-500 dark:text-{color}-400',
        background: 'bg-white dark:bg-gray-900',
        border: 'border border-gray-300 dark:border-gray-700',
        ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        label: 'font-medium text-gray-700 dark:text-gray-200',
        required: 'text-red-500 dark:text-red-400',
        help: 'text-gray-500 dark:text-gray-400',
      },
    },
  },
  UFormGroup: {
    base: {
      root: '',
      labelWrapper: 'flex content-center items-center justify-between',
      labelBase: 'block font-medium text-gray-700 dark:text-gray-200',
      labelRequired: 'after:content-[\'*\'] after:ms-0.5 after:text-red-500 dark:after:text-red-400',
      size: {
        '2xs': 'text-xs',
        'xs': 'text-xs',
        'sm': 'text-sm',
        'md': 'text-sm',
        'lg': 'text-sm',
        'xl': 'text-base',
      },
      container: 'mt-1 relative',
      description: 'text-gray-500 dark:text-gray-400',
      hint: 'text-gray-500 dark:text-gray-400',
      help: 'mt-2 text-gray-500 dark:text-gray-400',
      error: 'mt-2 text-red-500 dark:text-red-400',
    },

    variants: {
      default: {
        root: '',
        labelWrapper: 'flex content-center items-center justify-between',
        labelBase: 'block font-medium text-gray-700 dark:text-gray-200',
        labelRequired: 'after:content-[\'*\'] after:ms-0.5 after:text-red-500 dark:after:text-red-400',
        description: 'text-gray-500 dark:text-gray-400',
        hint: 'text-gray-500 dark:text-gray-400',
        help: 'mt-2 text-gray-500 dark:text-gray-400',
        error: 'mt-2 text-red-500 dark:text-red-400',
      },
    },
  },
  UDropdown: {
    base: {
      root: 'relative inline-flex text-left rtl:text-right',
      container: 'z-20',
      width: 'w-48',
      height: '',
      inline: 'inline-flex w-full',
      background: 'bg-white dark:bg-gray-800',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
      dropdownBase: 'relative focus:outline-none overflow-y-auto scroll-py-1',
      divide: 'divide-y divide-gray-200 dark:divide-gray-700',
      padding: 'p-1',
      itemBase: 'group flex items-center gap-2 w-full',
      itemRounded: 'rounded-md',
      itemPadding: 'px-2 py-1.5',
      itemSize: 'text-sm',
      itemActive: 'bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white',
      itemInActive: 'text-gray-700 dark:text-gray-200',
      itemDisabled: 'cursor-not-allowed opacity-50',
      itemIconBase: 'flex-shrink-0 h-4 w-4',
      itemIconActive: 'text-gray-500 dark:text-gray-400',
      itemIconInActive: 'text-gray-400 dark:text-gray-500',
      itemAvatarBase: 'flex-shrink-0',
      itemAvatarSize: 'xs',
      itemShortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
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
      inputBase: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 border-none',
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
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800',
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
          pointer: 'cursor-pointer',
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
          outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800',
        },
        gray: {
          outline: 'shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-800',
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
      radioBase: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
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
        radioBase: 'h-4 w-4 dark:checked:bg-current dark:checked:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
        color: 'text-{color}-500 dark:text-{color}-400',
        background: 'bg-white dark:bg-gray-900',
        border: 'border border-gray-300 dark:border-gray-700',
        ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        label: 'font-medium text-gray-700 dark:text-gray-200',
        required: 'text-red-500 dark:text-red-400',
        help: 'text-gray-500 dark:text-gray-400',
      },
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
        background: 'bg-gray-100 dark:bg-gray-800',
        ring: 'ring-1 ring-gray-300 dark:ring-gray-700 ring-inset',
      },
    },
  },

  UModal: {
    base: {
      root: 'relative z-50',
      inner: 'fixed inset-0 overflow-y-auto',
      container: 'flex min-h-full items-end sm:items-center justify-center text-center',
      padding: 'p-4 sm:p-0',
      margin: 'sm:my-8',
      widthScreen: 'w-screen',
      heightScreen: 'h-screen',
      roundedNone: 'rounded-none',
      marginNone: 'm-0',
      modalBase: 'relative text-left rtl:text-right overflow-hidden w-full flex flex-col',
      overlayBase: 'fixed inset-0 transition-opacity',
      overlayBackground: 'bg-gray-200/75 dark:bg-gray-800/75',
      overlayEnterTransition: 'ease-out duration-300',
      overlayEnterFrom: 'opacity-0',
      overlayEnterTo: 'opacity-100',
      overlayLeaveTransition: 'ease-in duration-200',
      overlayLeaveFrom: 'opacity-100',
      overlayLeaveTo: 'opacity-0',
      background: 'bg-white dark:bg-gray-900',
      ring: '',
      rounded: 'rounded-lg',
      shadow: 'shadow-xl',
      width: 'sm:max-w-lg',
      height: 'h-96',
      transitionEnter: 'ease-out duration-300',
      transitionEnterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
      transitionEnterTo: 'opacity-100 translate-y-0 sm:scale-100',
      transitionLeave: 'ease-in duration-200',
      transitionLeaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
      transitionLeaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    },

    variants: {
      default: {
        root: 'relative z-50',
        inner: 'fixed inset-0 overflow-y-auto',
        overlayBackground: 'bg-gray-200/75 dark:bg-gray-800/75',
        background: 'bg-white dark:bg-gray-900',
      },
    },
  },

  UNotification: {
    base: {
      root: 'w-full pointer-events-auto',
      container: 'relative overflow-hidden',
      flexGap: 'flex gap-3',
      flexTitle: 'w-0 flex-1',
      notificationButtonDescription: 'mt-3 flex items-center gap-2',
      flexDescription: 'flex-shrink-0 flex items-center gap-3',
      flexDescriptionLength: 'flex items-center gap-2',
      title: 'text-sm font-medium text-gray-900 dark:text-white',
      description: 'mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400',
      background: 'bg-white dark:bg-gray-900',
      shadow: 'shadow-lg',
      rounded: 'rounded-lg',
      padding: 'p-4',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      iconBase: 'flex-shrink-0 w-5 h-5',
      iconColor: 'text-{color}-500 dark:text-{color}-400',
      avatarBase: 'flex-shrink-0 self-center',
      avatarSize: 'md',
      progressBase: 'absolute bottom-0 end-0 start-0 h-1',
      progressBackground: 'bg-{color}-500 dark:bg-{color}-400',
      transitionEnterActiveClass: 'transform ease-out duration-300 transition',
      transitionEnterFromClass: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
      transitionEnterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
      transitionLeaveActiveClass: 'transition ease-in duration-100',
      transitionLeaveFromClass: 'opacity-100',
      transitionLeaveToClass: 'opacity-0',
      default: {
        color: 'green',
        icon: null,
        closeButton: {
          icon: 'heroicons:x-mark-20-solid',
          color: 'gray',
          intent: 'link',
          padded: false,
        },
        actionButton: {
          size: 'xs',
          color: 'white',
        },
      },
    },

    variants: {
      default: {
        root: 'w-full pointer-events-auto',
        title: 'text-sm font-medium text-gray-900 dark:text-white',
        description: 'mt-1 text-sm leading-4 text-gray-500 dark:text-gray-400',
        background: 'bg-white dark:bg-gray-900',
        progressBackground: 'bg-{color}-500 dark:bg-{color}-400',
      },
    },
  },

  UNotifications: {
    base: {
      root: 'fixed flex flex-col justify-end z-[55]',
      position: {
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'top-left': 'top-0 left-0',
        'bottom-left': 'bottom-0 left-0',
      },
      width: 'w-full sm:w-96',
      container: 'px-4 sm:px-6 py-6 space-y-3 overflow-y-auto',
    },

    variants: {
      default: {
        position: {
          'top-right': 'top-0 right-0',
          'bottom-right': 'bottom-0 right-0',
          'top-left': 'top-0 left-0',
          'bottom-left': 'bottom-0 left-0',
        },
      },
    },
  },

  UPagination: {
    base: {
      root: 'flex items-center -space-x-px',
      paginationBase: '',
      rounded: 'first:rounded-s-md last:rounded-e-md',
      default: {
        size: 'sm',
        activeButton: {
          color: 'green',
        },
        inactiveButton: {
          color: 'white',
        },
        prevButton: {
          color: 'white',
          class: 'rtl:[&_span:first-child]:rotate-180',
          icon: 'heroicons:chevron-left-20-solid',
        },
        nextButton: {
          color: 'white',
          class: 'rtl:[&_span:last-child]:rotate-180',
          icon: 'heroicons:chevron-right-20-solid',
        },
      },
    },

    variants: {
      default: {
        root: 'flex items-center -space-x-px',
        paginationBase: '',
        rounded: 'first:rounded-s-md last:rounded-e-md',
      },
    },
  },

  UPopover: {
    base: {
      root: 'relative',
      container: 'z-20',
      popover: 'inline-flex w-full',
      width: '',
      background: 'bg-white dark:bg-gray-900',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      base: 'overflow-hidden focus:outline-none',
      transitionEnterActiveClass: 'transition ease-out duration-200',
      transitionEnterFromClass: 'opacity-0 translate-y-1',
      transitionEnterToClass: 'opacity-100 translate-y-0',
      transitionLeaveActiveClass: 'transition ease-in duration-150',
      transitionLeaveFromClass: 'opacity-100 translate-y-0',
      transitionLeaveToClass: 'opacity-0 translate-y-1',
      popper: {
        strategy: 'fixed',
      },
    },

    variants: {
      default: {
        root: 'relative',
        container: 'z-20',
      },
      background: 'bg-white dark:bg-gray-900',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
    },
  },

  URange: {
    base: {
      root: 'relative w-full flex items-center',
      rangeBase: 'w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group',
      rounded: 'rounded-lg',
      background: 'bg-transparent',
      ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      progressBase: 'absolute pointer-events-none peer-disabled:bg-opacity-50',
      progressRounded: 'rounded-s-lg',
      progressBackground: 'bg-{color}-500 dark:bg-{color}-400',
      progress: {
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
        background: 'bg-transparent',
        ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
      },
    },
  },

  USkeleton: {
    base: {
      root: 'animate-pulse',
      background: 'bg-gray-100 dark:bg-gray-800',
      rounded: 'rounded-md',
    },
    variants: {
      default: {
        root: 'animate-pulse',
        background: 'bg-gray-100 dark:bg-gray-800',
      },
    },
  },

  UTable: {
    base: {
      root: 'relative',
      base: 'min-w-full table-fixed',
      divide: 'divide-y divide-gray-300 dark:divide-gray-700',
      thead: '',
      tbody: 'divide-y divide-gray-200 dark:divide-gray-800',
      trBase: '',
      trSelected: 'bg-gray-50 dark:bg-gray-800/50',
      trActive: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer',
      thBase: 'text-left rtl:text-right',
      thPadding: 'px-3 py-3.5',
      thColor: 'text-gray-900 dark:text-white',
      thFont: 'font-semibold',
      thSize: 'text-sm',
      tdBase: 'whitespace-nowrap',
      tdPadding: 'px-3 py-4',
      tdColor: 'text-gray-500 dark:text-gray-400',
      tdFont: '',
      tdSize: 'text-sm',
      loadingStateWrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      loadingStateLabel: 'text-sm text-center text-gray-900 dark:text-white',
      loadingStateIcon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin',
      emptyStateWrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      emptyStateLabel: 'text-sm text-center text-gray-900 dark:text-white',
      emptyStateIcon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',
      default: {
        sortAscIcon: 'heroicons:bars-arrow-up-20-solid',
        sortDescIcon: 'heroicons:bars-arrow-down-20-solid',
        sortButton: {
          icon: 'heroicons:arrows-up-down-20-solid',
          trailing: true,
          square: true,
          color: 'gray',
          intent: 'ghost',
          class: '-m-1.5',
        },
        loadingState: {
          icon: 'heroicons:arrow-path-20-solid',
          label: 'Loading...',
        },
        emptyState: {
          icon: 'heroicons:circle-stack-20-solid',
          label: 'No items.',
        },
      },
    },

    variants: {
      default: {
        sortAscIcon: 'heroicons:bars-arrow-up-20-solid',
        sortDescIcon: 'heroicons:bars-arrow-down-20-solid',
        sortButton: {
          icon: 'heroicons:arrows-up-down-20-solid',
          trailing: true,
          square: true,
          color: 'gray',
          intent: 'ghost',
          class: '-m-1.5',
        },
        loadingState: {
          icon: 'heroicons:arrow-path-20-solid',
          label: 'Loading...',
        },
        emptyState: {
          icon: 'heroicons:circle-stack-20-solid',
          label: 'No items.',
        },
      },

      divide: 'divide-y divide-gray-300 dark:divide-gray-700',
      thead: '',
      tbody: 'divide-y divide-gray-200 dark:divide-gray-800',
      trBase: '',
      trSelected: 'bg-gray-50 dark:bg-gray-800/50',
      trActive: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer',
      thBase: 'text-left rtl:text-right',
      thPadding: 'px-3 py-3.5',
      thColor: 'text-gray-900 dark:text-white',
      thFont: 'font-semibold',
      thSize: 'text-sm',
      tdBase: 'whitespace-nowrap',
      tdPadding: 'px-3 py-4',
      tdColor: 'text-gray-500 dark:text-gray-400',
      tdFont: '',
      tdSize: 'text-sm',
      loadingStateWrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      loadingStateLabel: 'text-sm text-center text-gray-900 dark:text-white',
      loadingStateIcon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin',
      emptyStateWrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
      emptyStateLabel: 'text-sm text-center text-gray-900 dark:text-white',
      emptyStateIcon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',

    },
  },

  UTabs: {
    base: {
      root: 'relative space-y-2',
      container: 'relative w-full',
      tabsBase: 'focus:outline-none',
      tabGrid: 'grid-template-columns: repeat({items}, minmax(0, 1fr))',
      horizontalGrid: 'inline-grid items-center',
      listBase: 'relative',
      listBackground: 'bg-gray-100 dark:bg-gray-800',
      listRounded: 'rounded-lg',
      listShadow: '',
      listPadding: 'p-1',
      listHeight: 'h-10',
      listWidth: 'w-full',
      listMarkerWrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      listMarkerBase: 'w-full h-full',
      listMarkerBackground: 'bg-white dark:bg-gray-900',
      listMarkerRounded: 'rounded-md',
      listMarkerShadow: 'shadow-sm',
      listTabBase: 'relative inline-flex items-center justify-center flex-shrink-0 w-full whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      listTabBackground: '',
      listTabActive: 'text-gray-900 dark:text-white',
      listTabInactive: 'text-gray-500 dark:text-gray-400',
      listTabHeight: 'h-8',
      listTabPadding: 'px-3',
      listTabSize: 'text-sm',
      listTabFont: 'font-medium',
      listTabRounded: 'rounded-md',
      listTabShadow: '',
    },

    variants: {
      default: {
        root: 'relative space-y-2',
        container: 'relative w-full',
        listTabActive: 'text-gray-900 dark:text-white',
        listTabInactive: 'text-gray-500 dark:text-gray-400',
      },
    },

  },

  UTextarea: {
    base: {
      root: 'relative',
      textAreaBase: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
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
      iconBase: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      icon: {
        color: 'text-{color}-500 dark:text-{color}-400',
        size: {
          '2xs': 'h-4 w-4',
          'xs': 'h-4 w-4',
          'sm': 'h-5 w-5',
          'md': 'h-5 w-5',
          'lg': 'h-5 w-5',
          'xl': 'h-6 w-6',
        },
        leadingWrapper: 'absolute inset-y-0 start-0 flex items-center',
        leadingPointer: 'pointer-events-none',
        leading: {
          padding: {
            '2xs': 'ps-2',
            'xs': 'ps-2.5',
            'sm': 'ps-2.5',
            'md': 'ps-3',
            'lg': 'ps-3.5',
            'xl': 'ps-3.5',
          },
        },
        trailingWrapper: 'absolute inset-y-0 end-0 flex items-center',
        trailingPointer: 'pointer-events-none',
        trailing: {
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

  UTooltip: {
    base: {
      root: 'relative inline-flex',
      container: 'z-20',
      width: 'max-w-xs',
      toolTip: 'mx-1 text-gray-700 dark:text-gray-200',
      background: 'bg-white dark:bg-gray-900',
      color: 'text-gray-900 dark:text-white',
      shadow: 'shadow',
      rounded: 'rounded',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      toolTipBase: '[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate',
      shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
      transitionEnterActiveClass: 'transition ease-out duration-200',
      transitionEnterFromClass: 'opacity-0 translate-y-1',
      transitionEnterToClass: 'opacity-100 translate-y-0',
      transitionLeaveActiveClass: 'transition ease-in duration-150',
      transitionLeaveFromClass: 'opacity-100 translate-y-0',
      transitionLeaveToClass: 'opacity-0 translate-y-1',
      popper: {
        strategy: 'fixed',
      },
    },

    variants: {
      default: {
        root: 'relative inline-flex',
        container: 'z-20',
        background: 'bg-white dark:bg-gray-900',
        color: 'text-gray-900 dark:text-white',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
      },
    },
  },
  USelect: {
    base: {
      root: 'relative',
      selectBase: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
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
      iconBase: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      icon: {
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
        iconBase: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
      },
    },
  },
  USelectMenu: {
    base: {
      root: 'relative',
      container: 'z-20',
      width: 'w-full',
      selectInput: 'absolute inset-0 w-px opacity-0 cursor-default',
      component: 'inline-flex w-full',
      selectMenuCursor: 'text-left cursor-default',
      selectMenuFlex: 'inline-flex items-center',
      truncate: 'truncate',
      blockTruncate: 'block truncate',
      height: 'max-h-60',
      selectMenuBase: 'relative focus:outline-none overflow-y-auto scroll-py-1',
      background: 'bg-white dark:bg-gray-800',
      shadow: 'shadow-lg',
      rounded: 'rounded-md',
      padding: 'p-1',
      ring: 'ring-1 ring-gray-200 dark:ring-gray-700',
      input: 'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-0 border-b border-gray-200 dark:border-gray-700 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none',
      optionBase: 'cursor-pointer select-none relative flex items-center justify-between gap-1',
      optionRounded: 'rounded-md',
      optionPadding: 'px-2 py-1.5',
      optionSize: 'text-sm',
      optionColor: 'text-gray-900 dark:text-white',
      optionContainer: 'flex items-center gap-2 min-w-0',
      optionActive: 'bg-gray-100 dark:bg-gray-900',
      optionInactive: '',
      optionSelected: 'pe-7',
      optionDisabled: 'cursor-not-allowed opacity-50',
      optionEmpty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
      optionIconBase: 'flex-shrink-0 h-4 w-4',
      optionIconActive: 'text-gray-900 dark:text-white',
      optionIconInactive: 'text-gray-400 dark:text-gray-500',
      optionSelectedIconWrapper: 'absolute inset-y-0 end-0 flex items-center',
      optionSelectedIconPadding: 'pe-2',
      optionSelectedIconBase: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
      optionAvatarBase: 'flex-shrink-0',
      optionAvatarSize: '3xs',
      optionChipBase: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
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
        optionColor: 'text-gray-900 dark:text-white',
        optionActive: 'bg-gray-100 dark:bg-gray-900',
        optionDisabled: 'cursor-not-allowed opacity-50',
        optionEmpty: 'text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5',
        optionIconActive: 'text-gray-900 dark:text-white',
        optionIconInactive: 'text-gray-400 dark:text-gray-500',
        optionSelectedIconBase: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
      },

    },
  },

  USlideover: {
    base: {
      root: 'fixed inset-0 flex z-50',
      overlayBase: 'fixed inset-0 transition-opacity',
      overlayBackground: 'bg-gray-200/75 dark:bg-gray-800/75',
      overlayEnterTransition: 'ease-in-out duration-500',
      overlayEnterFrom: 'opacity-0',
      overlayEnterTo: 'opacity-100',
      justifyEnd: 'justify-end',
      overlayLeaveTransition: 'ease-in-out duration-500',
      overlayLeaveFrom: 'opacity-100',
      enterFromLeft: '-translate-x-full',
      enterFromRight: 'translate-x-full',
      enterToAndFrom: 'translate-x-0',
      overlayLeaveTo: 'opacity-0',
      slideOverBase: 'relative flex-1 flex flex-col w-full focus:outline-none',
      background: 'bg-white dark:bg-gray-900',
      ring: '',
      rounded: '',
      padding: '',
      shadow: 'shadow-xl',
      width: 'w-screen max-w-md',
      transitionEnter: 'transform transition ease-in-out duration-300',
      transitionLeave: 'transform transition ease-in-out duration-200',
    },

    variants: {
      default: {
        root: 'fixed inset-0 flex z-50',
        overlayBase: 'fixed inset-0 transition-opacity',
        overlayBackground: 'bg-gray-200/75 dark:bg-gray-800/75',
        background: 'bg-white dark:bg-gray-900',
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
      containerBase: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white dark:bg-gray-900 shadow transform ring-0 transition ease-in-out duration-200',
      containerActive: 'translate-x-4 rtl:-translate-x-4',
      containerInactive: 'translate-x-0 rtl:-translate-x-0',
      iconBase: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
      iconActive: 'opacity-100 ease-in duration-200',
      iconInactive: 'opacity-0 ease-out duration-100',
      iconOn: 'h-3 w-3 text-{color}-500 dark:text-{color}-400',
      iconOff: 'h-3 w-3 text-gray-400 dark:text-gray-500',
      default: {
        onIcon: null,
        offIcon: null,
        color: 'green',
      },
    },

    variants: {
      default: {
        iconBase: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
        iconActive: 'opacity-100 ease-in duration-200',
        iconInactive: 'opacity-0 ease-out duration-100',
        iconOn: 'h-3 w-3 text-{color}-500 dark:text-{color}-400',
        ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900',
        active: 'bg-{color}-500 dark:bg-{color}-400',
      },
    },
  },
  UVerticalNavigation: {
    base: {
      root: 'relative',
      verticalNavigationBase: 'group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none hover:bg-gray-100 dark:hover:bg-gray-800 before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
      ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-green-500 dark:focus-visible:ring-green-400',
      padding: 'px-3 py-1.5',
      width: 'w-full',
      rounded: 'rounded-md',
      font: 'font-medium',
      size: 'text-sm',
      active: 'text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800',
      inactive: 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50',
      label: 'truncate relative',
      iconBase: 'flex-shrink-0 w-4 h-4',
      iconActive: 'text-gray-700 dark:text-gray-200',
      iconInactive: 'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
      avatarBase: 'flex-shrink-0',
      avatarSize: '3xs',
      badgeBase: 'relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5',
      badgeActive: 'bg-white dark:bg-gray-900',
      badgeInActive: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900',
    },

    variants: {
      default: {
        root: 'relative',
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
