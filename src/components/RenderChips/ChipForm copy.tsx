import { Controller, useFormContext } from "react-hook-form";
import { IFormInput } from "@/inc/interface";
import { ReactNode } from "react";

export default function ChipForm ({
  name,
  label,
  placeholder,
  className,
  containerClassName = "relative w-full",
}: IFormInput) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error }}) => (
        <div>
          
        </div>
      )}
    />
  );
}