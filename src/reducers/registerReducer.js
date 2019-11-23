import {
  REGISTER_CARGANDO,
  REGISTER_ERROR,
  REGISTER,
  REGISTER_DATA
} from "../types/registerType";

const INITIAL_STATE = {
  cargando: false,
  error: "",
  Email: "",
  Password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_CARGANDO:
      return { ...state, cargando: true };

    case REGISTER_ERROR:
      return { ...state, error: action.payload, cargando: false };

    case REGISTER:
      return { ...state, token: action.payload, cargando: false, error: "" };

    case REGISTER_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
};
