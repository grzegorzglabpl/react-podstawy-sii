import React, { useState, useEffect } from "react";
import Hooks from "../hooks";
import "./FormularzKontaktowy.css";
import global from "../global";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy();

  const [poprawneAdresyEmail, setPoprawneAdresyEmail] = useState([]);

  useEffect(() => {
    const getValidEmails = async () => {
      let response = await fetch("dane.json");
      let jsonData = await response.json();
      console.log(jsonData);
      setPoprawneAdresyEmail(jsonData);
    };

    getValidEmails();
  }, []);

  //const [zgodaRodo, setZgodaRodo] = useState(true);

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
          value={global.kontaktImie}
          onChange={global.useFormularzKontaktowy.onChangeImie}
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
        <legend>TAK</legend>
        <input
          id="zgodaTak"
          type="radio"
          name="zgodaRODO"
          value="true"
          checked={formularzKontaktowy.zgodyRodo}
          onChange={formularzKontaktowy.onChangeRodo}
        />
        <legend>NIE</legend>
        <input
          id="zgodaTak"
          type="radio"
          name="zgodaRODO"
          value="false"
          checked={!formularzKontaktowy.zgodyRodo}
          onChange={formularzKontaktowy.onChangeRodo}
        />
      </fieldset>
      <fieldset>
        <legend>Poprawne Adresy Email</legend>
        <ul>
          {poprawneAdresyEmail.map(email => {
            return <li>{email}</li>;
          })}
        </ul>
      </fieldset>
      <fieldset>
        <button type="submit">Wyślij</button>
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
