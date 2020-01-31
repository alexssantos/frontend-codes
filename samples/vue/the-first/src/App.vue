<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Alex's Vue Project."/>
    <Page2 msg="Essa é minha Pagina 2 em outro component."/>
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
