import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Close } from "@mui/icons-material";
import Btn from "./Btn";
import { FormTypes, forms as Forms } from "@/forms";
import Helper from "@/helpers";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { useStateUpdate } from "@/hooks/useStateUpdate";
import { FORMS } from "@/reducer/types";


type ModalTypes = {
  handler: string,
  close: () => void
}

const { http } = Helper;

export default function ModalForm({ handler }: ModalTypes) {
  const { state: { forms }, dispatch } = useStateUpdate();
  const method = useForm();

  const { reset, handleSubmit } = method

  const target = Forms[handler]

  useEffect(() => {
    reset(forms.values)
  }, [forms.values, reset])
  
  const submit = async (payload: FormTypes) => {
    const { id } = payload;

    console.log("Form payload", payload)

    const method = id ? "patch" : "post";

    try {
      const result: AxiosResponse =  await http[method](`${ target.url }${ id ? ("/" + id) : "" }`, payload)
      toast.success(result?.message)
      close()
    } catch(err) {
      toast.success(err.message)
    }
  }

  console.log("Stgate update from modal", forms);

  const close = () => dispatch({type: FORMS})

  const Component = target.formName
  
  return (
    <FormProvider {...method}>
      <div className="fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center bg-opacity-40 z-50">
        <form className="bg-white max-w-2xl w-full rounded" onSubmit={handleSubmit(submit)}>
          <div className="py-3 text-center border-b relative">
            <label className="block text-xl font-bold text-basic">{forms.title}</label>

            <Btn className="p-1 text-basic px-2 bg-transparent rounded hover:bg-red-100 hover:text-danger absolute right-2 top-1.5" click={close}><Close /></Btn>
          </div>
          
          <div className="max-h-[500px] overflow-y-scroll">
            <Component />
          </div>

          <div className="p-3 border-t flex space-x-5 items-center justify-end">
            <Btn className="p-2 bg-success text-white rounded text-sm" type="submit">Submit</Btn>
          </div>
        </form>
      </div>
    </FormProvider>
  )
}
