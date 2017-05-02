/*Sua tarefa: criar uma nova lista com a mesma quantidade de números,
mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar.*/


let numeros = [3,2,11,20,8,7];

novaLista = numeros.map(itens=> itens%2 ? itens*2 : itens);
console.log("Exercicio 2: " + novaLista);
