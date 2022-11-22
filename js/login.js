const formulario = document.querySelector('#formulario')
const camposForm = document.querySelectorAll('[required]')
const erroMensagem = document.querySelector('.mensagem-erro');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    let resultadoEmail;
    let resultadoSenha;
    camposForm.forEach(campo => {
        erroMensagem.innerHTML = '';
        if(campo.name == 'email') {
            resultadoEmail = campo.value === 'admin'
        }
        if(campo.name == 'senha') {
            resultadoSenha = campo.value === 'admin'
        }
    })
    if(resultadoEmail && resultadoSenha) {
        window.location.href = './logado.html';
    } else {
        erroMensagem.textContent = 'Sua senha ou seu login está errado.'
    }
})


