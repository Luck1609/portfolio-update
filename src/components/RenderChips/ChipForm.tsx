import { useFormContext } from "react-hook-form";
import Btn from "../Btn";
import { IEditorProps } from "@/interface";
import { useRef, useState } from "react";
import RenderChips from ".";


interface ChipTypes extends IEditorProps {
  placeholder: string
  // renderName: string
}

export default function ChipForm ({
  name,
  placeholder,
  // renderName
  className,
}: ChipTypes) {
  // const [chips, setChips] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>()
  const { watch, setValue } = useFormContext();

  const value: string[] = watch(name) ?? []

  const onClick = () => {
    let inputValue: (string | undefined) = ref.current?.value;
    
    if (inputValue) {
      const mergedValues = [...value, ...inputValue.split(",")]
      
      setValue(name, mergedValues)

      inputValue = "";
    }
  }

  return (
    <>
      <div className={`flex items-center space-x-3 ${className}`}>
        <input type="text" className="border border-zinc-400 rounded text-sm p-2" ref={ref} placeholder={placeholder} />
        <Btn className="border border-primary py-1.5 px-3 text-sm rounded text-primary hover:text-white hover:bg-primary" click={onClick}>Add</Btn>
      </div>

      <RenderChips name={name} />
    </>
  );
}