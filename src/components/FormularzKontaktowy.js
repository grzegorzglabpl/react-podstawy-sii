import React from "react";

const FormularzKontaktowy = () => {
  return (
    <form action="#form-kontakt-1" method="get">
      <h1>Formularz kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <input name="parametr1" type="text" value="wartości" />
      </fieldset>
      <fieldset>
        <legend>Zgody marketingowe</legend>
      </fieldset>
      <fieldset>
        <legend>Zgody na przetwarzanie RODO</legend>
      </fieldset>
      <fieldset>
        <button
          type="submit"
          formmethod="get"
          formaction="#form-kontakt-action-1"
        >
          Wyślij 1
        </button>
        <button type="reset">Wyczyść</button>
        <input
          type="submit"
          value="Wyślij 2"
          formmethod="get"
          formaction="#form-kontakt-action-2"
        />
      </fieldset>
    </form>
  );
};

export default FormularzKontaktowy;
