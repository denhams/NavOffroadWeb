document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('.docs-image, .image-row img, .figure-row img');

  imgs.forEach(img => {
    img.addEventListener('click', e => {
      e.stopPropagation();

      const zoomed = img.classList.contains('is-zoomed');

      imgs.forEach(i => {
        i.classList.remove('is-zoomed');
        if (i.style.zIndex == "60")
          i.style.zIndex = "30";
        if (i.style.zIndex == "70")
          i.style.zIndex = "20";
      });

      if (!zoomed) {
        img.classList.add('is-zoomed');
        if (img.style.zIndex == "30")
          img.style.zIndex = "60";
        if (img.style.zIndex == "20")
          img.style.zIndex = "70";
      }
    });
  });

  document.addEventListener('click', () => {
    imgs.forEach(i => i.classList.remove('is-zoomed'));
  });
});
