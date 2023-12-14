import _ from "lodash";
import React from "react";
import { InputProps } from "./Input";
import { Label } from "@/packages/Label";
import { cn } from "@/lib/utils.ts";
import { Errors } from "@/packages/Errors";

const NUMBER_REGEX = /^\d+$/;

const NumberInput = React.forwardRef<HTMLInputElement, InputProps>(
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
      onChange,
      ...props
    },
    ref,
  ) => {
    const [localValue, setLocalValue] = React.useState<string>(
      defaultValue as string,
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      console.log(value);
      console.log(defaultValue);
      console.log(NUMBER_REGEX.test(value) || _.isEmpty(value));
      if (NUMBER_REGEX.test(value) || _.isEmpty(value)) {
        onChange && onChange(event);
        setLocalValue(value);
      } else {
        setLocalValue(defaultValue);
      }
    };

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
            onChange={handleChange}
            onBlur={onBlur}
            defaultValue={defaultValue || localValue}
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

NumberInput.displayName = "NumberInput";

export { NumberInput };
