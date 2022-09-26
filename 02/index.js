const letras = ["A", "a", "i", "C", "E", "e"];

let contEMinusculo = 0
let contEMaiusculo = 0

for (let cadaLetra of letras){
    if (cadaLetra == "e"){
        contEMinusculo++
    }

    if (cadaLetra == "E"){
        contEMaiusculo++
    }
}

if (contEMinusculo == 0) {
    console.log("Nenhuma ocorrência de \"e\" encontrada.")
} else {
    console.log("Ocorrências de \"e\" encontradas: " + contEMinusculo)
}

if (contEMaiusculo == 0) {
    console.log("Nenhuma ocorrência de \"E\" encontrada.")
} else {
    console.log("Ocorrências de \"E\" encontradas: " + contEMaiusculo)
}