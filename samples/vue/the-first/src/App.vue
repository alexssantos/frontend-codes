<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Alex's Vue Project."/>
    <Page2 msg="Essa é minha Pagina 2 em outro component."/>
    <p v-if="Math.random() < 0.6">Está de dia / horas: {{horas}}</p>
    <p v-if="Math.random() >= 0.6 ">Está de Tarde / horas: {{horas}}</p>
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
      horas: new Data(),
      hasHoras: true
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
