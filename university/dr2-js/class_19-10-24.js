// ===================================
// FUNÇÃO FABRICA
// ===================================
//  Retorna um objeto


var criarObj = function (nome, idade, endereco){
    return {
        nome: nome,
        idade: idade,
        endereco: endereco,
        verificarIdade: function(){
            if (idade > 18) return true
            return false
        }
    }
}

var obj1 = criarObj("Nome", "Idade", "rua X")
var obj2 = criarObj("Nome", "Idade", "rua Y")

var objs = [
    criarObj("Nome", "Idade", "rua X")
    criarObj("Nome", "Idade", "rua Y")
]

objs[0].nome





// ===================================
// FUNÇÃO CONSTRUTORA
// ===================================
//  Retorna 'undefined' e precisa criar uma instancia de obj com 'new'.















// ===================================
// EXERCICIO 2
// ===================================

//2. Escreva um programa JS para converter de Celsius para Fahrenheit
//  A) Formula F = C*1.8+32
//  B) recebendo params
//  C) retornar somente as temperaturas ...

prompt("Digite as Temperaturas\ne indique se é conversão para Célsius:\n ex.: 5, 10, 15, 20, y")

function tempConvert(...temps, toCelsius = true) {    
    var newTemps = []

    temps.forEach(T => {        
        if (!toCelsius) 
            newTemps.push(T*1.8 + 32)  
            //return T*1.8 + 32
        else newTemps.push((T -32)/1.8)
        //else return (T -32)/1.8
    });
    return newTemps
}
