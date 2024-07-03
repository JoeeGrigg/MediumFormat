import SimpleLightbox from "simplelightbox";

const lightboxSettings = {
  sourceAttr: 'src',
  captions: false,
  disableRightClick: true,
  overlayOpacity: 1,
  widthRatio: 0.95,
  heightRatio: 0.95,
  animationSpeed: 100,
  animationSlide: false,
  fadeSpeed: 200
}

const selectors = [
  'img.kg-image',
  '.kg-image img',
  'img.kg-gallery-image',
  '.kg-gallery-image img',
  'img.lightbox-image',
  '.lightbox-image img'
];

export default function lightbox() {
  let lightboxContainer = document.querySelector('#post');
  if (!lightboxContainer) { return; }

  new SimpleLightbox(
    lightboxContainer.querySelectorAll(selectors.join(', ')),
    lightboxSettings
  );
}
