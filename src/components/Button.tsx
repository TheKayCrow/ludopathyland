import { cn } from '../utils';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingSpinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  loading?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative inline-flex items-center justify-center font-bold transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',
        {
          // Primary variant
          'bg-gradient-to-r from-pastel-purple to-pastel-pink text-gray-900 hover:opacity-90 shadow-pastel hover:shadow-pastel-lg focus:ring-white': 
            variant === 'primary',
          
          // Secondary variant  
          'bg-white hover:bg-gray-100 text-gray-900 shadow-lg hover:shadow-xl focus:ring-gray-500':
            variant === 'secondary',
          
          // Outline variant
          'border-2 border-pastel-purple text-pastel-purple hover:bg-pastel-purple/10 focus:ring-pastel-purple':
            variant === 'outline',
          
          // Sizes
          'text-sm h-9 px-4 rounded-full': size === 'sm',
          'h-11 px-6 rounded-full': size === 'md',
          'text-lg h-14 px-8 rounded-full': size === 'lg',
          
          // Loading state
          'cursor-not-allowed': loading,
        },
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      <span className={cn('flex items-center gap-2', { 'opacity-0': loading })}>
        {children}
      </span>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" />
        </div>
      )}
    </motion.button>
  );
}