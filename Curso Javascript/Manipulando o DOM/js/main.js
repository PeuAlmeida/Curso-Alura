const controleAjuste = document.querySelectorAll("[data-controle]")


controleAjuste.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) 
        console.log(evento)   
    })
        
    })

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");
    if(operacao == "+") {
        peca.value = parseInt(peca.value) + 1;
    }else {
        peca.value = parseInt(peca.value) - 1;
    }
}