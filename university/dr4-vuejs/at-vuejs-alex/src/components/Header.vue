<template>
	<div id="header">
		<b-navbar toggleable="lg">
			<b-navbar-brand :to="{ name: 'home' }">
				<i class="fas fa-store"></i>
				Market Food
			</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-navbar-nav>				
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"		
					@click="goToHome()"			
				>
					<i class="fas fa-home my-auto mx-2"></i>
				</button>
				<button
					class="btn btn-outline-secondary mx-2 my-2 my-sm-0"
					type="button"
					@click="createProduct()"
				> 
				<i class="fas fa-plus my-auto mx-2"></i>
				Criar Produto
				</button>				
			</b-navbar-nav>

			<b-navbar-nav class="ml-auto">
				<div class="row">
					<b-nav-form>
						<b-form-input
							class="mr-sm-2"
							placeholder="Search"
						></b-form-input>
						<button
							size="sm"
							class="my-2 my-sm-0 btn btn-outline-secondary"
							type="button"
						>
							Search
						</button>
					</b-nav-form>
					<button
						class="btn btn-outline-secondary mx-3 my-2 my-sm-0 btn-cart"
						type="button"
					>
						<i class="fas fa-shopping-cart my-auto mx-2">
							12
						</i>
					</button>
				</div>
			</b-navbar-nav>
		</b-navbar>
	</div>
</template>

<script>
// WARNING: Component Fora do Router-View
export default {
	name: "Header",
	methods: {
		goToHome(){
			if (this.$route.name == 'home') return
						
			this.$router.push({name: 'home'})			
		},
		createProduct(){
			// WARNING: obj $router dando ruim direto no template
			this.$router.push({name:'create'})
		}
	}
};
</script>

<style>
#header {
	background-color: #fed4d7;
	overflow: hidden;
}
h3 {
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.btn:hover {
	background-color: #f5758a !important;
	border-color: #cf6576;
}
</style>
