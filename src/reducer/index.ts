import { IReducerActions, IReducerState } from "@/interface";



export const initialState: IReducerState = {
  forms: {
    title: "",
    values: {},
    field: ""
  }
}

const initialAction: IReducerActions = {type: "", payload: {}};


const reducer = (state = initialState, action = initialAction) => {
  const { type, payload } = action;

  switch (type) {
    case "forms":
      return {
        ...state,
        forms: !payload ? initialState.forms : payload
      }
  
    default:
      return state;
  }
}

export default reducer