function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

document.querySelector('.tecla_pom').onclick = tocaSomPom;