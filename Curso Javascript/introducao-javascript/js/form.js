const botaoAdicionarPacientes = document.querySelector('#adicionar-paciente')

botaoAdicionarPacientes.addEventListener('click', (event) => {

    event.preventDefault();

    const form = document.querySelector('#form-adiciona')
    
    var paciente = obtemPacienteDoFormulario(form)
    
    adicionaPacienteNaTabela(paciente)
    
})


function obtemPacienteDoFormulario(form) {
    var paciente = {
        nomeForm: form.nome.value,
        pesoForm: form.peso.value,
        alturaForm: form.altura.value,
        gorduraForm: form.gordura.value,
        imc: calculoIMC(form.peso.value, form.altura.value)
    }
    
    return(paciente)
}

validaPaciente()

// validaPaciente()
