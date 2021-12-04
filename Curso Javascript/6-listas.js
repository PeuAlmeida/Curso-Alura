console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`, 
    `São paulo`,
    `Rio de Janeiro`
);

console.log(`Destinos possiveis: `);
listaDeDestinos.push(`Curitiba`); //Adicionando um Item na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1)

console.log(listaDeDestinos)


