import {
  BLOBALBUM_CARGANDO,
  BLOBALBUM_ERROR,
  BLOBALBUM_DATA,
  BLOBALBUM_LIMPIAR,
  BLOBALBUM_READBYID,
  BLOBALBUM_TASK,
  BLOBALBUM_READALL
} from "../types/blobalbumType";

const INITIAL_STATE = {
  cargando: false,
  error: "",
  avanzar: false,
  blobalbum_list: [],
  Id: "",
  AlbumId: "",
  DateCreated: "",
  DateModified: "",
  URI: "",
  BlobTypeId: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BLOBALBUM_CARGANDO:
      return { ...state, cargando: true };

    case BLOBALBUM_ERROR:
      return { ...state, error: action.payload, cargando: false };

    case BLOBALBUM_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case BLOBALBUM_LIMPIAR:
      return {
        ...state,
        Id: "",
        AlbumId: "",
        DateCreated: "",
        DateModified: "",
        URI: "",
        BlobTypeId: ""
      };

    case BLOBALBUM_READBYID:
      return {
        ...state,
        Id: "",
        AlbumId: "",
        DateCreated: "",
        DateModified: "",
        URI: "",
        BlobTypeId: ""
      };
    case BLOBALBUM_TASK:
      return {
        ...state,
        data: action.payload,
        cargando: false,
        error: "",
        avanzar: true
      };
    case BLOBALBUM_READALL:
      return {
        ...state,
        BlobAlbum_list: action.payload,
        cargando: false,
        error: "",
        avanzar: false
      };

    default:
      return state;
  }
};
