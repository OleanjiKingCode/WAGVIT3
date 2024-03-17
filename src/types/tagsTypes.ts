export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export interface TagProps {
  text: string;
  variant?: Variant;
  isDefault?: boolean;
  className?: string;
}
