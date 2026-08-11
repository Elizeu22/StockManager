
import './filtroData.css'
import { useState } from 'react';


function FiltroData() {
    const [mostrarFiltroData, setMostrarFiltroData] = useState(false);

    return (
        <form className='container01'>

            <div className="containerCadastrarEstoque">
                <div className='container02'>
                    <input type="date" className="form-control" placeholder="&#128197; Informe a data" />
                </div>
            </div>


            <div className='containerButtonFiltro'>
                <button type="button" class="btn btn-warning">Procurar</button>
            </div>
        </form>

    )

}


export default FiltroData;