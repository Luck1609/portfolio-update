import { IReducerActions, IReducerState } from "@/interface";
import { FORMS, NOTICE, USER } from "./types";



export const initialState: IReducerState = {
  forms: {
    title: "",
    values: {},
    field: ""
  },
  user: null,
  notice: {
    title: "",
    id: ""
  }
}

const initialAction: IReducerActions = {type: "", payload: {}};


const reducer = (state = initialState, action = initialAction) => {
  const { type, payload } = action;

  switch (type) {
    case FORMS:
      return {
        ...state,
        forms: !payload ? initialState.forms : payload
      }

    case USER:
      return {
        ...state,
        user: !payload ? initialState.user : payload
      }

    case NOTICE:
      return {
        ...state,
        notice: !payload ? initialState.notice : payload
      }

  
    default:
      return state;
  }
}

export default reducer