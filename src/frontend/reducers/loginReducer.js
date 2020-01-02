import {
  TOKEN,
  LOGIN_DATA,
  LOGIN_CARGANDO,
  LOGIN_ERROR
} from "../types/loginType";

const INITIAL_STATE = {
  token: "",
  cargando: false,
  error: "",
  grant_type: "password",
  username: "",
  password: "",
  next_page: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_CARGANDO:
      return { ...state, cargando: true };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        cargando: false,
        next_page: false
      };

    case TOKEN:
      return {
        ...state,
        token: action.payload,
        cargando: false,
        error: "",
        next_page: true
      };

    case LOGIN_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    default:
      return state;
  }
};
