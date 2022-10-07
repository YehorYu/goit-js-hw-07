import { galleryItems } from "./gallery-items.js";
// Change code below this line

const divOfGallery = document.querySelector(".gallery");

const renderItemsGallery = (pictures) =>
  pictures
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
      </a>
      </div>`
    )
    .join("");

divOfGallery.insertAdjacentHTML("afterbegin", renderItemsGallery(galleryItems));

divOfGallery.addEventListener("click", bigImage);

function bigImage(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}"  alt="${e.target.description}"/>`
  );

  instance.show();

  window.addEventListener("keydown", closePressEsp);

  function closePressEsp(e) {
    if (e.code === "Escape") {
      window.removeEventListener("keydown", closePressEsp);
      instance.close();
      return;
    }
  }
}
