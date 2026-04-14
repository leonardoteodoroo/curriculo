import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  isLoading?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', isLoading = false, disabled, className = '', asChild = false, ...props }, ref) => {
    const buttonClassName = `${styles.button} ${styles[variant]} ${className}`.trim();

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;

      return React.cloneElement(child, {
        className: `${buttonClassName} ${child.props.className ?? ''}`.trim(),
        'aria-busy': isLoading || undefined,
        'aria-disabled': disabled || isLoading || undefined,
      });
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        className={buttonClassName}
        {...props}
      >
        {isLoading ? (
          <>
            <span className="sr-only">Carregando</span>
            <span aria-hidden="true" className={styles.spinner}>⟳</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
