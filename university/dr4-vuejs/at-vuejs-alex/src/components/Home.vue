<template>
	<div class="page">
		<h1>PAGINA HOME</h1>
		<div class="d-flex flex-wrap justify-content-center">
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
			<CardProduct />
		</div>
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
<style scoped></style>
