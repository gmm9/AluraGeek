import { conectaApi } from "./main.js";
const categoriaProduto = document.querySelectorAll('.categoria__produtos');

export default function exibirProduto(titulo, preco, imagem, categoria) {
 return `<div class="categoria__produtos--item">
  <img class="categoria__produtos--img" src="${imagem}" alt="imagem teste">
  <p class="categoria__produtos--titulo">${titulo}</p>
  <p class="categoria__produtos--valor">R$ ${preco},00</p>
  <a class="categoria__vertudo">Ver Produto</a>
  </div>` 

}

async function listaProdutos() {
  try {
      const listaApi = await conectaApi.listaProdutos();
      listaApi.forEach(prod => {
        
          if(prod.categoria == 'starwars') {
           categoriaProduto[0].innerHTML += exibirProduto(prod.titulo,prod.preco,prod.imagem,prod.categoria)
          } 
          if(prod.categoria == 'console') {
            categoriaProduto[1].innerHTML += exibirProduto(prod.titulo,prod.preco,prod.imagem,prod.categoria)
           }
           if(prod.categoria == 'diversos') {
            categoriaProduto[2].innerHTML += exibirProduto(prod.titulo,prod.preco,prod.imagem,prod.categoria)
           }

      });
  } catch (e) {
      console.log(e);
      categoriaProduto[0].innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }
}


 listaProdutos();
















