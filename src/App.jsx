import data1 from "./data/data1.json";
import { ramaDefecto, conflictos } from "./data/articulos";
import logo from "./assets/github_logo.gif";

import ArticleMain from "./components/ArticleMain";
import ArtcleLista from "./components/ArtcleLista";

function App() {
  return (
    <div>
      <main className="container">
        <hgroup className="title">
          <div className="flex-title">
            <h1>Github</h1>
            <img className="logo" src={logo} alt="logo github" />
          </div>

          <h3>
            Es un dolor de cabeza para vos aprender a usar Github?? Con esta web
            te explicaré las buenas prácticas.
          </h3>
        </hgroup>
        <ArticleMain articulo={ramaDefecto} />
        <ArtcleLista
          title="Aquí hay algunas razones por las cuales usar la rama principal como rama por defecto es una buena práctica"
          data1={data1}
        />
        <ArticleMain articulo={conflictos} />
      </main>
    </div>
  );
}

export default App;
