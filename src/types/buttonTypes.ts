import { Variant } from './tagsTypes';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  variant?: Variant;
  isDefault?: boolean;
  isLoading?: boolean;
  className?: string;
  iconSize?: string;
  size?: 'default' | 'sm' | 'lg';
}
