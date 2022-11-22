async function listaProdutos() {
    const conexao = await fetch('http://localhost:3000/produtos');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}

async function criaProdutos(titulo, preco, imagem, categoria) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id: '##111111',
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
}

export const conectaApi = {
    listaProdutos,criaProdutos
}