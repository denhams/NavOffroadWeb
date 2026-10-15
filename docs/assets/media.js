document.addEventListener("DOMContentLoaded", () => {
  const bp = BiggerPicture({ target: document.body });

  // 1. Single images (excluding any inside a gallery-group container)
  document
    .querySelectorAll(".docs-image, .image-row img, .figure-row figure:not(:has(.gallery-group)) img")
    .forEach((img) => {
      img.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const caption = img.closest("figure")?.querySelector("figcaption")?.textContent.trim();

        bp.open({
          items: [{
            img: img.currentSrc || img.src,
            thumb: img.currentSrc || img.src,
            alt: img.alt || "",
            width: img.naturalWidth || 1200,
            height: img.naturalHeight || 800,
            ...(caption ? { caption } : {})
          }],
          intro: "fade",
          maxZoom: 1,
          closeOnImageClick: true,
          closeOnBackdropClick: true
        });
      });
    });

  // 2. Multi-image carousel gallery group (iPhone Duo)
  document.querySelectorAll('.gallery-group').forEach(el => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      bp.open({
        items: [
          {
            img: el.getAttribute('data-img'),
            thumb: el.getAttribute('data-img'),
            alt: el.getAttribute('data-alt') || "",
            width: parseInt(el.getAttribute('data-width'), 10) || 1419,
            height: parseInt(el.getAttribute('data-height'), 10) || 2796,
            caption: el.getAttribute('data-caption') || ""
          },
          {
            img: el.getAttribute('data-img-2'),
            thumb: el.getAttribute('data-img-2'),
            alt: el.getAttribute('data-alt-2') || "",
            width: parseInt(el.getAttribute('data-width-2'), 10) || 1574,
            height: parseInt(el.getAttribute('data-height-2'), 10) || 2194,
            caption: el.getAttribute('data-caption-2') || ""
          }
        ],
        position: 0,
        intro: "fade",
        maxZoom: 1,
        closeOnImageClick: true,
        closeOnBackdropClick: true
      });
    });
  });

  // 3. Videos
  document.querySelectorAll(".video-tile video").forEach((video) => {
    video.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const source = video.querySelector("source")?.src || video.currentSrc;
      if (!source) return;

      const caption = video.closest("figure")?.querySelector("figcaption")?.textContent.trim();
      const width = video.videoWidth || 1920;
      const height = video.videoHeight || 1080;

      bp.open({
        items: [{
          sources: [{ src: source, type: "video/mp4" }],
          thumb: video.poster || "",
          width,
          height,
          ...(caption ? { caption } : {})
        }],
        intro: "fade",
        closeOnBackdropClick: true
      });
    });
  });
});