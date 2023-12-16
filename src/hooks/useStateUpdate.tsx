import { useContext } from "react";
import { StateContext } from "@/reducer/useStateReducer";


export const useStateUpdate = () => {
  const [state, dispatch] = useContext(StateContext);
  // const state = useContext(StateContext), dispatch = useContext(UpdateStateContext);

  return {state, dispatch}
}