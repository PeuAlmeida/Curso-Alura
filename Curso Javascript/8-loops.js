console.log("Trabalhando com repetições \n")


const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 18;
let estaAcompanhada = true;
let temPassagem = false;
const destino = "Curitiba";
let destinoEncontrado = 0;

console.log(`Destinos possiveis:`);
console.log(listaDeDestinos);

const podeComprar = (idadeComprador >= 18 || estaAcompanhada == true) 
console.log(`\n${podeComprar}`);

let contador = 0;

while(listaDeDestinos.length - 1 >= contador) {
    if(listaDeDestinos[contador] == destino) {
        console.log(`\nTemos o destino ${destino}`);
        destinoEncontrado = destino
        break
    }
    contador += 1;
}

if(destinoEncontrado == 0) {
    console.log("não temos o destino")
}

if(podeComprar && destinoEncontrado == destino) {
    console.log("Boa Viajem!! ")
} else {
    console.log("Desculpe tivemos um erro")
}

for(let i = 0; i < listaDeDestinos.length; i++) {
    
}