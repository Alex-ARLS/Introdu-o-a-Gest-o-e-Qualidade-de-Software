/*Encontrar o Fatorial de um Número
Implemente uma função fatorial(n) que calcule o fatorial de um número
inteiro positivo.
Exemplo: fatorial(5) deve retornar 120*/

function fatorial(n) {
    if (n < 0) {
        return undefined; 
    }
    if (n === 0 || n === 1) {
        return 1; 
    }
    
    let resultado = 1; 

   
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }

    return resultado; 
}

console.log(fatorial(5));
console.log(fatorial(0)); 
console.log(fatorial(1)); 
console.log(fatorial(6));
