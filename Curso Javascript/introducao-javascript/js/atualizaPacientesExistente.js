const pacientes = document.querySelectorAll('.paciente');

    pacientes.forEach(paciente => {

        const peso = paciente.querySelector('.info-peso').innerText;
        const altura = paciente.querySelector('.info-altura').innerText;

        paciente.querySelector('.info-imc').innerText = calculoIMC(peso, altura)

    });