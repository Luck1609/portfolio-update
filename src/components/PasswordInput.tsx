import { Controller, useFormContext } from "react-hook-form";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { useState } from "react";


type PasswordInputType ={
  className: string,
  name: string,
  placeholder: string,
  label: string,
}


export default function PasswordInput ({
  className = "p-3 rounded w-full border col-span-2",
  name,
  placeholder,
  label,
}: PasswordInputType) {
  const { control } = useFormContext();
  const [showText, setShowText] = useState<boolean>(false)


  const toggleHash = () => setShowText(prev => !prev)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = "" }}) => (
        <div className="w-full relative">
          <span className="font-medium text-sm mb-1.5 text-slate-400">{label}</span>
          
          <input
            type={showText ? "text" : "password"}
            name={name}
            className={`border border-zinc-400 ${className}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />

          {
            !showText 
              ? <VisibilityOutlined fontSize="small" className="absolute right-2 bottom-2 text-slate-400" onClick={toggleHash} />
              : <VisibilityOffOutlined fontSize="small" className="absolute right-2 bottom-2 text-slate-400" onClick={toggleHash} />
          }
        </div>
      )}
    />
  );
}