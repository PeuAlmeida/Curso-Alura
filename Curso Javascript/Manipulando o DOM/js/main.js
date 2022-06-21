const controleAjuste = document.querySelectorAll(".controle-ajuste")


controleAjuste.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        if(evento.target.textContent === "+") {
            elemento.value = parseInt(elemento.value) + 1;
            console.log("click")
        } else {
            elemento.value = parseInt(elemento.value) - 1;
        }
        
    })

})