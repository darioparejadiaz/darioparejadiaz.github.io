class DpSwiperJs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
        <link
            rel="stylesheet"
            href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/components/dp-swiperjs/dp-swiperjs.css" />
        <section class="swiper-section">
        <h2 class="title">Gardens gallery</h2>
        <div class="coverflow-swipe-container">
            <div class="swiper mySwiper">
                <div id="coverflow-swiper" class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
        </section>
        
        <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
        <script>
            let swiper = new Swiper(".mySwiper", {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",
                coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                },
                pagination: {
                el: ".swiper-pagination",
                },
            });
        </script>
        
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

customElements.define("dp-swiperjs", DpSwiperJs);
