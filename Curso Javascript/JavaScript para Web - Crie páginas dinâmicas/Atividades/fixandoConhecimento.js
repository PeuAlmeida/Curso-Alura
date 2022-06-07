const listaDeItens = document.querySelectorAll('.menu__item');

for(let contador = 0; contador < listaDeItens.length; contador++) {

    let item = listaDeItens[contador];

    item.onclick = function () {
        listaDeItens.forEach(element => {
            element.classList.remove('ativa')
        });
        
        item.classList.add('ativa')
    }
}