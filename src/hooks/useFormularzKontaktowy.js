import { useReducer } from "react";

const initialState = {
  clickSubmit: false,
  kontaktImie: "John",
  kontaktNazwisko: "Kowalsky",
  kontaktEmail: "john@kowalsky.pl"
};

const actions = {
  CLICK_SUBMIT: "CLICK_SUBMIT",
  CHANGE_IMIE: "CHANGE_IMIE",
  CHANGE_NAZWISKO: "CHANGE_NAZWISKO",
  CHANGE_EMAIL: "CHANGE_EMAIL"
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
      return {
        ...state,
        kontaktNazwisko: action.payload
      };

    case actions.CHANGE_EMAIL:
      return {
        ...state,
        kontaktEmail: action.payload
      };

    default:
      throw new Error(
        "useFormularzKontaktowy reducer error - action not supported."
      );
  }
};

export const useFormularzKontaktowy = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickSubmit = event => {
    event.preventDefault();
    console.log("onClickSubmit");
    dispatch({ type: actions.CLICK_SUBMIT, payload: event });
  };

  const onChangeImie = event => {
    event.preventDefault();
    const imie = event.currentTarget.value;

    dispatch({ type: actions.CHANGE_IMIE, payload: imie });
  };

  const onChangeNazwisko = event => {
    event.preventDefault();
    const nazwisko = event.currentTarget.value;

    dispatch({ type: actions.CHANGE_NAZWISKO, payload: nazwisko });
  };

  const onChangeEmail = event => {
    event.preventDefault();
    const email = event.currentTarget.value;
    dispatch({ type: actions.CHANGE_EMAIL, payload: email });
  };

  return {
    ...state,
    onClickSubmit,
    onChangeImie,
    onChangeNazwisko,
    onChangeEmail
  };
};

export default useFormularzKontaktowy;
