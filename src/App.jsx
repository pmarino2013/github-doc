import { useState } from "react";
import { ramaDefecto, conflictos } from "./data/articulos";

import logo from "./assets/github_logo.gif";

import ArticleMain from "./components/ArticleMain";
import FooterApp from "./components/FooterApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={darkMode ? "" : "bg-light"}
    >
      <main className="container">
        <hgroup className="title">
          <div className="flex-title">
            <h1>Github</h1>
            <img className="logo" src={logo} alt="logo github" />
          </div>
          <div className="mode">
            <fieldset>
              <label>
                <input
                  type="checkbox"
                  id="switch"
                  name="switch"
                  role="switch"
                  onChange={() => setDarkMode(!darkMode)}
                />
              </label>
            </fieldset>
          </div>

          <h3>
            Es un dolor de cabeza para vos aprender a usar Github?? Con esta web
            te explicaré las buenas prácticas.
          </h3>
        </hgroup>
        <section className="animate__animated animate__fadeIn">
          <ArticleMain articulo={ramaDefecto} />
        </section>
        <section className="animate__animated animate__fadeIn">
          <ArticleMain articulo={conflictos} />
        </section>
      </main>
      <footer>
        <FooterApp />
      </footer>
    </div>
  );
}

export default App;
