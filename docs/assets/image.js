document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.docs-image').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('is-zoomed');
    });
  });
});