const numeros = [5, 12, 10, 8, 11, 4, 1]

let maiorNumero = numeros[numeros.length - 1];
let menorNumero = numeros[0];

for(let i = 1; i < numeros.length; i++){
// Achando o menor número    
    if(menorNumero > numeros[i]){
        menorNumero = numeros[i]
    }
// Achando o maior número
    if(maiorNumero < numeros[i]){
        maiorNumero = numeros[i]
    }
}

// Achando a maior diferença 
const maiorDiferenca = maiorNumero - menorNumero

console.log(`A maior diferença é (${maiorNumero}) - (${menorNumero}) = ${maiorDiferenca}`)