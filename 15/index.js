const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for(let cadaNumero of original){
    if (cadaNumero % 2 == 0) pares.push(cadaNumero)
    else impares.push(cadaNumero)
} 

console.log(pares)
console.log(impares)