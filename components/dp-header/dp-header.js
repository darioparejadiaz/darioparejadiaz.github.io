class DpHeader extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.menuVisibility = false;
    this.addEventListener("click", this.toggleMenu);

    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth >= 690) {
        const menu = this.shadowRoot.querySelector(".menu-compressed");
        menu.classList.remove("visible");
        menu.classList.add("hidden");
        this.menuVisibility = false;
      }
    });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <header>
      <div class="header-container">
        <a class="logo-link" href="/index.html"><img class="logo" src="/components/dp-header/assets/dp-icon.png" alt="Logo" /></a>
        <nav class="nav-container">
          <img class="hamburguer-menu" src="/components/dp-header/assets/menu.svg" />
          <ul  class="menu-long">
            <li><a href="/pages/render.html">Renders</a></li>
            <li><a href="/pages/photography.html">Photography</a></li>
            <li><a href="/pages/about-me.html">About Me</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
          </ul>
          <ul  class="menu-compressed">
            <li><a href="/pages/render.html">Renders</a></li>
            <li><a href="/pages/photography.html">Photography</a></li>
            <li><a href="/pages/about-me.html">About Me</a></li>
            <li><a href="/pages/contact.html">Contact</a></li>
          </ul>
        </nav>
        <ul class="social-container">
          <a href="https://www.instagram.com/darioparejadiaz/"><img src="/components/dp-header/assets/instagram.svg" alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/darioparejadiaz/"><img src="/components/dp-header/assets/linkedin.svg" alt="linkedin" /></a>
        </ul>
      </div>
      </header>
      <link rel="stylesheet" href="/components/dp-header/dp-header.css" />
    `;

    return template;
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }

  toggleMenu(e) {
    if (
      e.composedPath()[0].className === "hamburguer-menu" &&
      this.menuVisibility === false
    ) {
      const menu = this.shadowRoot.querySelector(".menu-compressed");
      menu.classList.remove("hidden");
      menu.classList.add("visible");
      this.menuVisibility = true;
    } else if (
      e.composedPath()[0].className === "hamburguer-menu" &&
      this.menuVisibility === true
    ) {
      const menu = this.shadowRoot.querySelector(".menu-compressed");
      menu.classList.remove("visible");
      menu.classList.add("hidden");
      this.menuVisibility = false;
    }
  }
}

customElements.define("dp-header", DpHeader);
