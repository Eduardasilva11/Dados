import React, { useState } from "react";

function LGPDInfo() {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <button onClick={toggleInfo} style={buttonStyle}>
        LGPD
      </button>
      {showInfo && (
        <div style={infoStyle}>
          <p>
            A Lei Geral de Proteção de Dados Pessoais (LGPD) é uma legislação
            brasileira que regula o uso de dados pessoais para garantir a
            privacidade e a segurança dos indivíduos.
          </p>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  position: "fixed",
  top: "10px",
  right: "10px",
  padding: "10px",
  backgroundColor: "#FF0000",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const infoStyle = {
  position: "fixed",
  top: "50px",
  right: "10px",
  padding: "10px",
  backgroundColor: "#f2f2f2",
  border: "1px solid #ccc",
  borderRadius: "5px",
  width: "250px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
};

export default LGPDInfo;
