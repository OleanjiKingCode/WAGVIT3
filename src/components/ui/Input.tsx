import { InputProps } from '@/types/inputType';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }) => {
    let isDefault =
      'h-10 rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60';
    return (
      <input type={type} className={`${isDefault} ${className}`} {...props} />
    );
  }
);

export default Input;
