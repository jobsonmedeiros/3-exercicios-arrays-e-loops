const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

while(filaDeDentro.length < 5){
    let elementoARemover = filaDeFora.shift()
    filaDeDentro.push(elementoARemover)
}

console.log(filaDeDentro)
console.log(filaDeFora)