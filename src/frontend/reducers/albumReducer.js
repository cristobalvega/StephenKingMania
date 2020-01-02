import { ALBUM_CARGANDO, 
ALBUM_ERROR, 
ALBUM_DATA, 
ALBUM_LIMPIAR, 
ALBUM_GET, 
ALBUM_READBYID, 
ALBUM_POST, 
ALBUM_PUT, 
ALBUM_GETALL, 
ALBUM_=, 
 } from "../types/albumType";

const INITIAL_STATE = {
  cargando: false,
  error: "",
  avanzar: false,
  album_list: [],
  Id: '',
AspNetUserId: '',
DateCreated: '',
DateModified: '',
Title: '',
Sipnosis: '',

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ALBUM_CARGANDO:
      return { ...state, cargando: true };

    case ALBUM_ERROR:
      return { ...state, error: action.payload, cargando: false };

    case ALBUM_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };

    case ALBUM_LIMPIAR:
      return {
        ...state,
        Id: '',
AspNetUserId: '',
DateCreated: '',
DateModified: '',
Title: '',
Sipnosis: '',

      }

    case ALBUM_GET: 
return { 
...state, 
Id: '',
AspNetUserId: '',
DateCreated: '',
DateModified: '',
Title: '',
Sipnosis: '',
 
} 
case ALBUM_READBYID: 
return { 
...state, 
Id: '',
AspNetUserId: '',
DateCreated: '',
DateModified: '',
Title: '',
Sipnosis: '',
 
} 
case ALBUM_POST: 
return { 
...state, 
data: action.payload, 
cargando: false, 
error: '', 
avanzar: true 
} 
case ALBUM_PUT: 
return { 
...state, 
data: action.payload, 
cargando: false, 
error: '', 
avanzar: true 
} 
case ALBUM_GETALL: 
return { 
...state, 
Album_list: action.payload, 
cargando:false,
error:'', 
avanzar:false 
} 
case ALBUM_=: 
return { 
...state, 
Album_list: action.payload, 
cargando:false,
error:'', 
avanzar:false 
} 

    

    default:
      return state;
  }
};

