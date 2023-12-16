import { Controller, useFormContext } from "react-hook-form";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useEffect } from "react";

type SelectType = {
  name: string;
  options: object[];
  label?: string;
  className?: string;
};

type MapType = {
  label: string;
  value: string;
};

const SelectField = ({ name, options, label, className }: SelectType) => {
  const { watch, control, trigger } = useFormContext();
  const value = watch(name) ?? "";

  useEffect(() => {
    if (value) trigger(value);
  }, [value, trigger])

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value = "" },
        fieldState: { error },
      }) => (
        <div className={`${error ? "error" : ""}`}>
          <InputLabel className="text-slate-400 text-sm inline-block -mb-1 font-med">
            {label}
          </InputLabel>
          <FormControl className="w-full custom" error={Boolean(error)}>
            <Select
              id={name}
              value={value}
              label={label}
              error={Boolean(error)}
              onChange={onChange}
              onBlur={onBlur}
              className={`${className}`}
            >
              <MenuItem value="">Select {label}</MenuItem>

              {options.map(({ value, label }: MapType) => {
                return (
                  <MenuItem key={label} value={value ?? label}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
          </FormControl>
        </div>
      )}
    />
  );
};

export default SelectField;
