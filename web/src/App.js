import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";
import "./global.css";
import "./Sidebar.css";
import "./Main.css";

import DevForm from "./components/DevForm";
import DevItem from "./components/Devitem";

//os 3 conceitos mais importantes para saber React:
//componente: é um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação. O ideal é der apenas um compotente por aba.
//propriedade: informaçães que um compotente PAI passa para o componente FILHO
//estado: informações mantidas pelo compontente (Lembrar: imutabilidade)

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
