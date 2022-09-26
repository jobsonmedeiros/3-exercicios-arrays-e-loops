const numeros = [3, 3, 7, 3, 1, 3, 5, 10];

let ocorrenciasDePares = 0;
let somaDosPares = 0;
let haPar = false;

for (cadaNumero of numeros) {
  if (cadaNumero % 2 == 0) {
    haPar = true;
    somaDosPares += cadaNumero;
    ocorrenciasDePares++;
  }
}

if (!haPar) {
  console.log("Não há ocorrência de números pares.");
} else if (somaDosPares) {
  if (ocorrenciasDePares == 1) {
    console.log(
      `Há ${ocorrenciasDePares} número par e sua soma dá ${somaDosPares}.`
    );
  } else
    console.log(
      `Há ${ocorrenciasDePares} números pares e sua soma dá ${somaDosPares}.`
    );
}
