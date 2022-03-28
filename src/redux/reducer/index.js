import { ADD_PHONE_COMP, DEL_PHONE_COMP } from "../actions";

const initialState = {
  phoneCompOne: null,
  phoneCompTwo: null,
  phoneCompTrash: null,
};

export default function phoneApp(state = initialState, action) {
  if (action.type === ADD_PHONE_COMP) {
    if (!state.phoneCompOne) {
      return { ...state, phoneCompOne: action.payload };
    }
    if (!state.phoneCompTwo) {
      return { ...state, phoneCompTwo: action.payload };
    }
    if (state.phoneCompOne && state.phoneCompTwo) {
      return { ...state, phoneCompTrash: action.payload };
    }
  }
  if (action.type === DEL_PHONE_COMP) {
    if (action.payload === 1) {
      return { ...state, phoneCompOne: null };
    }
    if (action.payload === 2) {
      return { ...state, phoneCompTwo: null };
    }
  }
  return initialState;
}
