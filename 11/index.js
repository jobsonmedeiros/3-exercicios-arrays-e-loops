const original = [5, 7, 13, 17, 26, 34, 118, 245];
const selecao = [];

// crie um novo array que contenha apenas os números do
// array original que estejam entre 10 e 20 ou que sejam
// maiores que 100. Ao final, imprima a variável que guarda o novo array.

for (cadaNumero of original) {
  if ((cadaNumero > 10 && cadaNumero < 20) || cadaNumero > 100) {
    selecao.push(cadaNumero);
  }
}

if (selecao.length == 0) {
  console.log("Nada a exibir.");
} else {
  console.log(selecao);
}
