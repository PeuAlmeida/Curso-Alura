var pacientes = document.querySelectorAll('.paciente');

function validaPaciente() {
    pacientes.forEach(element => {
    const peso = element.querySelector('.info-peso').textContent
    const altura = element.querySelector('.info-altura').textContent
    
    var validaAltura = true
    var validaPeso = true
    
    if(peso >= 1000 || peso <= 0) {
        element.querySelector('.info-imc').textContent = 'Peso Invalido'
        validaPeso = false;
    }
    
    if(altura >= 3.0 || altura <= 0) {
        element.querySelector('.info-imc').textContent = 'Altura Invalida'
        validaAltura = false
    }

    if(validaAltura && validaPeso) {
        const imc = calculoIMC(peso,altura)
        element.querySelector('.info-imc').textContent = imc
    }
    
    });
}


function calculoIMC(peso, altura) {
    imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


