const botao = document.querySelector("#calcular");

botao.addEventListener('click', (evento) => {
    console.log('Fui clicado')
    document.querySelector('.resultado').innerHTML = 'Fui clicado'
})
