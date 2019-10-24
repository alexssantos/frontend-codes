function tempConvert(toCelsius, ...temps) {    
    var newTemps = []
    temps.map(T => {        
        if (!toCelsius) 
        newTemps.push(T*1.8 + 32)  
        //return T*1.8 + 32
        else newTemps.push((T -32)/1.8)
        //else return (T -32)/1.8
    });
    return newTemps
}

var inputStr = prompt("Digite as Temperaturas\ne indique se é conversão para Célsius:\n ex.: 5, 10, 15, 20, y")
var inputArray = inputStr.replace(/ /g,'').split(',')   // primeiro limpa a string, segundo converte em array
var choice = inputArray.shift().toUpperCase == 'YES'  //retorna o primeiro item e remove.

var result = tempConvert(choice, ...inputArray)

console.log("terminou")
console.log(result)
alert(result)