export const ADD_PHONE_COMP = "ADD_PHONE_COMP";
export const DEL_PHONE_COMP = "DEL_PHONE_COMP";

// ESTA FUNCION ES LA QUE PERMITE LA ASINCRONIA CON REDUX THUNK!!!.
// BASICAMENTE EJECUTA UNA ACCION ASINCRONA A TRAVES DE DISPATCH, y LUEGO
// FINALMENTE RETORNA UN DISPATCH DE LA ACCION QUE QUEREMOS EJECUTAR
// CON DATA QUE CONSEGUIMOS ASINCRONICAMENTE

export function addPhoneCompASYNC(payload) {
  return (dispatch) => {
    var good = payload.replace("http", "https");
    fetch(good)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addPhoneComp(data.data));
      });
  };
}

export function addPhoneComp(payload) {
  return {
    type: ADD_PHONE_COMP,
    payload: payload,
  };
}

export function delPhoneComp(payload) {
  return {
    type: DEL_PHONE_COMP,
    payload: payload,
  };
}
