import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {		
		produtos: [
			{
				"id":0,
				"nome": "Cake",
				"preco": 279,
				"categoria": "Doce",
				"icon": "cake",
			},{
				"id":1,
				"nome": "Apple",
				"preco": 279,
				"categoria": "Doce",
				"icon": "apple",
			},{
				"id":2,
				"nome": "Bread",
				"preco": 279,
				"categoria": "Doce",
				"icon": "bread",
			},{
				"id":3,
				"nome": "Carrot",
				"preco": 279,
				"categoria": "Doce",
				"icon": "carrot",
			},{
				"id":4,
				"nome": "Candy",
				"preco": 279,
				"categoria": "Doce",
				"icon": "candy",
			},{
				"id":5,
				"nome": "Coffee",
				"preco": 279,
				"categoria": "Doce",
				"icon": "coffee",
			},	
		],
		carrinho: [
			{
				produtoId: 0,
				quantidade: 3
			}
		]
	},
	getters: {
		getProdutos(state){
			return state.produtos;
		},
		getProdutoById: (state) => (id) => {
			let produto = state.produtos.find((prod) => prod.id == id);
			console.log("produto: " + produto + " id: " + id);
			return produto;
		},
		getTotalCarrinho(state){
			var total = 0;
			if (state.carrinho.length == 0) return total;

			state.carrinho.map((prod) => {
				total += prod.quantidade;
			});

			return total;
		}
	},
	//Mutations são equivalentes a 'Setters'
	mutations: {
		deletarProduto(state, produtoId){
			let index = state.produtos.findIndex((prod) => prod.id == produtoId);

			if (index >= 0) 
				state.produtos.splice(index, 1);
			else 
				console.log(`Produto ID: ${produtoId} não encontrado!`);
		},
		addProdutoToCart(state, produtoId){
			let index = state.carrinho.findIndex((prod) => prod.id == produtoId);
			
			if (index >= 0) 
				state.carrinho[index].quantidade += 1;
			else {
				state.carrinho.push({
					produtoId: produtoId,
					quantidade: 1
				})
			}
		}
	}
})