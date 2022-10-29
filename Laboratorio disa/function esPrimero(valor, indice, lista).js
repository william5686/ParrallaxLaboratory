function esPrimero(valor, indice, lista) {
    return (lista.indexOf(valor) === indice);
}

function noEsPrimero(valor, indice, lista) {
    return !(lista.indexOf(valor) === indice);
}

l1 = ["F","FI09","JM15","FI29"]  // tiene repetidos
l2 = ["FI29","FI09","JM15","FI28"]  // no tiene repetidos

console.log("l1 tiene repetidos?", l1.some(noEsPrimero));
console.log("l2 tiene repetidos?", l2.some(noEsPrimero));
console.log("l1 todos diferentes?", l1.every(esPrimero));
console.log("l2 todos diferentes?", l2.every(esPrimero));