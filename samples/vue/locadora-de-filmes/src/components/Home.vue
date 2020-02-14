<template>
  <div class="home">
    <b-row>
      <h1>Bem vindo a {{ title }}</h1>
    </b-row>      
    <b-row>
      <div class="cards">
        <b-card  :key="filme.id" v-for="filme in filmes_obj"
          :title="filme.titulo"
          :id="filme.id"
          :img-src="filme.imagem"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 14rem"
          class="mb-2"
        >
          <b-card-text>
            {{ filme.descricao }}    
          </b-card-text>

          <b-card-text>
            {{ filme.valor | formatarPreco("R$")}}    
          </b-card-text>
          <b-button href="#" variant="primary">Alugar</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: { },
  data: function() {
   return {
     title: "Locadora de Filmes",
     horas: new Date().getHours(),
     filmes_obj: [
       { id: 1, titulo: "Vingadores", descricao: "Um filme de heróis", valor: 25, imagem: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27179657%27&EntityType=%27Item%27&EntityId=%2710807%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous" },
       { id: 2, titulo: "Pantera Negra", descricao: "Um filme de panteras", valor: 35, imagem: "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27182460%27&EntityType=%27Item%27&EntityId=%2710148%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous" },
       { id: 3, titulo: "Homem-Formiga", descricao: "Um filme de formigas", valor: 20, imagem: "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg" },
       { id: 4, titulo: "Capitã Marvel", descricao: "Um filme de capitãs", valor: 40, imagem: "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg" },
       { id: 5, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem: "" },
      { id: 6, titulo: "Hulk", descricao: "Um filme de força", valor: 10, imagem:"https://br.web.img2.acsta.net/c_215_290/pictures/210/485/21048566_20131010182211313.jpg" }
     ],
     filmes: ['Vingadores', 'Homem de Ferro', 'Hulk', 'Pantera negra']
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards{
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.home{
    align-items: center;
}
.card{
  margin: 24px;
}
#aberta {
  color: blue;
}
 
#proxima-fechar {
  color: orange;
}
 
#fechada {
  color: red;
}
</style>