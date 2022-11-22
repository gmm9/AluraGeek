import { conectaApi } from "./main.js";

const formulario = document.querySelector('[data-formulario]');

async function incluirProduto(e) {
        e.preventDefault();

        const titulo = document.querySelector('[data-titulo]').value;
        const preco = document.querySelector('[data-preco]').value;
        const imagem = document.querySelector('[data-imagem]').value;
        const categoria = document.querySelector('[data-categoria]').value;
        const id = await conectaApi.geraId();

        // const id = document.querySelector('[data-desc]').value;
    try {
        await conectaApi.criaProdutos(titulo, preco, imagem, categoria,id);   
        window.location.href= "../logado.html"
    } catch (e) {
        alert(e);
    }
    };
    


formulario.addEventListener('submit', e => incluirProduto(e))