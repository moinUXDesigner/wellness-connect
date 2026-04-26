import { InputHTMLAttributes, forwardRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer group">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            {...props}
          />
          <div className="w-5 h-5 border-2 border-neutral-300 rounded-md bg-white transition-all peer-checked:bg-primary peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed">
            <svg
              className="w-full h-full text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M6 10l2 2 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {label && (
          <span className="text-sm text-neutral-700 group-hover:text-neutral-900 select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
