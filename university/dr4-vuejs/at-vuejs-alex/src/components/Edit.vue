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
			v-model="cardData.preco"
			type="number"
			:state="true"
			placeholder="Valor"
		></b-form-input>
		<div class="row m-3">
			<b-form-select
				class="col-3 mr-3"
				v-model="selectedLetter"
				:options="optoinsAlfabeth"
				v-on:change="getListImages()"
			>
			</b-form-select>
			<b-form-select
				class="col-8"
				v-model="selected"
				:options="options"
				v-on:change="selectImg()"
			>
			</b-form-select>
		</div>
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
		return {
			selectDefault: { value: null, text: "Selecione uma opção."},
			selectedLetter: null,
			optoinsAlfabeth: [this.selectDefault],
			selected: null,
			options: [ this.selectDefault]
		};
	},
	methods: {
		init() {
			this.getAlphabetArray();
			this.getListImages();
		},
		getAlphabetArray() {
			let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			
			this.optoinsAlfabeth = [this.selectDefault]
			alphabet.map((char) => {
				this.optoinsAlfabeth.push({
					value: char,
					text: char
				})
			});		
		},
		getListImages() {
			if (!this.selectedLetter) {
				this.selectedLetter = "a";
			}

			let opts = this.$store.getters.getImagesProdutoByLetter(
				this.selectedLetter
			);			

			let newOptions = [this.selectDefault];
			opts.map(opt => newOptions.push({ value: opt, text: opt }));
			this.options = [...newOptions];
		},
		selectImg() {
			if (!this.selected) return;

			this.cardData.icon = this.selected;			
		},
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
			return produto;
		},
		salvarEdicaoProduto() {
			var toEdit = confirm(
				`Tem certeza que deseja editar Produto: \n ${JSON.stringify(
					this.cardData
				)}`
			);

			if (!toEdit) return;

			this.goToDetails();
		},
		getImgUrl() {
			let img = require(`@/assets/img/foods/svg/${this.cardData.icon}.svg`);
			return img;
		}
	},
	created() {
		this.init();
	}
};
</script>

<style></style>
