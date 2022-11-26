import { conectaApi } from "./main.js";

const formulario = document.querySelector('[data-formulario]');

async function incluirProduto(e) {
        e.preventDefault();

        const titulo = document.querySelector('[data-titulo]').value;
        const preco = document.querySelector('[data-preco]').value;
        const imagem = document.querySelector('[data-imagem]').value;
        const categoria = document.querySelector('[data-categoria]').value;


        try {
            if(window.location.href.length == 35) {
                await conectaApi.criaProdutos(titulo, preco, imagem, categoria);   
                window.location.href= "../logado.html"
            }
        } catch (e) {
            console.log('Produto Atualizado');
        }
    };
    
    console.log(window.location.href.length)


formulario.addEventListener('submit', e => incluirProduto(e))