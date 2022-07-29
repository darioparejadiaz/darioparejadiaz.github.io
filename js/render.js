import "/components/dp-header/dp-header.js";
import "/components/dp-hero/dp-hero.js";
import "/components/dp-grid-gallery/dp-grid-gallery.js";
import "/components/dp-footer/dp-footer.js";

import {
  gardenImages,
  officeImages,
  eventImages,
  homeImages,
} from "/js/render-images.js";

//******************************************************** */

const gardenRenders = gardenImages.map((path) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  div.className = "swiper-slide";
  img.setAttribute("src", path);
  div.append(img);

  return div;
});

//******************************************************** */

const swiperWrapper1 = document.querySelector("#coverflow-swiper-1");
swiperWrapper1.append(...gardenRenders);

//******************************************************** */

// swiperjs Effect coverflow

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

//******************************************************** */

const officeRenders = officeImages.map((path) => {
  const img = document.createElement("img");
  img.setAttribute("src", path);

  return img;
});

//******************************************************** */

const dpGridGallery1 = document.querySelector("#gallery-1");
const gridContainer1 = dpGridGallery1.shadowRoot.children[0].children[2];
gridContainer1.append(...officeRenders);

//******************************************************** */

const eventRenders = eventImages.map((path) => {
  const img = document.createElement("img");
  const div = document.createElement("div");
  img.setAttribute("src", path);
  div.setAttribute("class", "swiper-slide");
  div.append(img);

  return div;
});

//******************************************************** */

const swiperWrapper2 = document.querySelector("#coverflow-swiper-2");
swiperWrapper2.append(...eventRenders);

//******************************************************** */

const homeRenders = homeImages.map((path) => {
  const img = document.createElement("img");
  img.setAttribute("src", path);

  return img;
});

//******************************************************** */

const dpGridGallery2 = document.querySelector("#gallery-2");
const gridContainer2 = dpGridGallery2.shadowRoot.children[0].children[2];
gridContainer2.append(...homeRenders);
