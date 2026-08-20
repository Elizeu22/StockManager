
import './ListarEstoque.css'
import FiltrarData from '../Modal-FiltroData/filtroData'
import RangeData from '../Modal-RangeData/rangeData'
import React, { useState, useEffect } from 'react';

function ListarEstoque() {


  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const [mostrarRangeData, setMostrarRangeData] = useState(false);

  const [produtos, setProdutos] = useState([]);

  const [carregando, setCarregando] = useState(true);


  useEffect(() => {
    const listarProdutos = async () => {
      try {
        const resposta = await fetch(
          'https://localhost:7154/produtos?pagina=1&tamanho=10'
        );

        console.log("Status:", resposta.status);

        if (!resposta.ok) {
          throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const dados = await resposta.json();

        console.log("Dados recebidos:", dados);
        console.log("É array?", Array.isArray(dados));

        setProdutos(dados);
      } catch (erro) {
        console.error('Erro ao listar os produtos:', erro);
      } finally {
        setCarregando(true);
      }
    };

    listarProdutos();
  }, []);



  return (
    <section>
      <div className="containerListarEstoque">
        <h3>Itens do Estoque</h3>
      </div>

      <div className="containerButton01">
        <div className="input-group mb-3">
          <div className="input-group-text">
          </div>
          <input type="text" className="form-control" placeholder="&#128269; Filtro pelo nome" />
        </div>
      </div>

      <div className="containerButton02">
        <button type="button" className="btn btn-outline-primary" onClick={() => setMostrarFiltro(!mostrarFiltro)}>&#128197; Filtro por data</button>
        {mostrarFiltro && <FiltrarData />}
      </div>


      <div className="containerButton03">
        <button type="button" className="btn btn-outline-primary" onClick={() => setMostrarRangeData(!mostrarRangeData)}>&#128200; Filtro por periodo</button>
        {mostrarRangeData && <RangeData />}
      </div>

      <div className="containerTable">
        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRICAO</th>
                <th>PRECO</th>
                <th>QUANTIDADE ESTOQUE</th>
                <th>DATA CADASTRO</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((produto) => {
                return (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.quantidadeEstoque}</td>
                    <td>{produto.dataCadastro}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}


export default ListarEstoque;