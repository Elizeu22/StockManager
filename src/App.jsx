import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/header'
import Section from './Components/Section/section'
import NavBar from './Components/NavBar/navbar'
import CadastroEstoque from './Components/Formulario-CadastrarEstoque/CadastrarEstoque'
import FiltrarData from './Components/Modal-FiltroData/filtroData'
import FormListarEstque from './Components/Formularios-ListarEstoque/ListarEstoque'


function Home() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Section />
      <NavBar />
      <FormListarEstque />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-estoque" element={<CadastroEstoque />} />
        <Route path="/filtro-Data" element={<FiltrarData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
