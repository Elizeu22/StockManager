
import './rangeData.css'
import { useState } from 'react';


function RangeData() {
    const [mostrarRangeData, setMostrarRangeData] = useState(false);

    return (
        <form className='containerRangeData01'>

            <div className="containerCadastrarEstoque">
                <div className='containerRangeData02'>
                    <p>Data Inicial</p>
                    <input type="date" className="form-control" placeholder="&#128197; Informe a data" />
                    <br></br>
                    <p>Data Final</p>
                    <input type="date" className="form-control" placeholder="&#128197; Informe a data" />
                </div>
            </div>


            <div className='containerRangeButtonFiltro'>
                <button type="button" className="btn btn-warning">Procurar</button>
            </div>
        </form>

    )

}


export default RangeData;