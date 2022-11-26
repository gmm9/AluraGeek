import { conectaApi } from "./main.js"
import { mostraProdutos } from "./forEach.js"
const lista = document.querySelector('[data-lista]');

async function buscarProduto(e) {
    e.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    console.log(dadosDePesquisa)

    if(dadosDePesquisa.length > 0) {
    lista.classList.remove('displayNone')
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);
    console.log(busca)
    lista.innerHTML = '';

    // while(lista.firstChild) {
    //     lista.removeChild(lista.firstChild)
    // }
    
    busca.forEach(prod => lista.innerHTML += mostraProdutos.exibirProduto(prod.titulo,prod.preco,prod.imagem,prod.categoria));
    } else {
        lista.classList.add('displayNone')
    }

}

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');
botaoPesquisa.addEventListener('click', evento => buscarProduto(evento))