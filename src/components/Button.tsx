import React from 'react';

const buttonVariants = {
  primary: 'bg-pink text-white hover:bg-pink/90',
  outline: 'border border-white/60 bg-transparent text-white hover:bg-white/10',
  'outline-pink': 'border border-pink text-pink hover:bg-pink hover:text-white',
};

const buttonSizes = {
  sm: 'px-4 py-2', 
  md: 'px-6 py-2.5 text-sm', 
  lg: 'px-8 py-3.5 text-base w-full md:w-auto',
};

type Variant = keyof typeof buttonVariants;
type Size = keyof typeof buttonSizes;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  classes?: string;
}

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>, CommonProps {
  element: 'anchor';
  href: string;
  isExternal?: boolean;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, CommonProps {
  element?: 'button';
  href?: never;
}

type ComponentProps = AnchorProps | ButtonProps;

const base =
  'inline-flex items-center justify-center rounded-sm font-anton uppercase tracking-wide ' +
  'cursor-pointer transition-colors ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 ' +
  'disabled:opacity-50 disabled:pointer-events-none';

const getClassName = ({
  variant = 'primary',
  size = 'md',
  classes = '',
}: Pick<CommonProps, 'variant' | 'size' | 'classes'>) =>
  [base, buttonVariants[variant], buttonSizes[size], classes].join(' ');

export const Button = (props: ComponentProps) => {
  const className = getClassName(props);

  if (props.element === 'anchor') {
    const { element, variant, size, classes, isExternal, children, ...rest } = props;

    return (
      <a
        {...rest}
        className={className}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    );
  }

  const { element, variant, size, classes, children, href, ...rest } = props;

  return (
    <button type="button" {...rest} className={className}>
      {children}
    </button>
  );
};
