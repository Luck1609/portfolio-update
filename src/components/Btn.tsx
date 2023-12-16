import { IBtn } from "@/interface";

export default function Btn({ children, className, type = "button", click, disabled = false }: IBtn) {
  return (
    <button className={`${className} ${disabled ? "bg-opacity-30" : ""}`} type={type} onClick={click} style={{transition: ".3s"}}>
      {children}
    </button>
  );
}
