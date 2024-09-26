/*Verificar Palíndromo
Desenvolva uma função palindromo(str) que receba uma string e retorne
true se a string for um palíndromo (lê-se da mesma forma de frente para
trás), ou false caso contrário.
Exemplo: palindromo('radar') deve retornar true*/

function palindromo(str) {
    str = str.replace(/\s+/g, '').toLowerCase();

    let invertida = str.split('').reverse().join('');
    
    return str === invertida; 
}
console.log(palindromo('radar'));        
console.log(palindromo('ovo'));           
console.log(palindromo('palindromo'));   
