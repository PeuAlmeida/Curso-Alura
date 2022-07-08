var pacientes = document.querySelectorAll('.paciente');
const botaoAdicionarPacientes = document.querySelector('#adicionar-paciente')
console.log(pacientes)

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
    peso = peso;
    altura = altura;
    resultado = peso / (altura * altura);
    return resultado.toFixed(2);
}

validaPaciente();

botaoAdicionarPacientes.addEventListener('click', (event) => {

    event.preventDefault();

    const form = document.querySelector('#form-adiciona')
    const tabela = document.querySelector('#tabela-pacientes')

    var nomeForm = form.nome.value
    var pesoForm = form.peso.value
    var alturaForm = form.altura.value
    var gorduraForm = form.gordura.value
    
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente')
    
    var nomeTd = document.createElement('td')
    nomeTd.classList.add('info-nome');
    nomeTd.textContent = nomeForm
    pacienteTr.appendChild(nomeTd);

    var pesoTd = document.createElement('td')
    pesoTd.classList.add('info-peso');
    pesoTd.textContent = pesoForm
    pacienteTr.appendChild(pesoTd);

    var alturaTd = document.createElement('td')
    alturaTd.classList.add('info-altura');
    alturaTd.textContent = alturaForm
    pacienteTr.appendChild(alturaTd)

    var gorduraTd = document.createElement('td');
    gorduraTd.classList.add('info-gordura');
    gorduraTd.textContent = gorduraForm;
    pacienteTr.appendChild(gorduraTd)

    var imcTd = document.createElement('td');
    imcTd.classList.add('info-imc');
    pacienteTr.appendChild(imcTd)

    tabela.appendChild(pacienteTr)    

    pacientes = document.querySelectorAll('.paciente');
    validaPaciente()
})
