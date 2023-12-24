import useSWR from "swr";
import { Add } from "@mui/icons-material";
import Btn from "@/components/Btn";
import ModalForm from "./ModalForm";
import { forms } from "@/forms";
import { FORMS } from "@/reducer/types";
import { useStateUpdate } from "@/hooks/useStateUpdate";

export default function ModalFormContainer({ payload }: { payload: IProjectPayload }) {
  const { data  } = useSWR(`/${payload.field}`)
  const { state: { user, forms: stateForm }, dispatch } = useStateUpdate();

  const toggleForm = () => {
    dispatch(
      { 
        type: FORMS, 
        payload           
      }
    )
  };

  const Profiler = forms[payload.field].profiler;
  const Card = forms[payload.field].card;


  // console.log("Database infor for", data)

  return (
    <>
      <article className="container">
        <Profiler />

        <div className="relative">
          {user && (
            <div className="absolute right-5 flex space-x-3">
              <Btn
                className="p-2 rounded border border-primary text-primary hover:bg-primary hover:text-white text-sm flex items-center"
                click={toggleForm}
              >
                <Add fontSize="small" className="mr-1" /> Add Project
              </Btn>
            </div>
          )}

          <Card data={data} />
        </div>
      </article>

      {stateForm.title && stateForm.field && (
        <>
          <ModalForm handler={stateForm.field} close={toggleForm} />
        </>
      )}
    </>
  );
}



interface IProjectPayload {
  title: string,
  field: string,
  values: {
    [key: string]: string | string[]
  }
}