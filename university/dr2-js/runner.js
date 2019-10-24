//prompt("Digite as Temperaturas\ne indique se é conversão para Célsius:\n ex.: 5, 10, 15, 20, y")

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

// var inputTemps = [50, 120, 140, 150, 200, 350]
// //var tipeConv = choice.toUper == 'Y'
// var result = tempConvert(false, ...inputTemps) 

// console.log(result)


var inputStr = "yes, 5, 10, 15, 20"
var inputArray = inputStr.replace(/ /g,'').split(',')
var choice = inputArray.shift().toUpperCase == 'YES'        

var result = tempConvert(choice, ...inputArray)

console.log("terminou")
console.log(result)