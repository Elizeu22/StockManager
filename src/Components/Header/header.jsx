

import './header.css'
import { useNavigate } from 'react-router-dom';



function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <p>&#127968;  /  Estoque</p>
            <div>
                <button type="button" className="btn btn-outline-primary" onClick={()=> navigate("/cadastro-estoque")}> &#8724;  Adicionar novo Produto</button>
            </div>
        </header>

    )
}


export default Header;