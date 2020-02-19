<template>
  <div class="home">
    <b-row>
      <h1>Bem vindo a {{ title }}</h1>
    </b-row>
    <b-row>
      <b-button class="p-auto" variant="primary">
        Carrinho de Filmes:
        <b-badge class="m-1" style="font-size:115%;" variant="light">{{totalCarrinho.length || '0'}}</b-badge>
      </b-button>
      <div class="cards">
        <b-card
          :key="filme.id"
          v-for="filme in filmes_obj"
          :title="filme.titulo"
          :id="filme.id"
          :img-src="filme.imagem"
          img-alt="Image"
          img-top
          tag="article"
          style="width: 14rem"
          class="mb-2"
        >
          <b-card-text>{{ filme.descricao }}</b-card-text>
          <b-card-text>{{ filme.valor | formatarPreco("R$")}}</b-card-text>
          <b-button
            href="#"
            @click="AdicionarAoCarrinho(filme)"
            :disabled="filme.quantidade == 0"
            variant="dark"
          >Alugar</b-button>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
  data() {
    return {
      title: "Locadora de Filmes",
      totalCarrinho: [],
      horas: new Date().getHours(),
      filmes_obj: [
        {
          id: 1,
          titulo: "Vingadores",
          descricao: "Um filme de heróis",
          valor: 25,
          quantidade: 4,
          imagem:
            "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27179657%27&EntityType=%27Item%27&EntityId=%2710807%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous"
        },
        {
          id: 2,
          titulo: "Pantera Negra",
          descricao: "Um filme de panteras",
          valor: 35,
          quantidade: 4,
          imagem:
            "https://cdn.telecineplay.com.br/isl/api/v1/dataservice/ResizeImage/$value?Format=%27jpg%27&Quality=85&ImageId=%27182460%27&EntityType=%27Item%27&EntityId=%2710148%27&Width=720&Height=1080&device=web_browser&subscriptions=Anonymous"
        },
        {
          id: 3,
          titulo: "Homem-Formiga",
          descricao: "Um filme de formigas",
          valor: 20,
          quantidade: 4,
          imagem:
            "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg"
        },
        {
          id: 4,
          titulo: "Capitã Marvel",
          descricao: "Um filme de capitãs",
          valor: 40,
          quantidade: 4,
          imagem:
            "https://images-na.ssl-images-amazon.com/images/I/81wmxkmnbwL.jpg"
        },
        {
          id: 5,
          titulo: "Hulk",
          descricao: "Um filme de força",
          valor: 10,
          quantidade: 4,
          imagem:
            "https://www.mcflycolecionaveis.com.br/imagens/produtos/4897011176864/4897011176864/Ampliada/hot-toys-avengers-age-of-ultron-hawkeye-mms289.jpg"
        },
        {
          id: 6,
          titulo: "Hulk",
          descricao: "Um filme de força",
          valor: 10,
          quantidade: 4,
          imagem:
            "https://www.mcflycolecionaveis.com.br/imagens/produtos/4897011176864/4897011176864/Ampliada/hot-toys-avengers-age-of-ultron-hawkeye-mms289.jpg"
        },
        {
          id: 7,
          titulo: "Hulk",
          descricao: "Um filme de força",
          valor: 10,
          quantidade: 4,
          imagem:
            "https://www.mcflycolecionaveis.com.br/imagens/produtos/4897011176864/4897011176864/Ampliada/hot-toys-avengers-age-of-ultron-hawkeye-mms289.jpg"
        },
        {
          id: 8,
          titulo: "Hulk",
          descricao: "Um filme de força",
          valor: 10,
          quantidade: 4,
          imagem:
            "https://br.web.img2.acsta.net/c_215_290/pictures/210/485/21048566_20131010182211313.jpg"
        }
      ]
    };
  },
  methods: {
    AdicionarAoCarrinho(filme) {
      console.log(filme.quantidade);
      filme.quantidade--;
      this.totalCarrinho.push(filme);
    }
  },
  filters: {
    formatarPreco(preco, simbolo) {
      if (!parseInt(preco)) {
        return simbolo + "---";
      }
      return simbolo + " " + preco;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.home {
  align-items: center;
}
.card {
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