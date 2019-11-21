/*

// CADASTRO
btnCadastrarUsuario.onclick = () => {
    firebase.auth().createUserWithEmailAndPassword(
        email, password
    ).catch(
        (error) => {
        msg.innerText = `${error.code}: ${error.message}`
        
        // Handle Errors here.
        //var errorCode = error.code;
        //var errorMessage = error.message;
        // ...
    });
}


// LOGIN
btnLoginUsurio.onclick = () => {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        
        
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}
*/

/* CONFIG FIREBASE THIAGO
var firebaseConfig = {
    apiKey: "AIzaSyDDBsXu_XbWQyHtT_YHCQK4IPwTp5LRNBo",
    authDomain: "expl-2424f.firebaseapp.com",
    databaseURL: "https://expl-2424f.firebaseio.com",
    projectId: "expl-2424f",
    storageBucket: "expl-2424f.appspot.com",
    messagingSenderId: "129418082608",
    appId: "1:129418082608:web:77303ef1f44788b380b0f5"
}*/

//alexssantos-teste
const firebaseConfig = {
    apiKey: "AIzaSyCnSOIPCbg4vygDcn7fSVOB84R-vunW5Rs",
    authDomain: "alexssantos-teste.firebaseapp.com",
    databaseURL: "https://alexssantos-teste.firebaseio.com",
    projectId: "alexssantos-teste",
    storageBucket: "alexssantos-teste.appspot.com",
    messagingSenderId: "846558204062",
    appId: "1:846558204062:web:cd0917364b4314ff632b8f",
    measurementId: "G-WCX8W7RBN4"
};

firebase.initializeApp(firebaseConfig)

const iptEmail = document.getElementById('iptEmail')
const iptSenha = document.getElementById('iptSenha')
const btnCadastrarUsuario = document.getElementById('btnCadastrarUsuario')
const btnLoginUsuario = document.getElementById('btnLoginUsuario')
const msg = document.getElementById('msg')

btnCadastrarUsuario.onclick = () => {
    firebase.auth().createUserWithEmailAndPassword(
        iptEmail.value, iptSenha.value
    ).catch(
        (error) => {
            msg.innerText = `${error.code}: ${error.message}`
        }
    )
}

btnLoginUsuario.onclick = () => {
    firebase.auth().signInWithEmailAndPassword(
        iptEmail.value, iptSenha.value
    ).catch(
        (error) => {
            msg.innerText = `${error.code}: ${error.message}`
        }
    )
    var user = firebase.auth().currentUser
    if (user){
        msg.innerText = `${user.email}`
    }
}