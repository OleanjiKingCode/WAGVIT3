import { TagProps, Variant } from '@/types/tagsTypes';
import React from 'react';

export const Tag: React.FC<TagProps> = ({
  text,
  variant = Variant.Primary,
  isDefault = false,
  className = '',
}) => {
  let variantStyling = '';

  switch (variant) {
    case Variant.Secondary:
      variantStyling = 'bg-gray-200 text-gray-800';
      break;
    case Variant.Warning:
      variantStyling = 'bg-orange-200 text-orange-500 ';
      break;
    case Variant.Danger:
      variantStyling = 'bg-red-200 text-red-500 ';
      break;
    case Variant.Success:
      variantStyling = 'bg-green-200 text-green-500';
      break;
    case Variant.Primary:
    default:
      variantStyling = 'bg-blue-200 text-blue-500';
      break;
  }

  const defaultStyling = isDefault
    ? 'py-1 px-2 rounded-md text-sm font-semibold w-fit cursor-pointer'
    : '';
  return (
    <div className={`${variantStyling} ${defaultStyling} ${className}`}>
      {text}
    </div>
  );
};
