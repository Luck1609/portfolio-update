import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Controller } from "react-hook-form";

type TextareaType = {
  name: string,
  className?: string,
  label?: string,
  placeholder?: string,
  containerClass?: string,
  rows?: number,
}

const Textarea = ({ name, className, placeholder, label, rows, containerClass }: TextareaType) => {

  const { control, watch, trigger } = useFormContext();
  const value = watch(name);
  
  useEffect(() => {
    if (value) trigger(name);
  }, [value, trigger, name])


  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value = "" },
        fieldState: { error },
      }) => (
        <div className={containerClass}>
          <label
            className={`${
              error ? "error" : ""
            } py-0.5 inline-block text-sm font-medium text-slate-400`}
          >
            {label}
          </label>
          <textarea
            rows={rows ?? 5}
            className={`${className} w-full p-3 ${ error ? "error" : "" }`}
            onChange={onChange}
            placeholder={placeholder ?? label}
            value={value}
            onBlur={onBlur}
          />

          {error && (
            <span className="text-xs text-red-500 absolute -bottom-5 left-1 block w-full">
              {error.message}
            </span>
          )}
        </div>
      )}
    />
  );
}

export default Textarea
