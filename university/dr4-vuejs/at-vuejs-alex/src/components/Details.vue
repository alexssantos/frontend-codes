<template>
	<div class="container">
		<h1 @click="verificaCard()">DETALHES DO PRODUTO</h1>
		<CardProduct :cardData="cardData" />
	</div>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
name: "Details",
	components: {
		CardProduct
	},
	props: ['id','cardData'],
	data() {
		return {}
	},	
	methods: {
		editarProduto(){
			console.log("Produto para Editar"); 			
		},	
		deletarProduto(){
			console.log("Produto Deletado"); 			
		},		
		verificaCard(){			
			console.log(this.cardData);
			console.log(this.id);
		}
	}
}
</script>

<style>

</style>