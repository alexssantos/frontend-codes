<template>
	<div class="hello">
		<h1>PAGINA HOME</h1>	
		<CardProduct/>
	</div>
</template>

<script>

import CardProduct from "./CardProduct";

export default {
	name: "Home",
	components: {
		CardProduct
	},
	props: {
		msg: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
