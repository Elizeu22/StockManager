
import './ListarEstoque.css'
import { useState } from 'react';
import FiltrarData from '../Modal-FiltroData/filtroData'

function ListarEstoque() {


  const [mostrarFiltro, setMostrarFiltro] = useState(false);

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
        <button type="button" className="btn btn-outline-primary">&#128200; Filtro por periodo</button>
      </div>

      <div className="containerTable">
        <div className="table-responsive-sm">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>City</th>
                <th>Country</th>
                <th>Sex</th>
                <th>Example</th>
                <th>Example</th>
                <th>Example</th>
                <th>Example</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>


  )
}


export default ListarEstoque;