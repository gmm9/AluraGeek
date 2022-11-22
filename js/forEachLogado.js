import { conectaApi } from "./main.js";
const categoriaProduto = document.querySelector('.categoria__produtos');


export default function exibirProdutoEditavel(titulo, preco, imagem, id) {
 return `       <div class="categoria__produtos--item">
               <img class="categoria__produtos--img" src="${imagem}" alt="imagem teste">
               <div class="categoria__box">
               <button class="categoria__icone icone__deletar" onclick="deleteProduto()"><img src="./img/lixeira.svg" alt=""></button>
               <button class="categoria__icone icone__editar"><img src="./img/caneta.svg" alt=""></button>
               </div>
               <p class="categoria__produtos--titulo">${titulo}</p>
               <p class="categoria__produtos--valor">R$ ${preco},00</p>
               <p class="categoria__id">${id}</p>
           </div>
 `
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
            listaApi.forEach(prod => {
            categoriaProduto.innerHTML += exibirProdutoEditavel(prod.titulo,prod.preco,prod.imagem,prod.id,prod.categoria,);
      });
  } catch (e) {
      console.log(e);
      categoriaProduto[0].innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }
}


 listaProdutos();
















