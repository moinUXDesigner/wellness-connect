import { ReactNode, HTMLAttributes } from 'react';

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  onClick?: () => void;
}

export const ListItem = ({
  title,
  subtitle,
  leftContent,
  rightContent,
  onClick,
  className = '',
  ...props
}: ListItemProps) => {
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-4 ${
        isClickable ? 'cursor-pointer hover:bg-neutral-50 active:bg-neutral-100' : ''
      } transition-colors ${className}`}
      {...props}
    >
      {leftContent && <div className="flex-shrink-0">{leftContent}</div>}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-neutral-900 truncate">{title}</h4>
        {subtitle && <p className="text-sm text-neutral-600 truncate mt-0.5">{subtitle}</p>}
      </div>
      {rightContent && <div className="flex-shrink-0">{rightContent}</div>}
    </div>
  );
};
