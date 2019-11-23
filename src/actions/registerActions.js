import axios from "axios";
import {
  REGISTER_CARGANDO,
  REGISTER_ERROR,
  REGISTER,
  REGISTER_DATA
} from "../types/registerType";

const parserJson = obj => {
  var jsonSerialize = "";
  for (const prop in obj) {
    jsonSerialize += prop + "=" + obj[prop] + "&";
  }
  jsonSerialize = jsonSerialize.slice(0, -1);
  return jsonSerialize;
};

export const signup = registro => async dispatch => {
  dispatch({
    type: REGISTER_CARGANDO
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    const object = parserJson(registro);

    const respuesta = await axios.post(
      `${localStorage.getItem("route")}api/Account/Register`,
      object,
      config
    );

    dispatch({
      type: REGISTER,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: "Error en el registro"
    });
  }
};

export const handleChange = e => dispatch => {
  dispatch({
    type: REGISTER_DATA,
    payload: e
  });
};
