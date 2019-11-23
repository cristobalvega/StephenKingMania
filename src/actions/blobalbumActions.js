import axios from "axios";
import {
  BLOBALBUM_CARGANDO,
  BLOBALBUM_ERROR,
  BLOBALBUM_DATA,
  BLOBALBUM_LIMPIAR,
  BLOBALBUM_READBYID,
  BLOBALBUM_TASK,
  BLOBALBUM_READALL
} from "../types/blobalbumType";

export const handleChange = e => dispatch => {
  dispatch({
    type: BLOBALBUM_DATA,
    payload: e
  });
};

const parserJson = obj => {
  var jsonSerialize = "";
  for (const prop in obj) {
    jsonSerialize += prop + "=" + obj[prop] + "&";
  }
  jsonSerialize = jsonSerialize.slice(0, -1);
  return jsonSerialize;
};

export const blobalbumReadById = data_blobalbum => async dispatch => {
  dispatch({
    type: BLOBALBUM_CARGANDO
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const respuesta = await axios.get(
      `${localStorage.getItem("route")}api/readblobalbumbyid`,
      config
    );

    dispatch({
      type: BLOBALBUM_READBYID,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: BLOBALBUM_ERROR,
      payload: "No se pudo obtener la portada intente más tarde"
    });
  }
};

export const blobalbum = data_blobalbum => async (dispatch, getState) => {
  dispatch({
    type: BLOBALBUM_CARGANDO
  });
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_blobalbum);

    const respuesta = await axios.post(
      `${localStorage.getItem("route")}api/blobalbum`,
      object,
      config
    );

    dispatch({
      type: BLOBALBUM_TASK,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: BLOBALBUM_ERROR,
      payload: "No se pudo crear la portada, intente más tarde"
    });
  }
};
