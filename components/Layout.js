import React from "react";
import Nav from "../components/Nav";
import Meta from './Meta';
import Header from "../components/Header";

import Styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
    <Meta />
      <Nav />
      <div className={Styles.container}>
        <main className={Styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
