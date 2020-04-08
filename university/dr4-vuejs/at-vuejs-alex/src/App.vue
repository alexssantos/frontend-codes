<template>
	<div id="app">
		<Header />
		<b-container>
			<!-- <router-view /> -->
			<Home />
		</b-container>
	</div>
</template>

<script>
import Home from "./components/Home.vue";
import Header from "./components/Header";

export default {
	name: "App",
	components: {
		Home,
		Header
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;	
}
</style>
