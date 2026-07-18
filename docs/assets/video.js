
document.querySelectorAll('.video-tile video').forEach(video => {
  const tile  = video.closest('.video-tile');
  const frame = video.closest('.video-frame');

  const ZOOM = 1.6; // how much bigger than the resting square tile

  function expand() {
    tile.classList.add('is-playing');

    const restingWidth = frame.getBoundingClientRect().width; // square, so width == height at rest
    const ratio = (video.videoWidth && video.videoHeight)
      ? video.videoWidth / video.videoHeight
      : 1;

    const newHeight = restingWidth * ZOOM;
    const newWidth  = newHeight * ratio;

    frame.style.width  = `${newWidth}px`;
    frame.style.height = `${newHeight}px`;
  }

  function reset() {
    tile.classList.remove('is-playing');
    frame.style.width  = '';
    frame.style.height = '';
  }

  video.addEventListener('play',  expand);
  video.addEventListener('pause', reset);
  video.addEventListener('ended', reset);
});
