import React, { useState } from "react";
import Hooks from "../hooks";
import "./FormularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy();

  /*
  const [kontaktImie, setKontaktImie] = useState("John");
  const [kontaktNazwisko, setKontaktNazwisko] = useState("Kowalsky");
  const [kontaktEmail, setKontaktEmail] = useState("test@test.pola");

  console.log(kontaktImie);
  console.log(kontaktNazwisko);
  console.log(kontaktEmail);
*/

  return !formularzKontaktowy.clickSubmit ? (
    <form
      id="formularzKontaktowy"
      className="formularzKontaktowy"
      onSubmit={formularzKontaktowy.onClickSubmit}
    >
      <h1>Formularz kontaktowy</h1>
      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label>Podaj imie:</label>
        <input
          id="imie"
          type="text"
          name="Imie"
          value={formularzKontaktowy.kontaktImie}
          onChange={formularzKontaktowy.onChangeImie}
        />

        <label>Podaj nazwisko:</label>
        <input
          id="nazwisko"
          type="text"
          name="Nazwisko"
          value={formularzKontaktowy.kontaktNazwisko}
          onChange={formularzKontaktowy.onChangeNazwisko}
        />
        <label>Podaj email:</label>
        <input
          id="email"
          type="email"
          name="Email"
          value={formularzKontaktowy.kontaktEmail}
          onChange={formularzKontaktowy.onChangeEmail}
          required
        />

        <div className="walidator">Niepoprawna wartosc dla pola imie</div>
      </fieldset>
      <fieldset>
        <legend>Zgody marketingowe</legend>
      </fieldset>
      <fieldset>
        <legend>Zgody na przetwarzanie RODO</legend>
      </fieldset>
      <fieldset>
        <button type="submit">Wyślij 1</button>
        <button type="reset">Wyczyść</button>
      </fieldset>
    </form>
  ) : (
    <section>
      <h2>Dziękujemy za wysłanie formularza.</h2>
    </section>
  );
};

export default FormularzKontaktowy;
