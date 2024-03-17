import { LoadingIcon } from '@/assets/spinIcon';
import { ButtonProps } from '@/types/buttonTypes';
import { Variant } from '@/types/tagsTypes';
import React from 'react';

export const Button: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({
  text,
  onClick,
  variant = Variant.Primary, //Default Variant
  isLoading = false,
  isDefault = false,
  iconSize = '20px', // Default icon size
  size = 'default', // Default size
  className = '',
  ...props
}) => {
  let variantStyling = '';

  switch (variant) {
    case Variant.Secondary:
      variantStyling = 'bg-gray-200 text-gray-800';
      break;
    case Variant.Warning:
      variantStyling = 'bg-orange-500 text-white';
      break;
    case Variant.Danger:
      variantStyling = 'bg-red-500 text-white';
      break;
    case Variant.Success:
      variantStyling = 'bg-green-500 text-white';
      break;
    case Variant.Primary:
    default:
      variantStyling = 'bg-blue-500 text-white';
      break;
  }

  const defaultStyling = isDefault
    ? 'inline-flex items-center justify-center whitespace-nowrap rounded-md  shadow-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'
    : '';

  const sizeStyling = {
    sm: 'h-9 px-3 py-2',
    lg: 'h-11 px-8 py-4',
    default: 'h-11 px-4 py-2',
  };

  return (
    <button
      className={`${variantStyling} ${sizeStyling[size]} ${defaultStyling} ${className} `}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <LoadingIcon size={iconSize} />}
      <span className={`${isLoading && 'ml-2'}`}>{text}</span>
    </button>
  );
};
