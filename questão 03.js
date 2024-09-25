/*Contar Vogais em uma String
Desenvolva uma função contarVogais(str) que conte e retorne o número de
vogais (a, e, i, o, u) em uma string fornecida.
Exemplo: contarVogais('javascript') deve retornar 3 */

function somarVogal(eComString){
    let contador = 0 ;
    const vogais = 'aeiouAIOUE';
    for (let i = 0 ; i < str.length; i++){
        
        if (vogais.includes (str[i])){
            contador++;
        }
    }
    return contador;
}
console.log(somarVogal('sistema'));
console.log(somarVogal('alura'));
console.log(somarVogal('software'));