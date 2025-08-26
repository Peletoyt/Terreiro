window.onload = function() {
  // --- Parte do menu mobile ---
  class MobileMenu {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.navLinks.forEach((link, index) => {
      // Adiciona animação aos links do menu
        link.style.animation = link.style.animation ? "" : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      });
      this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }

  // Instancia e inicia o menu mobile
  const menu = new MobileMenu(
    ".mobile-menu",  // botão de abrir menu (hamburguer)
    ".nav-list",     // lista de navegação
    ".nav-list li"   // links dentro da lista
  );
  menu.init();
};
 