function tocaSom(elementoAudio) {

    elemento = document.querySelector(elementoAudio);

    if(elemento.localName == 'audio' && elemento) {
        elemento.play()
    }

    else {
        console.log('Elemento não encontrado')
    }
}
 

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1]
    
    const audioId = `#som_${instrumento}`;
    
    
    tecla.onclick = function () {
        tocaSom(audioId);
    }
    
    tecla.onkeydown = function(evento) {
        
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');

        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}