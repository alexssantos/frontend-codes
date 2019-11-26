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
var db = firebase.firestore()

const iptEmail = document.getElementById('iptEmail')
const iptSenha = document.getElementById('iptSenha')
const btnCadastrarUsuario = document.getElementById('btnCadastrarUsuario')
const btnLoginUsuario = document.getElementById('btnLoginUsuario')
const msg = document.getElementById('msg')

const div_login = document.getElementById('divLogin')
const div_msg = document.getElementById('divMsg')
const btnEnviar = document.getElementById('btnEnviar')
const iptMsg = document.getElementById('iptMsg')
const pMsg = document.getElementById('p_msg')


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
    )
    .then((res) => {
        div_login.style.display = "none"
        div_msg.style.display = "block"


        //GET FIRESTORE
        db.collection('message').get()
        .then((res) => {
            res.forEach(doc => {
                console.log(doc)
            });
        })
    })    
    .catch((error) => {
            msg.innerText = `${error.code}: ${error.message}`
        }
    )

    var user = firebase.auth().currentUser
    if (user){
        msg.innerText = `Usuario logado: ${user.email}`
        console.log(user)
        user.updateProfile({
            displayName:"Alex Santos",
            phoneNumber: "99999-2222",
            photoUrl:"http://photos-zuadas-exemplo"
        })
        .then(() => {
            console.log("UPDATE USER FIREBASE SUCESSFULL")
        })
        .catch((error) => {
            msg.innerText = `${error.code}: ${error.message}`
            console.log("UPDATE USER FIREBASE FAILED")
        })
    }
}


// Snapshot // um ouvidor de alteração
db.collection('message').onSnapshot().then(() => {
    // se collection 'message' for atualizada
})


//salvando/atualizando o doc especifico, com nome especifico de uma collection
btnEnviar.onclick = () => {    
    db.collection('cities').doc(iptMsg.value).set(
        {
            cityName: iptMsg.value,            
            created_at: Date.now()
        }
    ).then((res) => {
        //Salvou os dados
        pMsg.innerText = `response: ${res}`
        console.log("OBJ FIRESTORE CREATED")
        console.log(res)
    }).catch((error) => {
        // Error
        pMsg.innerText = `${error.code}: ${error.message}`
    })
}

/*
btnEnviar.onclick = () => {
    var user = firebase.auth().currentUser
    db.collection('message').add(
        {
            message: iptMsg.value,
            user: user.uid,
            created_at: Date.now()
        }
    ).then((res) => {
        //Salvou os dados
        pMsg.innerText = `msg firestore path/id: ${res.path}`
        console.log("OBJ FIRESTORE CREATED")
        console.log(res)
    }).catch((error) => {
        // Error
        pMsg.innerText = `${error.code}: ${error.message}`
    })
}
*/