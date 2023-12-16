import { Dispatch, ReactNode, createContext, useReducer } from "react";
import reducer, { initialState } from "@/reducer";
import { IReducerState } from "@/interface";


export const StateContext = createContext<[IReducerState, Dispatch<(props: object) => void>]>(reducer, initialState);
// export const UpdateStateContext = createContext({});



export default function StateContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);


  // function updateDispatch(payload: object) {
  //   dispatch(payload)
  // }

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {/* <UpdateStateContext.Provider value={updateDispatch}> */}
        {children}
      {/* </UpdateStateContext.Provider> */}
    </StateContext.Provider>
  )
}