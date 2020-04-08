<template>
	<div class="page">
		<div class="container">
			<div class="d-flex flex-wrap justify-content-center">
				<div v-for="(card) in produtosLista" :key="card.id" >
					<CardProduct 
						@verDetalhes="detalheProduto"
						@adicionaProd="adicionaProduto"
						:cardData="card"
					/>	
				</div>
			</div>
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
	props: {},
	data() {
		return {
			"qtdCarrinho": 0,
			"produtosLista": [
				{
					"id":0,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},{
					"id":1,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},{
					"id":2,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},{
					"id":3,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},{
					"id":4,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},{
					"id":5,
					"nome": "Bolo",
					"preco": 279,
					"categoria": "Doce",
					"img_url":"/assets/"
				},
			]
		}
	},
	methods: {
		adicionaProduto(){
			console.log(" Produto add");
			this.qtdCarrinho += 1;
		},
		detalheProduto(id){
			console.log("Detalhe id", id);
		}
	}

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
