class DpFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <footer>

        <div class="footer-container">

          <section class="site-map">

            <div class="logos-container">
              <img class="logo" src="/components/dp-footer/assets/dario-pareja-sign.png" />
              <div class="flag-container">
                <span>Proudly from Cali, Colombia</span><img class="flag" src="/components/dp-footer/assets/co.svg"/>
              </div>
            </div>
        
            <ul class="nav-container">
              <li><a href="/pages/render.html">Renders</a></li>
              <li><a href="/pages/photography.html">Photography</a></li>
              <li><a href="/pages/about-me.html">About Me</a></li>
              <li><a href="/pages/contact.html">Contact</a></li>
            </ul>
          
            <div class="social-container">
            <span class="follow-me">Follow Me:</span>
              <a href="https://www.instagram.com/darioparejadiaz/"><img src="/components/dp-footer/assets/instagram.svg" alt="instagram" /></a>
              <a href="https://www.linkedin.com/in/darioparejadiaz/"><img src="/components/dp-footer/assets/linkedin.svg" alt="linkedin" /></a>
            </div>

          </section>

          <div class="copy-info">
            <span>Copyright © 2022 Dario Pareja</span>
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
