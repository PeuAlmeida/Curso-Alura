function validaPaciente(paciente) {
    
    validaPeso = true;
    validaAltura = true;

    if(paciente.pesoForm >= 1000 || paciente.pesoForm <= 0) {
        paciente.pesoForm = 'Peso Invalido'
        validaPeso = false;
    }
    
    if(paciente.alturaForm >= 3.0 || paciente.alutraForm <= 0) {
        paciente.alturaForm = 'Altura Invalida'
        validaAltura = false
    }

    if(validaAltura && validaPeso) {
        const imc = calculoIMC(paciente.pesoForm, paciente.alturaForm)
        paciente.imc = imc
        return true
    }
}
