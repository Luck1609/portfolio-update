import Input from '@/components/Input'
import Textarea from '@/components/Textarea'
import { useForm, FormProvider } from 'react-hook-form'

export default function Form() {
  const method = useForm<FormData>()

  return (
    <div className="w-full">
      <FormProvider {...method}>
        <form className="w-4/5 m-auto space-y-4">
          <Input 
            name="name"
            label="Fullname"
            placeholder="Enter your fullname"
            className="p-2 border w-full"
          />

          <Input 
            name="email"
            label="Email"
            placeholder="Enter your email address"
            className="p-2 border w-full"
          />

          <Textarea 
            name="message"
            label="Message"
            placeholder="Enter your message here"
          />
        </form>
      </FormProvider>
    </div>
  )
}
