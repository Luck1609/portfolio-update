import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Btn from "@/components/Btn";
import Input from "@/components/Input";
import LinkItem from "@/components/Link";
import Helper from "@/helpers";


const { http } = Helper;

export default function ForgotPassword() {
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
      <h3 className="font-bold text-2xl mb-4">Forgot Password</h3>
    
      <form className="space-y-4 flex flex-col" onSubmit={handleSubmit(submit)}>
        <Input
          name="email"
          placeholder="Enter your email address"
          label="Email"
          className="border rounded w-full p-3"
        />

        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-sm">Remember your credentials? <LinkItem url="/login" className="text-sky-500 ml-1">Login</LinkItem></p>
        </div>

        <Btn className="p-3 px-10 rounded-full bg-primary text-white m-auto">Send reset link</Btn>
      </form>
    </FormProvider>
  );
}
