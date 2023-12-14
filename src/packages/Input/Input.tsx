import React from "react";

import { cn } from "@/lib/utils";

import { Label } from "@/packages/Label";
import { Errors } from "@/packages/Errors";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[]> | undefined;
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type,
      placeholder,
      required,
      disabled,
      errors,
      className,
      defaultValue = "",
      onBlur,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label ? (
            <Label
              htmlFor={id}
              className="text-xs font-semibold text-neutral-700"
            >
              {label}
            </Label>
          ) : null}
          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-input bg-background" +
                " ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm px-2 py-1 h-7",
              className,
            )}
            ref={ref}
            onBlur={onBlur}
            defaultValue={defaultValue}
            required={required}
            name={id}
            id={id}
            placeholder={placeholder}
            disabled={disabled}
            aria-describedby={`${id}-error`}
            {...props}
          />
        </div>
        <Errors id={id} errors={errors} />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
