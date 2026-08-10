
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";


import CadastroEstoque from './Components/Formulario-CadastrarEstoque/CadastrarEstoque'
import FiltrarData from './Components/Modal-FiltroData/filtroData'



const Routes = () => {
    return (
        <BrowserRouter>
            <Route Component={CadastroEstoque} path="/src/Components/Formulario-CadastrarEstoque/CadastrarEstoque.jsx" exact />
            <Route Component={FiltrarData} path="/src/Components/Modal-FiltroData/filtroData.jsx" exact />
        </BrowserRouter>
    )
}


export default Routes;