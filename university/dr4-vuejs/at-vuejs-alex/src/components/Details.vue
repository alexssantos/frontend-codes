<template>
	<div class="container">
		<h1 @click="checkPaginaEdicao()">DETALHES DO PRODUTO</h1>
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
				<CardProduct :cardData="card" />
			</div>
			<div class="col-6 my-auto">
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
					:disabled='isEdit'
				></b-form-input>
				<b-form-input
					class="m-3"
					id="input3"
					placeholder="Valor"
					:disabled='isEdit'
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
	props: ["id", "isEdit"],
	data() {
		return {
			card: this.getProduto()
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
		},
		checkPaginaEdicao(){
			console.log(this.isEdit);
		},
		getProduto(){
			let produto = this.$store.getters.getProdutoById(this.id);
			console.log("produto: ",produto);
			return produto;
		}
	}
};
</script>

<style></style>
