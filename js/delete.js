const buttonDelete = document.querySelectorAll('.icone__deletar');



function pegaEvento() {
    addEventListener('click', e => deleteProduto(e))
};

async function deleteProduto(e) {
    let id;
    if(e.target.parentNode.className == "categoria__icone icone__deletar") {
            
        let valor = e.target.closest('.categoria__produtos--item');
        const pegaId = valor.querySelector('.categoria__id').textContent;
        id = pegaId;
    }
    const url = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
    }).then(res => res.json());
    console.log(url)
}