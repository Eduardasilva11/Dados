import React, { useState } from "react";
import CollabForm from "./components/CollabForm";
import CollabList from "./components/CollabList";
import LGPDInfo from "./components/LGPDinfo";
import Swal from 'sweetalert2';
import "./components/styles.css";



function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [currentPage, setCurrentPage] = useState(1);
  const collabsPerPage = 5;

  const addCollab = (collab) => {
    setColaboradores([...colaboradores, collab]);
  };

  const demitirCollab = (id) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você está prestes a demitir este colaborador!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, demitir!',
    }).then((result) => {
      if (result.isConfirmed) {
        setColaboradores(colaboradores.filter((collab) => collab.id !== id));
        Swal.fire('Demitido!', 'O colaborador foi demitido com sucesso.', 'success');
      }
    });
  };

  const editCollab = (id) => {
    Swal.fire({
      title: 'Editar Colaborador',
      input: 'text',
      inputValue: colaboradores.find((collab) => collab.id === id).name,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        const updatedCollabs = colaboradores.map((collab) => 
          collab.id === id ? { ...collab, name: result.value } : collab
        );
        setColaboradores(updatedCollabs);
      }
    });
  };

  const filteredCollabs = colaboradores.filter((collab) =>
    collab.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === "name")  {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "cargo") {
      return a.cargo.localeCompare(b.cargo);
    }
    return 0;
  });

  const indexOfLastCollab = currentPage * collabsPerPage;
  const indexOfFirstCollab = indexOfLastCollab - collabsPerPage;
  const currentCollabs = filteredCollabs.slice(indexOfFirstCollab, indexOfLastCollab);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredCollabs.length / collabsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Administração de Colaboradores</h1>
      <CollabForm addCollab={addCollab} />
      <p><br></br></p>
      <input
        type="text"
        placeholder="Buscar Colaborador"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <p><br></br></p>
        <label>Ordenar por: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">Nome</option>
          <option value="cargo">Cargo</option>
        </select>
      </div>
      <CollabList
        colaboradores={currentCollabs}
        demitirCollab={demitirCollab}
        editCollab={editCollab}
      />
      <div>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
      <LGPDInfo />
    </div>
  );
}

export default App;