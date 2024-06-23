import SimpleLightbox from "simplelightbox";

let lightboxContainer = document.querySelector('.lightbox');

export default function macyFeed() {

    if (!lightboxContainer) { return; }

    console.log(lightboxContainer)

    let lightbox = new SimpleLightbox(
      '.lightbox a',
      {}
    );

}
