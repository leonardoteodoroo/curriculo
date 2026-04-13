import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'accent' | 'success';
}

export function Badge({ className = '', variant = 'default', ...props }: BadgeProps) {
  return (
    <div className={`${styles.badge} ${styles[variant]} ${className}`.trim()} {...props} />
  );
}
