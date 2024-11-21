import React from "react";
import Swal from 'sweetalert2';

const CollabList = ({ colaboradores, demitirCollab, editCollab }) => {
  return (
    <div className="collab-list">
      <h2>Lista dos Colaboradores</h2>
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
          {colaboradores.length === 0 ? (
            <tr>
              <td colSpan="4">Nenhum colaborador encontrado</td>
            </tr>
          ) : (
            colaboradores.map((collab) => (
              <tr key={collab.id}>
                <td>{collab.name}</td>
                <td>{collab.cargo}</td>
                <td>{collab.salario}</td>
                <td>
                  <button onClick={() => editCollab(collab.id)}>Editar</button>
                  <button onClick={() => Swal.fire(`Detalhes de ${collab.name}`, `Cargo: ${collab.cargo}\nSalário: ${collab.salario}`, 'info')}>Ver Detalhes</button>
                  <button onClick={() => demitirCollab(collab.id)}>Demitir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CollabList;
