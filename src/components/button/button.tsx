import { ComponentProps, MouseEvent, ReactNode, useRef } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'
import { LoadingIcon } from './components/loading-icon'

const button = tv({
  base: 'font-roboto relative flex cursor-pointer items-center justify-center gap-3 rounded-sm border-2 font-medium transition duration-300 ease-in-out',
  variants: {
    variant: {
      primary:
        'border-blue-400 bg-blue-400 text-white hover:border-blue-600 hover:bg-blue-600 focus:border-blue-600 focus:bg-blue-400',
      secondary:
        'border-none bg-blue-50 text-blue-600 hover:bg-blue-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-600',
      danger:
        'bg-danger-500 hover:bg-danger-400 hover:bg-danger-200 hover:text-danger-500 focus:outline-danger-500 focus:bg-danger-200 focus:text-danger-500 border-none text-white focus:outline-2',
      warning:
        'border-warning-500 bg-warning-500 hover:border-warning-400 hover:bg-warning-400 hover:text-warning-500 focus:border-warning-500 focus:bg-warning-light focus:text-warning-500 text-white',
      success:
        'border-success-400 bg-success-400 hover:border-success-100 hover:bg-success-100 hover:text-success-400 focus:border-success-400 focus:bg-success-50 focus:text-success-400 text-white',
      link: 'border-transparent bg-transparent text-blue-400 hover:text-blue-600 focus:text-gray-600',
      bordered:
        'border-blue-400 text-blue-400 hover:bg-blue-100 focus:border-blue-600 focus:ring-2 focus:ring-blue-600',

      unstyled:
        'border-none border-transparent bg-transparent p-0 text-gray-400 hover:text-gray-600 focus:text-gray-600',
    },
    size: {
      xs: 'h-8 px-3 py-2',
      sm: 'h-10 px-4 py-3',
      md: 'h-12 px-6 py-4',
      lg: 'font-xs h-14 px-8 py-5',
      icon: 'h-6 w-6 p-0',
      'no-spacing': 'p-0',
    },
    shape: { pill: 'rounded-pill', normal: 'rounded-sm' },
    disabled: {
      true: 'cursor-not-allowed border-gray-200 bg-gray-200 text-white hover:border-gray-200 hover:bg-gray-200 focus:border-gray-200 focus:bg-gray-200',
    },
    loading: { true: 'cursor-wait' },
    isResponsive: {
      true: 'tablet:font-xs tablet:h-14 tablet:px-8 tablet:py-5 h-12 px-6 py-4',
    },
  },
  compoundVariants: [
    { size: ['xs', 'sm', 'md'], class: 'text-2xs' },
    { size: ['xs'], class: 'gap-2' },
    {
      variant: 'link',
      disabled: true,
      class:
        'cursor-not-allowed border-transparent bg-transparent text-gray-300 hover:border-transparent hover:bg-transparent hover:text-gray-300 focus:border-transparent focus:bg-transparent focus:text-gray-300',
    },
    {
      disabled: true,
      loading: true,
      class:
        'border-gray-300 bg-gray-300 hover:border-gray-300 hover:bg-gray-300 focus:border-gray-300 focus:bg-gray-300',
    },
    {
      shape: 'pill',
      class:
        'border-primary-200 bg-gray-0 text-2xs text-primary-400 border px-4 py-3 font-normal hover:text-white focus:text-white',
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    shape: 'normal',
    disabled: false,
  },
})
export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children: ReactNode
    loading?: boolean
    asChild?: boolean
    isResponsive?: boolean
  }

export const Button = ({
  variant,
  size,
  shape,
  disabled,
  children,
  loading,
  isResponsive,
  className,
  onClick,
  asChild,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.focus()
      onClick?.(event)
    }
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      ref={buttonRef}
      onClick={handleClick}
      className={button({
        variant,
        size,
        shape,
        disabled: disabled || loading,
        loading,
        isResponsive,
        className,
      })}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      {loading && (
        <div className='absolute z-1 flex h-full w-full items-center justify-center bg-gray-300'>
          <LoadingIcon size={size} />
        </div>
      )}
    </Comp>
  )
}