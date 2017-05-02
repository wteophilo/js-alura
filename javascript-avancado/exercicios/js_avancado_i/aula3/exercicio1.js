/*Escreva um código que altere dataString
para que seu conteúdo fique compatível com o formato ano/mes/dia*/


let dataString = '17-05-2016';

let novaData = new Date(dataString.split('-').reverse().join('/'));
console.log("exercicio 1: "+novaData);
