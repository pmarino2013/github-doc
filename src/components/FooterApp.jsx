import React from "react";

const FooterApp = () => {
  return (
    <hgroup className="footer-flex">
      {/* <div className="flex-title">
            <h1>Github</h1>
            <img className="logo" src={logo} alt="logo github" />
          </div> */}

      <h3>Hecho con 🤍 por Pablo Marino &copy; {new Date().getFullYear()}</h3>
    </hgroup>
  );
};

export default FooterApp;
