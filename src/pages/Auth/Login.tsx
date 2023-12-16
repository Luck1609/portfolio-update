// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import Btn from "@/components/Btn";
import Input from "@/components/Input";
import LinkItem from "@/components/Link";
import PasswordInput from "@/components/PasswordInput";
import Helper from "@/helpers";

const { http, errorNarrowing } = Helper

export default function Login() {
  const methods = useForm({ mode: "all" });
  // const goto = useNavigate();

  const { handleSubmit } = methods;

  const submit = async (payload: object) => {
    try {
      await http.post("/login", payload);

      window.location.href = "/";
      toast.success("Login successful")
    } catch (error) {
      toast.error(errorNarrowing(error))
    }
  }

  return (
    <FormProvider {...methods}>
      <form className="" onSubmit={handleSubmit(submit)}>
        <h3 className="font-bold text-2xl mb-4">Login</h3>
      
        <div className="space-y-4 flex flex-col">
          <Input
            name="email"
            placeholder="Enter your email address"
            label="Email"
            className="border border-slate-100 rounded w-full p-2 text-sm"
          />

          <PasswordInput
            name="password"
            placeholder="Enter your password"
            label="Password"
            className="border border-slate-100 rounded w-full p-2 text-sm"
          />

          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-sm">Already have an account? <LinkItem url="/register" className="text-sky-500 ml-1">Register</LinkItem></p>
            <LinkItem url="/forgot-password" className="text-sky-500 text-sm">Forgot password?</LinkItem>
          </div>

          <Btn className="p-3 px-10 rounded-full bg-primary text-white m-auto" type="submit">Submit</Btn>
        </div>
      </form>
    </FormProvider>
  );
}
