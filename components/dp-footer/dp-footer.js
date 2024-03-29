class DpFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.flag_src = "/components/dp-footer/assets/co.svg";
    this.copy_right = "Copyright © 2023 Dario Pareja";
  }

  static get observedAttributes() {
    return ["flag_src", "copy_right"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <footer>

        <section class="info-section">

          <div class="logos-container">
              <h6 class="logo"><span>D</span>ario <span>P</span>areja<span>.</span></h6>
          </div>
      
          <ul class="site-map">
            <li><a class="text" href="/index.html">Home</a></li>
            <li><a class="text" href="/pages/projects.html">Projects</a></li>
            <li><a class="text" href="/pages/about-me.html">About</a></li>
            <li><a class="text" href="/pages/contact.html">Contact</a></li>
          </ul>
        
          <div class="location-container">
            <img class="location-img" src="/components/dp-footer/assets/location-sharp.svg" alt="" /><span class="text follow-me">Cali, Colombia</span><img class="flag" src="${this.flag_src}"/>
            
          </div>

        </section>

        <div class="copy-info">
          <span class="text">${this.copy_right}</span>
        </div>
  
      </footer>

      <link rel="stylesheet" href="/components/dp-footer/dp-footer.css" />
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

customElements.define("dp-footer", DpFooter);
