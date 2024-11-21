import React, { useState } from "react";

const CollabForm = ({ addCollab }) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [salario, setSalario] = useState("");
  const [tempoContrato, setTempoContrato] = useState(""); // Adicionando estado para o tempo de contrato

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCollab = {
      id: Date.now(),
      name,
      cargo,
      salario,
      tempoContrato, // Incluindo o tempo de contrato no objeto colaborador
    };
    addCollab(newCollab); // Adicionando o colaborador
    setName("");
    setCargo("");
    setSalario("");
    setTempoContrato(""); // Limpando o campo de tempo de contrato após o envio
  };

  return (
    <form onSubmit={handleSubmit} className="collab-form">
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Salário"
        value={salario}
        onChange={(e) => setSalario(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Tempo de Contrato (meses)"
        value={tempoContrato}
        onChange={(e) => setTempoContrato(e.target.value)} // Atualizando o valor do tempo de contrato
        required
      />
      <button type="submit">Adicionar Colaborador</button>
    </form>
  );
};

export default CollabForm;
