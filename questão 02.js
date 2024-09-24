/*2. Verificar se um Número é Primo
Crie uma função numeroPrimo(num) que receba um número inteiro e
retorne true se ele for primo, ou false caso contrário.*/

function numberP(number){
    if (number <= 1){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0 ){
            return false;
        }
    }
    return true;
}

console.log (numberP(7));
console.log (numberP(55));
console.log (numberP(2));