document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.docs-image, .image-row img');

  imgs.forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();

      const zoomed = img.classList.contains('is-zoomed');

      imgs.forEach(i => i.classList.remove('is-zoomed'));

      if (!zoomed) img.classList.add('is-zoomed');
    });
  });

  document.addEventListener('click', () => {
    imgs.forEach(i => i.classList.remove('is-zoomed'));
  });
});