const original = [1, 4, 12, 21, 53, 88, 112];
let selecaoDosPares = []


for (cadaNumero of original){
    if (cadaNumero % 2 == 0) selecaoDosPares.push(cadaNumero)
}

console.log(selecaoDosPares)