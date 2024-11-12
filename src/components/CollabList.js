import React from "react";
import "./styles.css"

const CollabList = ({ colaboradores, demitirCollab }) => {
    return (
    <div className="collab-list">
        <h2>Lista de Colaboradores</h2>
        <table>
        <thead>
            <tr>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {colaboradores.map((collab) => (
            <tr key={collab.id}>
                <td>{collab.name}</td>
                <td>{collab.cargo}</td>
                <td>{collab.salario}</td>
                <td>
                <button onClick={() => demitirCollab(collab.id)}>Demitir</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    );
};

export default CollabList;
