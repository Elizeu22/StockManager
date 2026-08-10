
import './CadastrarEstoque.css'

function CadastrarEstoque() {
    return (
        <form className='containerformulario'>

            <div className="containerCadastrarEstoque">
                <h4>&#128193; Cadastro de Produtos</h4>
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128709; Produto" />
            </div>

            <div className="containerCadastrarEstoque">
                <textarea className="form-control" placeholder="&#128709; Descrição do produto" rows={4}></textarea>
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128178; Preco produto" />
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128471; Quantidade produtos" />
            </div>

            <div className="containerBotoes">
                <button type="button" className="btn btn-primary">&#128190; Cadastrar</button>
                <button type="button" className="btn btn-primary">&#10060; Fechar</button>
            </div>
        </form>
    )
}


export default CadastrarEstoque;