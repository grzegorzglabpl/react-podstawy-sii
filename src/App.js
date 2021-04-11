import React, { useState, useEffect } from "react";
import { useRoutes } from "hookrouter";
import Routers from "./routers";
import Hooks from "./hooks";
import global from "./global";

import "./style.css";

const Header = () => {
  global.useFormularzKontaktowy = Hooks.useFormularzKontaktowy();

  return (
    <header>
      <h1>Naglowek</h1>
      <h2>Witaj {global.useFormularzKontaktowy.kontaktImie}</h2>
    </header>
  );
};

const Nav = () => {
  return (
    <nav>
      <a href="/">Strona Glowna</a>
      <div />
      <a href="/kontakt">Kontakt</a>
    </nav>
  );
};

const Main = props => {
  const routeResult = useRoutes(Routers);
  return <main>{routeResult}</main>;
};

const Aside = () => {
  return <aside>marketing</aside>;
};

const Footer = () => {
  return <footer>stopka</footer>;
};

export default () => {
  return (
    <>
      <Header />
      <Nav />
      <Main title="Helloł" name="Grzesiek" />
      <Aside />
      <Footer />
    </>
  );
};
