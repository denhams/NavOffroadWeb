document.addEventListener("DOMContentLoaded", () => {
  const bp = BiggerPicture({ target: document.body });

  document
    .querySelectorAll(".docs-image, .image-row img, .figure-row img")
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
          // intro: "fade" disables the target morphing animation on both open and close
          intro: "fade",
          maxZoom: 1, // Ensures tap opens, and the next tap closes cleanly
          closeOnImageClick: true,
          closeOnBackdropClick: true
        });
      });
    });

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