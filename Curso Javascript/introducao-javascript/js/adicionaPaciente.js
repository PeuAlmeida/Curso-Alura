function adicionaPacienteNaTabela(paciente) {
    
    const tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(montaTr(paciente))
}

function montaTr(paciente) {
    
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nomeForm, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.pesoForm, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.alturaForm, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gorduraForm, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado;
    td.classList.add(classe)

    return td
}