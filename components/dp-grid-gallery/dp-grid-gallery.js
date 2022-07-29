class DpGridGallery extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["heading", "description"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "heading") {
      this.heading = newVal;
    }

    if (attr === "description") {
      this.description = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <section class="gallery-section">
            <h2 class="title">${this.heading}</h2>
            <p class="text">${this.description}</p>
            <div class="grid-container"></div>
        </section>
        <link rel="stylesheet" href="/components/dp-grid-gallery/dp-grid-gallery.css" />
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

customElements.define("dp-grid-gallery", DpGridGallery);
