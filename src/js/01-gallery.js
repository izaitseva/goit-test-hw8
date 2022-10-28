import { galleryItems } from './gallery-items.js';

// Описаний в документації
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryItemMarkup = createGalleryItemMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryItemMarkup);

function createGalleryItemMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
          <li>
            <a class="gallery__item" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
            </li>
        `;
        })
        .join("");
}

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});
