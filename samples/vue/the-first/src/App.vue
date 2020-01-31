<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Alex's Vue Project."/>
    <Page2 msg="Essa é minha Pagina 2 em outro component."/>
    <p>Numero: {{numero}} </p>
    <p v-if="numero < 0.6">Está de DIA, {{horas}}</p>
    <p v-if=" numero>= 0.6 ">Está de TARDE, {{horas}}</p>
    <p> {{getYearFunc()}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Page2 from './components/Page2.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Page2
  },
  data() {
    return {
      horas: new Date().toString(),
      hasHoras: true,
      numero: Math.random(),
    }
  }, 
  methods: {
    getYearFunc(){
      return new Date().getUTCFullYear()
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
