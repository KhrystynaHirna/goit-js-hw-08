import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);
gallery.addEventListener('click', onGalleryItemsClick);


function createGalleryItems(items) {
    return items
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" source="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
 `;
    })
        .join('');
}
function onGalleryItemsClick(ev) {
    ev.preventDefault();

    if (ev.target.nodeName !== "IMG") {
        return;
    };
    const imageUrl = ev.target.dataset.source;
};

let lightbox = new SimpleLightbox('.gallery__item a', { captionsData: `alt`, captionDelay: 250 });



