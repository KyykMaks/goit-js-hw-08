import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galerryEl = document.querySelector(".gallery");

galerryEl.insertAdjacentHTML("beforeend", createMarkup(galleryItems));


function createMarkup(array) {  
  return array  
    .map(  
      ({ preview, original, description }) => { 
        return `  
          <li class="gallery__item">  
            <a class="gallery__link" href="${original}">  
              <img class="gallery__image" src="${preview}" alt="${description}"/>  
            </a>  
          </li>  
        `; 
      }  
    )  
    .join(" ");  
}

  new SimpleLightbox(".gallery__item a", {
    captions: true,
    captionsDay: 250,
  })