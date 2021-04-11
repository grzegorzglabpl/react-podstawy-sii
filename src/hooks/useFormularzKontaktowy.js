import { useReducer, useEffect, useState } from "react";

const initialState = {
  zgodyRodo: false,
  clickSubmit: false,
  kontaktImie: "John",
  kontaktNazwisko: "Kowalsky",
  kontaktEmail: "john@kowalsky.pl"
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_IMIE: "CHANGE_IMIE",
  CHANGE_NAZWISKO: "CHANGE_NAZWISKO",
  CHANGE_EMAIL: "CHANGE_EMAIL",
  CHANGE_ZGODY_RODO: "CHANGE_ZGODY_RODO"
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_SUBMIT:
      return {
        ...state,
        clickSubmit: !state.clickSubmit
      };

    case actions.CHANGE_IMIE:
      return {
        ...state,
        kontaktImie: action.payload
      };

    case actions.CHANGE_NAZWISKO:
      return updateStateRepository({
        ...state,
        kontaktNazwisko: action.payload
      });

    case actions.CHANGE_EMAIL:
      return {
        ...state,
        kontaktEmail: action.payload
      };

    case actions.CHANGE_ZGODY_RODO:
      return {
        ...state,
        zgodyRodo: action.payload
      };

    default:
      throw new Error(
        "useFormularzKontaktowy reducer error - action not supported."
      );
  }
};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [imie, setImie] = useState(state.kontaktImie);

  /*
  const repository = state => {
    console.log(state);

    localStorage.setItem("kontaktImie", state.kontaktImie);
    var imie = localStorage.getItem("kontaktImie");

    return {
      ...state,
      kontaktImie: localStorage.getItem("kontaktImie")
    };
  };
  */

  const onClickSubmit = event => {
    event.preventDefault();
    console.log("onClickSubmit");

    /*
    const formData = new FormData(event.target);
    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    var json = JSON.stringify(object, ["Imie"]);

    console.log(json);
  */

    dispatch({ type: actions.CLICK_SUBMIT, payload: event.target });
  };

  const onChangeImie = event => {
    console.log("onChangeImie");

    const imie = event.target.value;

    setImie(imie);

    dispatch({ type: actions.CHANGE_IMIE, payload: imie });
  };

  const onChangeNazwisko = event => {
    event.preventDefault();
    const nazwisko = event.target.value;

    dispatch({ type: actions.CHANGE_NAZWISKO, payload: nazwisko });
  };

  const onChangeEmail = event => {
    event.preventDefault();
    const email = event.target.value;
    dispatch({ type: actions.CHANGE_EMAIL, payload: email });
  };

  const onChangeRodo = event => {
    const zgoda = event.target.value.includes("true");

    dispatch({ type: actions.CHANGE_ZGODY_RODO, payload: zgoda });
  };

  return {
    ...state,
    onClickSubmit,
    onChangeImie,
    onChangeNazwisko,
    onChangeEmail,
    onChangeRodo
  };
};

export default useFormularzKontaktowy;
