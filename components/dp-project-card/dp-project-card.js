class DpProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [
      "heading",
      "description",
      "app_url",
      "repository_url",
      "btn_icon_src",
    ];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <div class="card">
        <h4 class="title">${this.heading}</h4>
        <p class="text">${this.description}</p>
        <div class="btn-container">
          <button class="btn primary-btn"><a href="${this.app_url}">Go to the app</a></button>
          <button class="btn secondary-btn"><a href="${this.repository_url}"><img src="${this.btn_icon_src}" />Repository</a></button>
        </div>
      </div>
      <link rel="stylesheet" href="/components/dp-project-card/dp-project-card.css" />
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

customElements.define("dp-project-card", DpProjectCard);