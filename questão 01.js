/*Somar Elementos de um Array
Escreva uma função somarArray(arr) que receba um array de números e
retorne a soma de todos os elementos.
Exemplo: somarArray([1, 2, 3, 4, 5]) deve retornar 15.
*/
function somarArrays(parametroArray) {
    let somar = 0;
    for (let i = 0; i < parametroArray.length; i++) {
        somar += parametroArray[i];
    }
    return somar;
}

console.log(somarArrays([1, 2, 3, 4, 5]));
