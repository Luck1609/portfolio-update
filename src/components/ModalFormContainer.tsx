// import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Add } from "@mui/icons-material";
import Btn from "@/components/Btn";
import ModalForm from "./ModalForm";
import { forms } from "@/forms";
import { FORMS } from "@/reducer/types";
import { useStateUpdate } from "@/hooks/useStateUpdate";
// import { IReducerState } from "@/interface";

export default function ModalFormContainer({ payload }: { payload: IProjectPayload }) {
  // const { state, dispatch } = useStateUpdate();
  const { state, dispatch }: { state: object, dispatch: object } = useStateUpdate();
  // const { state, dispatch }: { state: IReducerState, dispatch: (props: object) => void } = useStateUpdate();
  const user: object = useOutletContext();

  const toggleForm = () => {
    dispatch(
      { 
        type: FORMS, 
        payload           
      }
    )
  };
  console.log("Toggler instance", state)

  const Profiler = forms[payload.field].profiler;
  const Card = forms[payload.field].card;


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

          <Card />
        </div>
      </article>

      {state.forms.title && state.forms.field && (
        <>
          <ModalForm handler={state.forms.field} close={toggleForm} />
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