import axios from "axios";
import { ALBUM_CARGANDO,
ALBUM_ERROR,
ALBUM_DATA,
ALBUM_LIMPIAR,
ALBUM_GET,
ALBUM_READBYID,
ALBUM_POST,
ALBUM_PUT,
ALBUM_GETALL,
 } from "../types/albumType";

export const handleChange = e => dispatch => {
  dispatch({
    type: ALBUM_DATA,
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




export const albumGet = data_album => async (dispatch, getState) => {
  dispatch({
    type: ALBUM_CARGANDO
  });
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_album);

    const respuesta = await axios.get(
      `${localStorage.getItem("route")}api/album`,
      object,
      config
    );

    dispatch({
      type: ALBUM_GET,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ALBUM_ERROR,
      payload: "Mostrar error correcto"
    });
  }
};

export const albumReadById = data_album => async (dispatch, getState) => {
  dispatch({
    type: ALBUM_CARGANDO
  });
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_album);

    const respuesta = await axios.get(
      `${localStorage.getItem("route")}api/readalbumbyid`,
      object,
      config
    );

    dispatch({
      type: ALBUM_READBYID,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ALBUM_ERROR,
      payload: "Mostrar error correcto"
    });
  }
};

export const albumPost = data_album => async (dispatch, getState) => {
  dispatch({
    type: ALBUM_CARGANDO
  });
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_album);

    const respuesta = await axios.post(
      `${localStorage.getItem("route")}api/album`,
      object,
      config
    );

    dispatch({
      type: ALBUM_POST,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ALBUM_ERROR,
      payload: "Mostrar error correcto"
    });
  }
};

export const albumPut = data_album => async (dispatch, getState) => {
  dispatch({
    type: ALBUM_CARGANDO
  });
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_album);

    const respuesta = await axios.put(
      `${localStorage.getItem("route")}api/album`,
      object,
      config
    );

    dispatch({
      type: ALBUM_PUT,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ALBUM_ERROR,
      payload: "Mostrar error correcto"
    });
  }
};

export const albumGetAll = data_album => async (dispatch, getState) => {
  dispatch({
    type: ALBUM_CARGANDO
  });
  try {

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    const object = parserJson(data_album);

    const respuesta = await axios.get(
      `${localStorage.getItem("route")}api/albumall`,
      object,
      config
    );

    dispatch({
      type: ALBUM_GETALL,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ALBUM_ERROR,
      payload: "Mostrar error correcto"
    });
  }
};


