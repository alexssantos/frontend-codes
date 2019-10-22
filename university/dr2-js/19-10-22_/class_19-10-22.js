// ========================================
// => TERNARIOS
// ========================================

// sample: (condiçao) ? retornoTrue : retornoFalse

function calcularImposto(impostoAplicar) {
    switch (impostoAplicar) {
        case "iss":
            return valorCompra += (valorCompra * 0.1)
        case "icpmf":
            return valorCompra += (valorCompra * 0.2)
        default:
            break;
    }
}

var valorCompra = 100.00
calcularImposto((calorCompra > 50.0) ? "iss" : "icpmf")








// ========================================
// => FUNÇÕES AUTO INVOCADAS
//
//  Função de escopo
// ========================================


console.log("Funções Auto Invocaveis")

var aliquotaImposto = (
    function (salarioBruto) {
        var valReais = [1903.98, 2826.66, 3751.06, 4664.68]
        var valReturn = [0, 7.5, 15, 22.50, 27.50]

        if (salarioBruto < valReais[0]) {
            return valReturn[0]
        } else if (salarioBruto < valReais[1]) {
            return valReturn[1]
        } else if (salarioBruto < valReais[2]) {
            return valReturn[2]
        } else if (salarioBruto < valReais[3]) {
            return valReturn[3]
        } else {
            return valReturn[4]
        }
    }
)(salarioBruto)



// ========================================
// => FUNÇÕES FECHADA
//
//  Função de escopo
// ========================================


console.log("Funções Fechada")

var valorServico = 69354.56
function calcularISS(naturezaServico) {
    function aplicarAliquota() {
        var tipoServicos = ["onibus", "saude", "seguro", "logistica"]

        switch (naturezaServico) {
            case tipoServicos[0]:
                return 0.01
            case tipoServicos[1]:
                return 0.02
            case tipoServicos[2]:
                return 2
            case tipoServicos[3]:
                return 3
        }
        return 0        
    }(naturezaServico)    
}

console.log(`
    Imposto Sobre serviço: ${calcularISS("onibus").toFixed(3)}
`)

var criarPessoa = Function() {



    cpf: novoCpf
        .replace(/\./g, "") // g -> busca recursiva e não somente o primeiro caso
        .replace("", g)
}




// ========================================
// => FUNÇÕES COM VALORES DEFAULT
// ========================================

//Valores default devem ser declarados como ultimos

function funcParametrosPadroes(ParametroA = 0, ParametroB)
{
    return `${typeof(ParametroA)} / ${typeof(ParametroB)}`
}

console.log(funcParametrosPadroes()) //
console.log(funcParametrosPadroes("ParametroA"))
console.log(funcParametrosPadroes(100))


// ================================================================================
// => FUNÇÕES COM VARIOS PARAMETRO COM QTDD INDEFINIDO
// ================================================================================

console.log("")

function aplicarCotBloco(...paramentos){
    return paramentos.map(
        (x) => {
            if (x <= 1000.0)
                return x    
            return (x += (x * 0.1))
        }
    )
}

console.log(aplicarCotBloco(
    1800.0,
    987.90,
    123.10,
    456.89,
    852.89
))



// ================================
// => FUNÇÕES SETA (ARROW)
// ================================

//Mais que um parametro o valor precisa de parenteses "()".

var somar = (valueA, valueB) => {
    return valueA + valueB
}

var dividirPor10 = valueA => {
    return valueA / 10
}


// ================================
// => EXERCICIO
// ================================

// TODO: 1. Escreva em JS um func que retorne o fatorial de um numero

// factorial with recursion
function factorial(value = 1){    
    if (typeof(+value) != "number")
        return "Its not a number. try again!"    
    if (value <= 0)
        return 1    
    return value * factorial(value-1)
}