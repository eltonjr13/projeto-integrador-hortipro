//BOTÃO DE CARRINHO

class Carrinho {
    constructor(cart, navCart, navLinks) {
      this.cart = document.querySelector(cart);
      this.navCart = document.querySelector(navCart);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.navCart.classList.toggle(this.activeClass);
      this.cart.classList.toggle(this.activeClass);
    }
  
    addClickEvent() {
      this.cart.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.cart) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const carrinho = new Carrinho(
    ".cart",
    ".nav-cart",
    ".nav-cart li",
  );
  carrinho.init();

  // FIM DO BOTÃO DE CARRINHO