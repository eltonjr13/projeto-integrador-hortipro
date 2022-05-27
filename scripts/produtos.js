const produtos = [
  {
    imagem:
      "https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_4x3.jpg",
    nome: "Banana",
    preco: 6.0,
    estoque: 12,
    quantidade: 0,
    id: 0,
  },
  {
    imagem:
      "http://static3.tcdn.com.br/img/img_prod/450860/muda_de_pera_d_agua_ou_europeia_1m_enxertada_676_1_20190611093602.jpg",
    nome: "Pera",
    preco: 10.0,
    estoque: 10,
    quantidade: 0,
    id: 1,
  },
  {
    imagem:
      "https://i.uai.com.br/D9ROReAWLV6SZTg7u6iSVZ0HwlY=/imgsapp2.uai.com.br/app/noticia_133890394703/2015/12/22/186528/20151221160405658577i.jpg",
    nome: "Uva",
    preco: 10.0,
    estoque: 10,
    quantidade: 0,
    id: 2,
  },
  {
    imagem:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/laranja-valenciana1-d6176b7996359e3cb815221646757150-1024-1024.jpg",
    nome: "Laranja",
    preco: 4.0,
    estoque: 10,
    quantidade: 0,
    id: 3,
  },
  {
    imagem:
      "http://static3.tcdn.com.br/img/img_prod/450860/muda_de_maca_gala_climas_frios_ou_amenos_1m_enxertadas_566_1_20190611093558.jpg",
    nome: "Maçã",
    preco: 6.0,
    estoque: 10,
    quantidade: 0,
    id: 4,
  },
  {
    imagem:
      "https://portaldoorganico.com.br/wp-content/uploads/2021/04/morango.jpg",
    nome: "Morango",
    preco: 8.0,
    estoque: 10,
    quantidade: 0,
    id: 5,
  },
];

//ADD PRODUTOS

adicionarProdutoHorta = () => {
  var containerProdutos = document.getElementById("horta-produtos");
  produtos.map((val) => {
    containerProdutos.innerHTML +=
      `
        <div class="lista_produtos-produto">
          <img src="` +
      val.imagem +
      `" alt="` +
      val.imagem +
      `" class="lista_produtos-imagem">
          <h3>` +
      val.nome +
      `</h3>
          <div class="lista_produtos-produto-info">
            <div>
              <p>` +
      `R$ ${val.preco},00` +
      `</p>
              <p>Estoque: ` +
      val.estoque +
      `</p>
            </div>
          </div>
          <button type="button" class="lista_produtos-produto-button" key="` +
      val.id +
      `">Adicionar ao Carrinho</button>
        </div>
    `;
  });
};

adicionarProdutoMercearia = () => {
  var containerProdutos = document.getElementById("mercearia-produtos");
  produtos.map((val) => {
    containerProdutos.innerHTML +=
      `
        <div class="lista_produtos-produto">
          <img src="` +
      val.imagem +
      `" alt="` +
      val.imagem +
      `" class="lista_produtos-imagem">
          <h3>` +
      val.nome +
      `</h3>
          <div class="lista_produtos-produto-info">
            <div>
              <p>` +
      `R$ ${val.preco},00` +
      `</p>
              <p>Estoque: ` +
      val.estoque +
      `</p>
            </div>
          </div>
          <button type="button" class="lista_produtos-produto-button" key="` +
      val.id +
      `">Adicionar ao Carrinho</button>
        </div>
    `;
  });
};

adicionarProdutoHorta();
adicionarProdutoMercearia();

// FUNCIONALIDADES DO CARRINHO //

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById("produtos-carrinho");
  containerCarrinho.innerHTML = "";
  produtos.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
        <div class="nav-cart-item">
        <input class="check-cart" type="checkbox" name="" id="` +
        val.id +
        `">
          <img src="` +
        val.imagem +
        `" alt="` +
        val.imagem +
        `" class="nav-cart-item-imagem">
          <h3>` +
        val.nome +
        `</h3>
          <p>` +
        `R$ ${val.preco},00` +
        `</p>
        <input class="lista_produtos-produto-input" type="number" name="" id="" value="` +
        val.quantidade +
        `" min="1">
      `;
    }
  });

  function calcular_total() {
    let total = 0;
    produtos.map((val) => {
      total += val.preco * val.quantidade;
      console.log(val.preco);
    });
    containerCarrinho.innerHTML += ` <p>Total: R$ ` + total + `</p>`;
  }
  calcular_total();

  containerCarrinho.innerHTML += `
    <button type="button" class="lista_produtos-produto-button">Finalizar compra</button>`;
};

let links = document.querySelectorAll(".lista_produtos-produto-button");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    produtos[key].quantidade++;
    atualizarCarrinho();
  });
}
