import SimpleLightbox from "simplelightbox";

const lightboxSettings = {
  captions: false,
  disableRightClick: true
}

const headerLightbox = () => {
  let lightboxContainer = document.querySelector('.lightbox');
  if (!lightboxContainer) { return; }

  new SimpleLightbox('.lightbox a', lightboxSettings);
}

const ghostGalleries = () => {
  const galleries = document.querySelectorAll('.kg-gallery-container');
  if (!galleries) { return; }

  galleries.forEach(gallery => {
    new SimpleLightbox(
      gallery.querySelectorAll('img'), {
        ...lightboxSettings,
        sourceAttr: 'src'
      }
    );
  });
}

export default function lightbox() {
  headerLightbox();
  ghostGalleries();
}
