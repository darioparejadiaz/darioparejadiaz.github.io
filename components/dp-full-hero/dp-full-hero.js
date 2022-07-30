class DpFullHero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "heading",
      "description",
      "imgpath",
      "btn1text",
      "btn1href",
      "btn2text",
      "btn2href",
    ];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    this[attr] = newVal;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section class="hero-section">
        <div class="hero-container">
          <div class="info-container">
            <h1 class="title">${this.heading}</h1>
            <p class="text">${this.description}</p>
            <div class="buttons-container">
                <button class="btn btn-1"><a class="text" href="${this.btn1href}">${this.btn1text}</a></button>
                <button class="btn btn-2"><a class="text" href="${this.btn2href}">${this.btn2text}</a></button>
            </div>
          </div>
          <img src="${this.imgpath}" />
        </div>
        </section>
        <link rel="stylesheet" href="/components/dp-full-hero/dp-full-hero.css" />
    `;

    return template;
  }

  render() {
    this.shadowRoot.append(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("dp-full-hero", DpFullHero);
