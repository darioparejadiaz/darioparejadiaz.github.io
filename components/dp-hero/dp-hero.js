class DpHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["heading", "description", "imgpath"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "heading") {
      this.heading = newVal;
    }

    if (attr === "description") {
      this.description = newVal;
    }
    if (attr === "imgpath") {
      this.imgpath = newVal;
    }
  }

  getTemptale() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section class="hero">
        <div class="hero-title-container">
          <h2 class="title">${this.heading}</h2>
          <p class="text">${this.description}</p>
        </div>
        <img src="${this.imgpath}" alt="" />
      </section>
      <link rel="stylesheet" href="/components/dp-hero/dp-hero.css" />
    `;

    return template;
  }

  render() {
    this.shadowRoot.append(this.getTemptale().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("dp-hero", DpHero);
