const numeros = [11, 22, 10, 87, 18, 284];

let ocorrecias = 0;
let indice = [];

for (let cont = 0; cont < numeros.length; cont++) {
  if (numeros[cont] == 10) {
    ocorrecias++;
    indice.push(cont);
  }
}

if (ocorrecias == 0) {
  console.log("-1");
} else {
  if (ocorrecias == 1) {
    console.log(`Há ${ocorrecias} ocorrência no índice ${indice}`);
  } else {
    console.log(`Há ${ocorrecias} ocorrências nos índices ${indice}`);
  }
}
