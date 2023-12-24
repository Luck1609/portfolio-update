import { useStateUpdate } from '@/hooks/useStateUpdate'
import Btn from './Btn'
import { Close } from '@mui/icons-material';
import { FORMS, NOTICE } from '@/reducer/types';
import Helper from '@/helpers';
import { toast } from 'react-toastify';
import { FormEvent } from 'react';

const { http, errorNarrowing, api } = Helper;

export default function NoticeModal() {
  const { state: { notice: { title, id } }, dispatch } = useStateUpdate();

  const close = () => dispatch({ type: NOTICE })

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const {message} = await http.delete(`${api}/auth/${title}/${id}`);
      
      toast.success(message)
      dispatch({type: FORMS})
    } catch(e) {
      toast.error(errorNarrowing(e))
    }
  }

  return (
    id && title ? (
      <div className="w-full h-full fixed z-50 bg-black bg-opacity-30 left-0 top-0 flex justify-center items-center">
        <form className="w-[500px] bg-red-100 rounded text-red-500 relative" onSubmit={submit}>
          <label className="font-bold block text-center p-2 border-b border-red-200">Delete { title }</label>
          <Btn className="p-2 py-1 hover:bg-red-200 rounded absolute right-2 top-1" click={close}><Close /></Btn>

          <p className="py-3 text-center">Are sure you want to delete this {title}?</p>

          <div className="w-full p-3 flex justify-center items-center">
            <Btn className="p-2 w-32 bg-danger text-white rounded" type="submit">Continue</Btn>
          </div>
        </form>
      </div>
    ) : <></>
  )
}
