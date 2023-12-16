import { Delete, Edit } from "@mui/icons-material";
import Btn from "./Btn";
import { useStateUpdate } from "@/hooks/useStateUpdate";
import { FORMS } from "@/reducer/types";

export default function CardActionsBtn({ payload }: {payload: object}) {
  const { dispatch } = useStateUpdate();

  function updateDispatch() {
    dispatch({type: FORMS, payload})
  }

  return (
    <div className="absolute right-2 top-2 group-hover:flex space-x-3 hidden">
      <Btn className="p-1 rounded border border-primary text-primary hover:bg-primary hover:text-white text-sm flex items-center" click={updateDispatch}>
        <Edit fontSize="small" />
      </Btn>

      <Btn className="p-1 rounded border border-danger text-danger hover:bg-danger hover:text-white text-sm flex items-center">
        <Delete fontSize="small" />
      </Btn>
    </div>
  );
}
