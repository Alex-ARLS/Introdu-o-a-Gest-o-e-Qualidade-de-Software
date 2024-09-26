/*Ordenar um Array em Ordem Crescente
Escreva uma função ordenarArray(arr) que receba um array de números e
o retorne ordenado em ordem crescente.
Exemplo: ordenarArray([3, 1, 4, 2, 5]) deve retornar [1, 2, 3, 4, 5]*/

function ordenarArray(arr) {
    return arr.sort((a, b) => a - b); 
}

console.log(ordenarArray([3, 1, 4, 2, 5])); 
console.log(ordenarArray([10, 5, 8, 20, 3])); 
console.log(ordenarArray([-5, 0, -1, 2])); 
