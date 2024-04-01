import { TagProps, Variant } from '@/types/tagsTypes';
import React from 'react';

const Tag: React.FC<TagProps> = ({
  text,
  variant = Variant.Primary,
  isDefault = false,
  className = '',
}) => {
  let variantStyling = '';

  switch (variant) {
    case Variant.Secondary:
      variantStyling = 'bg-[#6B7280] hover:bg-[#374151] text-[#1F2937]';
      break;
    case Variant.Warning:
      variantStyling = 'bg-[#F97316]  hover:bg-[#c2410c] text-[#fff]';
      break;
    case Variant.Danger:
      variantStyling = 'bg-[#EF4444] hover:bg-[#b91c1c] text-[#fff]';
      break;
    case Variant.Success:
      variantStyling = 'bg-[#22c55e] hover:bg-[#15803d] text-[#fff]';
      break;
    case Variant.Primary:
    default:
      variantStyling = 'bg-[#3B82F6] hover:bg-[#1d4ed8] text-[#fff]';
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

export default Tag;
