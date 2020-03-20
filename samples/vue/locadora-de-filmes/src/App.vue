<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  },
  data(){
    return {
      title : "Locadora de Filmes",
      filmes : ['Vingadores', 'Homem de Ferro', 'Hulk', 'Pantera negra'],
      filmes_obj: [
       { id: 1, titulo: "Vingadores", descricao: "Um filme de heróis", valor: 25, imagem: "./assets/logo.png" },
       { id: 2, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, imagem: "assets/logo.png" },
       { id: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, imagem: "assets/logo.png" },
       { id: 4, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, imagem: "assets/logo.png" },
       { id: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem: "assets/logo.png" },
      { id: 6, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem: "assets/logo.png" }
     ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
/* id="app" */
#app{
  margin: 40px;
  font-family: 'Lato', sans-serif;
}
.cards{
  justify-content: space-between;
  text-align: center;
}
h1 {
  text-align: center;
  padding: 24px;
}
</style>
