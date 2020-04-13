<template>
	<div class="container">
		<h1 @click="verificaCard()">DETALHES DO PRODUTO</h1>
		<button
			class="btn btn-outline-secondary btn-lg m-3"
			type="button"
			@click="editarProduto()"
		>
			EDITAR
		</button>
		<button
			class="btn btn-outline-danger btn-lg m-3"
			type="button"
			@click="deletarProduto()"
		>
			EXCLUIR
		</button>
		<div class="row">
			<div class="col-6">
				<CardProduct :cardData="cardData" />
			</div>
			<div class="col-6">
				<b-form-input
					class="m-3"
					id="input1"
					v-model="card.nome"
					:state="true"
					placeholder="Nome"
				></b-form-input>
				<b-form-input
					class="m-3"
					id="input2"
					:state="true"
					placeholder="Valor"
					disabled
				></b-form-input>
				<b-form-input
					class="m-3"
					id="input3"
					placeholder="Valor"
					disabled
				></b-form-input>
			</div>
		</div>
	</div>
</template>

<script>
import CardProduct from "./CardProduct";

export default {
	name: "Details",
	components: {
		CardProduct
	},
	props: ["id", "cardData", "isEdit"],
	data() {
		return {
			card: this.cardData
		};
	},
	methods: {
		editarProduto() {
			console.log("Produto para Editar");
		},
		deletarProduto() {
			console.log("Produto Deletado");
		},
		verificaCard() {
			console.log(this.cardData);
			console.log(this.id);
		}
	}
};
</script>

<style></style>
