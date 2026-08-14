
import { UNSAFE_getPatchRoutesOnNavigationFunction } from 'react-router-dom';
import './CadastrarEstoque.css'
import { useState } from 'react'


function CadastrarEstoque() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidadeEstoque, setQuantidadeEstoque] = useState('');



    const gravacaoDados = async () => {
        const novoProduto = {
            nome: nome,
            descricao: descricao,
            preco: Number(preco),
            quantidadeEstoque: Number(quantidadeEstoque)
        };

        try {
            const response = await fetch('https://localhost:7154/produtos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(novoProduto)
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar o produto');
            }

            const data = await response.json();

            console.log('Produto cadastrado:', data);

            alert('Produto cadastrado com sucesso!');

            //Limpar formulario

            setProduto('');
            setDescricao('');
            setPreco('');
            setQuantidade('');
        }
        catch (error) {
            console.error(error);
            alert('Erro ao cadastrar produto')
        }
    };



    return (
        <form className='containerformulario'>

            <div className="containerCadastrarEstoque">
                <h4>&#128193; Cadastro de Produtos</h4>
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128709; Produto" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>

            <div className="containerCadastrarEstoque">
                <textarea className="form-control" placeholder="&#128709; Descrição do produto" rows={4} value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128178; Preco produto" value={preco} onChange={(e) => setPreco(e.target.value)} />
            </div>

            <div className="containerCadastrarEstoque">
                <input type="text" className="form-control" placeholder="&#128471; Quantidade produtos" value={quantidadeEstoque} onChange={(e) => setQuantidadeEstoque(e.target.value)} />
            </div>

            <div className="containerBotoes">
                <button type="button" className="btn btn-primary" onClick={gravacaoDados}>&#128190; Cadastrar</button>
                <button type="button" className="btn btn-primary">&#10060; Fechar</button>
            </div>
        </form>
    )
}


export default CadastrarEstoque;