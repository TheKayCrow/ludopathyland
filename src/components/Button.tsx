import { cn } from '../utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full font-semibold transition-all',
        {
          'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:opacity-90': variant === 'primary',
          'bg-white text-gray-900 hover:bg-gray-100': variant === 'secondary',
          'border-2 border-white text-white hover:bg-white/10': variant === 'outline',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}