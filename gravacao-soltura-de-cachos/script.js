document.addEventListener('DOMContentLoaded', () => {
  initAOS();
  initYear();
});

function initAOS() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 500,
    once: true,
    offset: 20,
    easing: 'ease-out-cubic',
    anchorPlacement: 'top-bottom',
    disableMutationObserver: true
  });
}

function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
