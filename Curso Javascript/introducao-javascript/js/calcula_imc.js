function calculoIMC(peso, altura) {
    imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


