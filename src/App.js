import React, { useState } from "react";
import CollabForm from "./components/CollabForm";
import CollabList from "./components/CollabList";
import LGPDInfo from "./components/LGPDinfo";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  // Função para adicionar um colaborador
  const addCollab = (collab) => {
    setColaboradores([...colaboradores, collab]);
  };

  // Função para demitir um colaborador
  const demitirCollab = (id) => {
    setColaboradores(colaboradores.filter((collab) => collab.id !== id));
  };

  return (
    <div className="container">
      <h1>Administração de Colaboradores</h1>
      <CollabForm addCollab={addCollab} />
      <CollabList colaboradores={colaboradores} demitirCollab={demitirCollab} />
      <LGPDInfo />
    </div>
  );
}

export default App;

