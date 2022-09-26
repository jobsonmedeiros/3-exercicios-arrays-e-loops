const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let nomesComA = []
let qtdNomesComA = 0

for (let cadaNome of nomes){
    if(cadaNome.charAt(0) == "a" || cadaNome.charAt(0) == "A"){
        qtdNomesComA++
        nomesComA.push(cadaNome)
    }
}

console.log(qtdNomesComA)
console.log(nomesComA)

console.log(`Há ${qtdNomesComA} nome(s) que começam com a letra \"A\".`)