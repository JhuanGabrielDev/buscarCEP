// Todos os componentes do React.js, o seu formato de arquivo deve ser em JSX.

import React from "react";
import LogotipoBR from '../img/logotipoBR.jpg';

const LogotipoProjeto = () => {
    return (
        <div>
            <img src={LogotipoBR} alt="Logotipo do Brasil" title="Logotipo do Brasil" />
        </div>
    )
}

// Exporta o Componente React pare o consumo das outras camadas do Projeto!

export default LogotipoProjeto;