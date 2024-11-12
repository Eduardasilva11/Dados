import React, { useState } from "react";
import "../App.js";

const CollabForm = ({ addCollab }) => {
    const [name, setName] = useState("");
    const [cargo, setCargo] = useState("");
    const [salario, setSalario] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();
    const newCollab = {
        id: Date.now(),
        name,
        cargo,
        salario,
    };
    addCollab(newCollab);
    setName("");
    setCargo("");
    setSalario("");
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
        <button type="submit">Adicionar Colaborador</button>
    </form>
    );
};

export default CollabForm;
