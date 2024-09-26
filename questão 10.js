/*Encontrar a Média de um Array
Escreva uma função mediaArray(arr) que receba um array de números e
retorne a média dos valores.
Exemplo: mediaArray([1, 2, 3, 4, 5]) deve retornar 3. */


function mediaArray(arr) {
    if (arr.length === 0) {
        return undefined; 
    }

    let soma = 0; 
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    let media = soma / arr.length;

    return media; 
}

console.log(mediaArray([1, 2, 3, 4, 5])); // Saída: 3
console.log(mediaArray([10, 20, 30, 40])); // Saída: 25
console.log(mediaArray([5, 7, 9])); // Saída: 7
console.log(mediaArray([])); // Saída: undefined
