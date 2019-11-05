/*
links
- dontpad.com/infnetJSEP6p2

*/

// ===============================
// EVENTOS DE CAPTURA COM MOUSE
// ===============================

/*
var divMouseEvents = document.querySelector("div#mouse_events")

//click
divMouseEvents.addEventListener("contextmenu", () => {
    alert("contextmenu")
})


//DOUBLE CLICK (dblclick)
divMouseEvents.addEventListener("dblclick", () => {
    alert("dblclick")
})

//mousedown // mouseover // mousesenter //
divMouseEvents.addEventListener("mouseover", () => {
    alert("mouseover")
})
*/

//---------------------------------------------------------------------------------------------------

// ===============================
// FUNÇÕES SETA ou ARROW FUNCTION
// ===============================

/*
divMouseEvents.addEventListener("dblclick", () => {
    alert(funcArrow(3, 5))
})



// formas normais
function funcA(part1, part2) {
    return part1 + part2
}

var funcB = function (part1, part2) {
    return part1 + part2
}

//Arrow
var funcArrow = (part1, part2) => {
    return part1 + part2
}
*/

//---------------------------------------------------------------------------------------------------

// ===============================
// API DE STORAGE/SESSION 
// ===============================

//dontpad.com/infnetJSEP6p2

/*
SESSION - restriçaõ por abas do navegador
STORAGE - restrição por instancia (janela) do navegador
*/

/*
// MOCK

var user_info = {
    id: 10,
    username: 'thiago.aguiar',
    password: '987654321',
    name: 'Thiago Vieira de Aguiar',
    email: 'thiago.aguiar@prof.infnet.edu.br',
}


// Storage API

// Local Storage // Session Storage

var storage = localStorage // sessionStorage
if (storage.getItem('user_id') != null) {
    document.querySelector("p#user").innerText = `Olá ${storage.user_name} (${storage.user_email})`

    document.querySelector("p#user_id").innerText = `O seu ID é ${storage.getItem('user_id')}`
}


function actOnClickAcessarLocalStorage() {
    let username = document.querySelector("input#username")
    let password = document.querySelector("input#password")

    if (
        username.value == user_info.username &&
        password.value == user_info.password
    ) {
        storage.setItem('user_id', user_info.id)
        storage.setItem('user_name', user_info.name)
        storage.setItem('user_email', user_info.email)

        document.querySelector("p#user").innerText = `Olá ${storage.user_name} (${storage.user_email})`

        document.querySelector("p#user_id").innerText = `O seu ID é ${storage.getItem('user_id')}`

    } else {
        document.querySelector("p#user").innerText = `Usuário não encontrado.`
    }
    return false
}


// HTML - class_19-11-05.html
*/

//---------------------------------------------------------------------------------------------------

// ===============================
// API REQUEST
// ===============================

//usar o json-server pra testar.

/*
var url_api = "https://ip:port/..."

function reqListener() {
    alert(this.responseText)
}

// XMLHttpRequest - não trata somente com tipo arquivo XML. É um objeto de http em geral.

// OBJECT HTTP
var _http = new XMLHttpRequest()
//setting up request
_http.onload = reqListener
_http.open("get", url_api)
_http.send()

//onLoad, open(), send(), 
*/


// JS

// API URL -  https://docs.magicthegathering.io/
var mtg_url_api = "https://api.magicthegathering.io/v1/cards"

function actBtnSearchCardId() {
    function reqListener() {
        var card = JSON.parse(this.response).card
        console.log(card)
        document.querySelector("img#img_card").src = card.imageUrl;
    }

    let cardID = document.querySelector("input#mtg_id")
    let oReq = new XMLHttpRequest()
    oReq.onload = reqListener
    oReq.open("get", `${mtg_url_api}/${cardID.value}`)
    oReq.send()
}

// HTML - class_19-11-05_2.html



//---------------------------------------------------------------------------------------------------

// ===============================
// API GEO LOCATON
// ===============================

//codigo no moodle 