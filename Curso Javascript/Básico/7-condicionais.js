console.log("Trabalhando com condicionais")


const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 17;
let estaAcompanhada = false;
const temPassagem = true;

console.log(`Destinos possiveis: `);
console.log(listaDeDestinos);

if (idadeComprador >= 18 | estaAcompanhada == true) {
    console.log("Compador maior de idade")
    listaDeDestinos.splice(1, 1) //Removendo item

// } else if (estaAcompanhada == true) {
//     console.log("Compador está acompanhado")
//     listaDeDestinos.splice(1, 1) //Removendo item  {

} else {
    console.log("Não é maior de idade e não posso vender")
}

console.log("Embarque: \n\n")

if(idadeComprador >= 18 && temPassagem == true) {
    console.log("Boa viajem !!")
}

else {
    console.log("Você não pode embarcar")
}
