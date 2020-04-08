<template>
	<div class="container">
		<h1>DETALHES DO PRODUTO</h1>
		<CardProduct />
	</div>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
name: "Details",
	components: {
		CardProduct
	},
	props: {},
	data() {
		return {}
	},
	methods: {
		criarProduto(){
			console.log("Produto Criado");			
		},		
	}
}
</script>

<style>

</style>