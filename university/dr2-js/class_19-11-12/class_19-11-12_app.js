//  ========================
//  ANIMAÇÕES
//  ========================

//DONTPAD - infnetJSEP6p5, infnetJSEP6p2


// Syntax
element.animate(keyframes, options); 

// keyframes
// element.animate([ 
//   { // from
//     opacity: 0,
//     color: "#fff"
//   }, 
//   { // to
//     opacity: 1,
//  ​   color: "#000"
//   }
// ], 2000);

// element.animate([ 
//   { opacity: 1 },
//   { opacity: 0.1, offset: 0.7 },
//   { opacity: 0 } 
// ], 2000);

// element.animate({
//   opacity: [ 0, 1 ],          // [ from, to ]
//   color:   [ "#fff", "#000" ] // [ from, to ]
// }, 2000);


var theBoxMove = document.getElementById("theBoxMove")

theBoxMove.addEventListener("click", (evt) => {
  evt.target.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
  ], 500)
})

var theBoxMoveOptions = document.getElementById("theBoxMoveOptions")
theBoxMoveOptions.addEventListener("click", (evt) => {
  evt.target.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
  ], {
    // Milisegundos de delay para comecar. Padrao 0.
    delay: 2000,
    // "normal", "reverse", "alternate", "alternate-reverse"
    direction: "normal",
    // Milisegundos para completar a animacao
    duration: 500, // milisegundos
    // "linear", "ease", "ease-in", "ease-out", and "ease-in-out"
    easing: "ease-in",
    endDelay: 50, // milisegundos
    fill: "forwards",
    iteration: 1, // Infinity
  })
})

var theBoxMoveTheFlash = document.getElementById("theBoxMoveTheFlash")
var theBoxMoveManOfSteel = document.getElementById("theBoxMoveManOfSteel")
theBoxMoveTheFlash.addEventListener("click", (evt) => {
  evt.target.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(600px)' }
  ], {
    delay: 0,
    direction: "normal",
    easing: "ease-out",
    duration: 5000, // milisegundos
    fill: "forwards",
  })

  theBoxMoveManOfSteel.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(600px)' }
  ], {
    delay: 0,
    direction: "normal",
    easing: "ease-in-out",
    duration: 6000, // milisegundos
    fill: "forwards",
  })
})
theBoxMoveManOfSteel.addEventListener("click", (evt) => {
  evt.target.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(600px)' }
  ], {
    delay: 0,
    direction: "normal",
    easing: "ease-in",
    duration: 6000, // milisegundos
    fill: "forwards",
  })

  theBoxMoveTheFlash.animate([
    { transform: 'translateX(0px)' },
    { transform: 'translateX(600px)' }
  ], {
    delay: 0,
    direction: "normal",
    easing: "ease-in",
    duration: 5000, // milisegundos
    fill: "forwards",
  })
})

var theBoxWidth = document.getElementById("theBoxWidth")
theBoxWidth.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    { width: `${_.offsetWidth}px`},
    { width: '300px' },
  ], 500)
})

var theBoxTranslate = document.getElementById("theBoxTranslate")
theBoxTranslate.addEventListener("click", (event) => {
  var cTarget = event.currentTarget
  cTarget.animate([
    {transform: `translate(0px, 0%)`},
    {transform: `translate(200px, 50%)`},
    {transform: `translate(100px, 20%)`},
  ], 500)
})

var theBoxTranslateY = document.getElementById("theBoxTranslateY")
theBoxTranslateY.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `translateY(0px)`},
    {transform: `translateY(200px)`},
    {transform: `translateY(400px)`},
  ], 1000)
})

var theBoxScale = document.getElementById("theBoxScale")
theBoxScale.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `scale(1)`},
    {transform: `scale(2)`},
    {transform: `scale(4, 1)`},
    {transform: `scale(1)`},
  ],  {
    delay: 0,
    direction: "normal",
    duration: 5000,
    fill: "forwards",
  })
})

var theBoxRotateX = document.getElementById("theBoxRotateX")
theBoxRotateX.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `rotateX(0deg)`},
    {transform: `rotateX(360deg)`},
    {transform: `rotateX(1080deg)`},
  ], 5000)
})

var theBoxRotateY = document.getElementById("theBoxRotateY")
theBoxRotateY.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `rotateY(0deg)`},
    {transform: `rotateY(360deg)`},
    {transform: `rotateY(1080deg)`},
  ], 5000)
})


var theBoxRotateZ = document.getElementById("theBoxRotateZ")
theBoxRotateZ.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `rotateZ(0deg)`},
    {transform: `rotateZ(360deg)`},
    {transform: `rotateZ(1080deg)`},
  ], 5000)
})

var theBoxSkew = document.getElementById("theBoxSkew")
theBoxSkew.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `skew(0deg, 360deg)`},
    {transform: `skew(1080deg, 0deg)`},
  ], 5000)
})

var theBoxSkewX = document.getElementById("theBoxSkewX")
theBoxSkewX.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `skewX(0deg)`},
    {transform: `skewX(1080deg)`},
  ], 5000)
})

var theBoxSkewY = document.getElementById("theBoxSkewY")
theBoxSkewY.addEventListener("click", (event) => {
  var _ = event.currentTarget
  _.animate([
    {transform: `skewY(0deg)`},
    {transform: `skewY(1080deg)`},
  ], 5000)
})

// fetch("https://api.magicthegathering.io/v1/cards/14")
// .then((response) => {return response.json()})
// .then((json) => console.log(json))
// .catch((err) => {console.log(err.message)})

// var myHeaders = new Headers({
//     'Access-Control-Allow-Origin':'*',
//     'Content-Type': 'multipart/form-data'
// });
// var data = {
//     method: 'get',
//     mode: 'cors',
//     header: myHeaders,
// };
fetch("http://biblio.aguiar.pro.br/api/livros",
{
  // mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
})
.then((response) => {return response})
.then((json) => console.log(json))
.catch((err) => {console.log(err.message)})
