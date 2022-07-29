class DpFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.logo_src = "/components/dp-footer/assets/dario-pareja-sign.png";
    this.logo_note = "Proudly from Cali, Colombia";
    this.flag_src = "/components/dp-footer/assets/co.svg";
    this.copy_right = "Copyright © 2022 Dario Pareja";
  }

  static get observedAttributes() {
    return ["logo_src", "logo_note", "flag_src", "copy_right"];
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this[attr] = newValue;
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <footer>

        <div class="footer-container">

          <section class="info-section">

            <div class="logos-container">
              <img class="logo" src="${this.logo_src}" />
              <div class="flag-container">
                <span class="text">${this.logo_note}</span><img class="flag" src="${this.flag_src}"/>
              </div>
            </div>
        
            <ul class="site-map">
              <li><a class="text" href="/index.html">Home</a></li>
              <li><a class="text" href="/pages/web-dev.html">Web Dev</a></li>
              <li><a class="text" href="/pages/render.html">Renders</a></li>
              <li><a class="text" href="/pages/photography.html">Photography</a></li>
              <li><a class="text" href="/pages/about-me.html">About Me</a></li>
              <li><a class="text" href="/pages/contact.html">Contact</a></li>
            </ul>
          
            <div class="social-container">
              <span class="text follow-me">Follow Me:</span>
              <a class="text" href="https://www.instagram.com/darioparejadiaz/"><img src="/components/dp-footer/assets/instagram.svg" alt="instagram" /></a>
              <a class="text" href="https://www.linkedin.com/in/darioparejadiaz/"><img src="/components/dp-footer/assets/linkedin.svg" alt="linkedin" /></a>
            </div>

          </section>

          <div class="copy-info">
            <span class="text">${this.copy_right}</span>
          </div>
        
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
