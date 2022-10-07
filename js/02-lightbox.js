import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listOfGallery = document.querySelector(".gallery");

const renderItemsGallery = (pictures) =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
    )
    .join("");

listOfGallery.insertAdjacentHTML(
  "afterbegin",
  renderItemsGallery(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
