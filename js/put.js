const titulo = document.querySelector('[data-titulo]');
const preco = document.querySelector('[data-preco]');
const imagem = document.querySelector('[data-imagem]');
const categoria = document.querySelector('[data-categoria]');
const formulario = document.querySelector('[data-formulario]');


function eventoPut() {
    addEventListener('click', e => editarProduto(e))
}

 function editarProduto(e) {
    if(e.target.parentNode.className == "categoria__icone icone__editar"){
        let valor = e.target.closest('.categoria__produtos--item');
        const pegaId = valor.querySelector('.categoria__id').textContent;
        window.location.href= "../produtos.html?" + pegaId;
        // const url = await fetch (`http://localhost:3000/produtos/${pegaId}`).then((response) => response.json())
        // .then((data) => produtoNovo(data))
    }
}
// console.log(window.location.href)
function queryString(parameter) {  
    let newArray = parameter.split("").reverse();
    let pegaId = []
    for(let i = 0; i < 2; i++) {
        // console.log(newArray[i])
        if(newArray[i] != '?') {            
            pegaId[i] = newArray[i];
        }

    }
    recebeId(pegaId.reverse().join(""))
}
queryString(window.location.href)


function recebeId(id) {
    let pegaId = Number(id);
    if(typeof pegaId == 'number') {
            listaProdutosComId(pegaId)
           
    }
}


async function listaProdutosComId(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`);
    const conexaoConvertida = await conexao.json()
   Object.keys(conexaoConvertida).forEach(key => {
    titulo.value = conexaoConvertida['titulo'];
    preco.value = conexaoConvertida['preco'];
    imagem.value = conexaoConvertida['imagem'];
    categoria.value = conexaoConvertida['categoria'];

    formulario.addEventListener('submit', e => {
    e.preventDefault();
    
    atualizaProdutos(true,titulo.value, preco.value, imagem.value, categoria.value, id)
    window.location.href= "../logado.html"
})


    // console.log(key,conexaoConvertida[key])
   });
}


async function atualizaProdutos(valido,titulo, preco, imagem, categoria, id) {  
    if(valido){

        if(true){
        const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            preco: preco,
            imagem: imagem,
            categoria: categoria  
        })
    })
    if(!conexao.ok) {
        throw new Error('Não foi possivel enviar o produto');
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}}
};