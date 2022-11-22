const buttonDelete = document.querySelectorAll('.icone__deletar');



function deleteProduto() {
    addEventListener('click', e => {
        let valor = e.target.parentNode.parentNode.parentNode;
        let pegaId = valor.querySelector('.categoria__id').textContent;

        console.log(pegaId)
    })
};