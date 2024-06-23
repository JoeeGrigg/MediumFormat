export default function mobileMenu() {
  const openToggle = document.getElementById('mobile-menu-open');
  const closeToggle = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  const open = () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  const close = () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  openToggle.addEventListener('click', () => {
    open();
  });

  closeToggle.addEventListener('click', () => {
    close();
  });

  mobileMenu.addEventListener('click', () => {
    close();
  });

  mobileMenu.querySelector('#mobile-menu-main').addEventListener('click', (e) => {
    e.stopPropagation();
  })

  window.addEventListener('resize', function() {
    close();
  });
}
