<template>
	<div class="container">
		<h1 v-if="!checkEditPage()">DETALHES DO PRODUTO</h1>
		<h1 v-if="checkEditPage()">EDITAR PRODUTO</h1>

		<div class="row">
			<div class="col-6">
				<CardProduct :cardData="card" />
			</div>
			<div v-if="!checkEditPage()" class="col-6 my-auto">
				<b-form-input
					class="m-3"
					id="input1"
					v-model="card.nome"
					placeholder="Nome"
					disabled
				></b-form-input>
				<b-form-input
					class="m-3"
					id="input2"
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
			<div v-if="checkEditPage()" class="col-6 my-auto">
				<Edit :cardData="card"></Edit>
			</div>
		</div>
		<div class="row justify-content-center">
			<button
				v-if="!checkEditPage()"
				class="btn btn-outline-secondary btn-lg m-3"
				type="button"
				@click="editarProduto()"
			>
				EDITAR
			</button>
			<button
				v-if="!checkEditPage()"
				class="btn btn-outline-danger btn-lg m-3"
				type="button"
				@click="deletarProduto()"
			>
				EXCLUIR
			</button>
		</div>
	</div>
</template>

<script>
import CardProduct from "./CardProduct";
import Edit from "./Edit";

export default {
	name: "Details",
	components: {
		CardProduct,
		Edit
	},
	props: ["id"],
	data() {
		return {
			card: this.getProduto(),
			isEditPage: this.checkEditPage()
		};
	},
	methods: {
		editarProduto() {
			console.log("Produto para Editar");
			this.goToEdit();
		},
		deletarProduto() {
			var toDelete = confirm(
				`Tem certeza que deseja aparagar Produto: ${this.card.nome}`
			);

			if (!toDelete) return;

			this.$store.commit("deletarProduto", this.id);
			this.goToHome();
		},
		goToHome() {
			this.$router.push({ name: "home" });
		},
		goToEdit() {
			this.$router.push({
				name: "productEdit",
				params: { id: this.card.id, card: this.card }
			});
		},
		getProduto() {
			let produto = this.$store.getters.getProdutoById(this.id);
			console.log("produto: ", produto);
			return produto;
		},
		checkEditPage() {
			return this.$route.name == "productEdit";
		}
	}
};
</script>

<style></style>
