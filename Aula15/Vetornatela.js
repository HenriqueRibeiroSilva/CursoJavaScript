let valor = [8,1,7,4,2,9]
valor.sort()

// for (let index = 0; index < valor.length; index++) {
//     valor.sort
//     console.log(`A posição ${index} tem o valor ${valor[index]}`)
// }

for (let pos in valor) {
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}