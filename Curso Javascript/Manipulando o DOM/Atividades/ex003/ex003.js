const aparecer = document.querySelector(".aparecerLista");
const esconder =  document.querySelector(".esconderLista");

const lista = document.querySelector(".lista")

function mostraTintas() {
    lista.setAttribute("style", "display:block")
}

esconder.addEventListener('click', (evento) => {
    lista.setAttribute("style", "display:none");
})