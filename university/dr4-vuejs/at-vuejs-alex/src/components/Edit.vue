<template>
	<div class="col-12 my-auto">
		<b-form-input
			class="m-3"
			id="input1"
			v-model="cardData.nome"
			:state="true"
			placeholder="Nome"
		></b-form-input>
		<b-form-input
			class="m-3"
			id="input2"
			:state="true"
			placeholder="Valor"
		></b-form-input>
		<b-form-input
			class="m-3"
			id="input3"
			placeholder="Valor"
		></b-form-input>
		<button
			class="btn btn-outline-primary btn-lg m-3"
			type="button"
			@click="salvarEdicaoProduto()"
		>
			SALVAR
		</button>
	</div>
</template>

<script>

export default {
	name: "Edit",
	components: {},
	props: ["id", "cardData"],
	data() {
		return {};
	},
	methods: {
		goToDetails() {
			this.goToPage("product", { id: this.cardData.id });
		},
		goToPage(page, paramsObj) {
			this.$router.push({
				name: page,
				params: paramsObj
			});
		},
		getProduto() {
			let produto = this.$store.getters.getProdutoById(this.id);
			console.log("produto: ", produto);
			return produto;
		},
		salvarEdicaoProduto() {
			var toEdit = confirm(
				`Tem certeza que deseja editar Produto: \n ${JSON.stringify(
					this.cardData
				)}`
			);

			if (!toEdit) return;

			console.log("SALVO - produto: ", this.cardData);
			this.goToDetails();
		}
	}
};
</script>

<style></style>
