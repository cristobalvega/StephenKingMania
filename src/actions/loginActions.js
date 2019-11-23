import axios from "axios";
import {
  TOKEN,
  LOGIN_DATA,
  LOGIN_CARGANDO,
  LOGIN_ERROR
} from "../types/loginType";

const parserJson = obj => {
  var jsonSerialize = "";
  for (const prop in obj) {
    jsonSerialize += prop + "=" + obj[prop] + "&";
  }
  jsonSerialize = jsonSerialize.slice(0, -1);
  return jsonSerialize;
};

export const login = iniciar_sesion => async dispatch => {
  dispatch({
    type: LOGIN_CARGANDO
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const object = parserJson(iniciar_sesion);

    const respuesta = await axios.post(
      `${localStorage.getItem("route")}Token`,
      object,
      config
    );

    localStorage.setItem("token", respuesta.data.access_token);

    dispatch({
      type: TOKEN,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: "Usuario o contraseña incorrectos"
    });
  }
};

export const handleChange = e => dispatch => {
  dispatch({
    type: LOGIN_DATA,
    payload: e
  });
};
