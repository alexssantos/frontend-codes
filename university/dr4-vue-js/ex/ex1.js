/*
Lista Exercicios:
0. https://br.spoj.com/problems/QUADRAD2/
1. https://br.spoj.com/problems/PAR/
2. https://br.spoj.com/problems/VICE12/
3. https://br.spoj.com/problems/FATORIAL/
4. https://br.spoj.com/problems/PRIMO/
*/

// ==================================================================
// ================================== READLINE ======================
// var readline = require('readline');
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function input(prompt, callbackFunc) {
//     rl.question(prompt, (input) => {
//         rl.close();
//         callbackFunc(input);
//     });
// }

// ==========================================================
//  exercicio 1
// ==========================================================

/* Restrição
|N| ≤ 10000
*/
function ex1func(input) {   
    let result = Math.pow(input, 2);    
    console.log(result)
}

//input("Numero: ", ex1func);

// ==========================================================
//  exercicio 2
// ==========================================================

var entrada = " 3 \n Pedro \n Paulo \n 2 4 \n 3 5 \n 1 0 \n 2 \n Claudio \n Carlos \n 1 5 \n 2 3 \n 0"

function ex2func(params) {   
    let jogadas = parseInt(params[0].split())
    if (jogadas == 0) return;
    let player1 = params[1]
    let  player2 =  params[2]
    params.splice(0, 3)

    for (let i = 0; i < jogadas*2; i+=2) {        
        if (params[i] > params[i+1]) console.log(player1)
        else console.log(player2)
    }    
    params.splice(0, jogadas)
    ex2func(params)
}
let params = entrada.split(" \n ")
//ex2func(params)

//input("Par ou Inpar condições: ", ex1func);

// ==========================================================
//  exercicio 3
// ==========================================================

//pegar o segundo maior

let entrada3 = "4 5 6"
//let entrada3 = "4 5 6 55 224 10 20 7 10 200"
//let entrada3 = "4 5 65 87 87 4 1 22 87 12"

let list3 = entrada3.split(" ").map((x) => parseInt(x))
let maior = list3.reduce((a,b) => Math.max(a, b))

//com operador spread e Math.max.apply
//var maior = Math.max(...list3);

// ==========================================================
//  exercicio 4
// ==========================================================

// factorial with recursion
function factorial(value){    
    if (typeof(+value) != "number") 
        return "Its not a number. try again!"  
    if (value <= 0) 
        return 1    
    return value * factorial(value-1)    
}

function printPenult(result) {
    let resultStr = result.toString().replace(/\D/g, "");  //regex - só numeros - /g recursao
    if (resultStr.length == 1) {
        console.log(resultStr)    
    } else 
        console.log(resultStr[resultStr.length-2])
}

//printPenult(factorial(50))

// ==========================================================
//  exercicio 5
// ==========================================================

let input = parseInt("2245112")
let maxTry = Number.MAX_SAFE_INTEGER
let count = 0
for (let i = 1; i < maxTry; i++) {
    if (count > 2) break    
    
    let rest = input % i
    if (rest != 0) count++    
}