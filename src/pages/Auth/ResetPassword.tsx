import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import Btn from "@/components/Btn";
import PasswordInput from "@/components/PasswordInput";
import Helper from "@/helpers";


const { http } = Helper;

export default function ResetPassword() {
  const methods = useForm({ mode: "all" });
  const goto = useNavigate();

  const { handleSubmit } = methods;

  const submit = async (payload: object) => {
    try {
      await http.post("/login", payload);

      goto("/");
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <FormProvider {...methods}>
      <h3 className="font-bold text-2xl mb-4">Password Reset</h3>
    
      <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(submit)}>

        <PasswordInput
          name="password"
          placeholder="Enter your password"
          label="Password"
          className="border rounded w-full p-3"
        />

        <PasswordInput
          name="password_confirmation"
          placeholder="Confirm your password"
          label="Repeat Password"
          className="border rounded w-full p-3"
        />

        <Btn className="p-3 px-10 rounded-full bg-primary text-white m-auto">Reset password</Btn>
      </form>
    </FormProvider>
  );
}
