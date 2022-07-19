import { images } from "./photography-images.js";

const photos = images.map((path) => {
  const img = document.createElement("img");
  img.setAttribute("src", path);
  return img;
});

const dpGridGallery = document.querySelector("dp-grid-gallery");
const gridContainer = dpGridGallery.shadowRoot.children[0].children[2];
gridContainer.append(...photos);
