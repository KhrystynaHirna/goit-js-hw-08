
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryWraper = galleryItems.map((image) => {
       
    return `<a class="gallery__item" href="${image.original}">
  <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
}).join('');

galleryRef.insertAdjacentHTML("afterbegin", galleryWraper);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay:250 });


