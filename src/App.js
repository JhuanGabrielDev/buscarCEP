// Importação IMPORTANTE para a gestão de dados do projeto (Biblioteca useState)!
// import { useState } from 'react';

import React, { useState } from 'react';

// Importação da nossa API Via CEP!
import api from './api/api';

// IMportação da Biblioteca de Icones do React.
import { FiSearch } from 'react-icons/fi';

// Importação do Componente do Logotipo do Governo Federel!
import LogotipoBR from './img/logotipoBR.jpg';

// Imortação do Arquivo de estilizacão CSS!
import './css/style.css';

function App() {

  // Inserção da Biblioteca Estados (Manipulação dos dados)
  const [input, setInput] = useState('');

  // Cria um Objeto vazio, porem para receber os dados JSON da API para renderizar na Tela.
  const [cep, setCEP] = useState('');

  // Função do tipo assíncrono, para realizar o monitoramento de performace e execução do consumo dos dados pela API.
  async function handleSearch() {
    // Realiza a pesquisa via API.
    if (input === '') {
      alert("Digite um CEP Válido!");
      return false;
    }

    // Caso o usuario digite o CEP com o traço(-), sera removido para a realização  da pesquisa!
    const cepLimpo = input.replace(/\D/g, '');


     try {
    //  try = Realiza a tentativa de execução do codigo de acordo a informação passada!

   
      // Esta variavel constante, realiza uma requisição na API de como pegar o valor digitado no imput e realizar a consulta
      const retorno = await api.get(`${cepLimpo}/json`);

      // set - entrada de dados 
      // get - saida de dados 


      setCEP(retorno.data);
      setInput("");
    } catch {
      // catch = O retorno com a tratativa caso algo de errado na execução do try!
      alert("CEP  Inválido (não encontrado!");
      setInput("");
    }
  }
  return (
    <div className="boxPage">
      <header className="topTitle">
        <h1>Pesquise seu CEP:</h1>
        <h4>Aqui você pode encontrar qualquer localização do Brasil, basta realizar uma pesquisa de CEP.</h4>

        <main className="container">
          <h3>Pesquise seu CEP:</h3>
          <section className="boxForm">
            <input type="text" placeholder="Digite seu CEP aqui..." value={input} onChange={(event) => setInput(event.target.value)} />
            <button className="btnPesquisar" onClick={handleSearch}>
              <FiSearch size={20} />
            </button> 
          </section>
        </main>

        {/* { Só será  executado a section seguinte, quando houver resultado da pesquisa, se não , nada vai aparecer!} */}
        {Object.keys(cep).length > 0 && (
          <section className='bodyResult'>
            <h2>CEP: {cep.cep}</h2>

            <span>Endereço: {cep.logradouro}{cep.complemento ? ` - ${cep.complemento }` : ''}</span>

            <span>Bairro: {cep.bairro}</span>
            <br>
            </br>
            <span>Cidade: {cep.localidade} - {cep.uf}</span>

             <span>Estado: {cep.estado}</span>

             <span>Região: {cep.regiao}</span>

             <span>DDD: {cep.ddd}</span>
          </section>
        )}

        <footer className='end'>
          <img src={LogotipoBR} alt="Logotipo BR!" title="Logotipo BR!" className='logotipoBR' />
        </footer>
      </header>
    </div>
  );
}

export default App;
