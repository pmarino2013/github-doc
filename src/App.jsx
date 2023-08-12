import { useState } from "react";
import info from "./data/articulos";

import logo from "./assets/github_logo.gif";

import ArticleMain from "./components/ArticleMain";
import FooterApp from "./components/FooterApp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      data-theme={darkMode ? "dark" : "light"}
      className={darkMode ? "b-dark" : "bg-light"}
    >
      <main className="container">
        <hgroup className="title">
          <div className="flex-title">
            <h1>Github</h1>
            <img className="logo" src={logo} alt="logo github" />
            <h2>Doc</h2>
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
        <div className="row">
          <div className="col-md-3">
            <aside className="fixed">
              <nav>
                <details>
                  <summary>
                    Índice <img className="logo-indice" src={logo} alt="logo" />
                  </summary>
                  <ul>
                    {info.map((item, index) => (
                      <li key={index}>
                        <a href={`#${index}`}>
                          <small>
                            {index + 1}-{item.titulo}
                          </small>
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </nav>
            </aside>
          </div>

          <div className="col-md-9">
            {info.map((item, index) => (
              <section
                key={index}
                id={index}
                className="animate__animated animate__fadeIn"
              >
                <ArticleMain articulo={item} />
              </section>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <FooterApp />
      </footer>
    </div>
  );
}

export default App;
