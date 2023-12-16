import { Controller, useFormContext } from "react-hook-form";
import { IFormInput } from "@/inc/interface";

const Input = ({
  name,
  label,
  placeholder,
  className,
  type = "text",
  containerClassName = "relative w-full",
}: IFormInput) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value = "" }, fieldState: { error }}) => (
        <div className={`${containerClassName} ${error ? "error" : ""}`}>
          <label className="font-medium text-sm mb-1.5 text-slate-400">{label}</label>
          <input
            type={type}
            className={`border border-zinc-400 ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onBlur={onBlur}
          />
          
          {error && (
            <small className="text-sm text-red font-medium">
              {error.message}
            </small>
          )}
        </div>
      )}
    />
  );
}

export default Input;