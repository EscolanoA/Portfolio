document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.frames-wrapper');
  const frames = document.querySelectorAll('.frame');
  const frameCount = frames.length;

  // Set wrapper width to fit all frames
  wrapper.style.width = `${frameCount * 100}vw`;

  // Virtual scroll position
  let virtualScroll = 0;
  let currentScroll = 0;
  const maxScroll = (frameCount - 1) * window.innerHeight;

  function animate() {
    // Lerp towards virtualScroll
    currentScroll += (virtualScroll - currentScroll) * 0.1;
    // Clamp
    currentScroll = Math.max(0, Math.min(currentScroll, maxScroll));
    const translateX = -(currentScroll / window.innerHeight) * 100;
    wrapper.style.transform = `translateX(${translateX}vw)`;
    requestAnimationFrame(animate);
  }

  // Listen for wheel events
  window.addEventListener('wheel', (e) => {
    e.preventDefault();
    virtualScroll += e.deltaY;
    virtualScroll = Math.max(0, Math.min(virtualScroll, maxScroll));
  }, { passive: false });

  // Optional: Touch support for mobile
  let touchStartY = null;
  window.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
  });
  window.addEventListener('touchmove', (e) => {
    if (touchStartY !== null && e.touches.length === 1) {
      const deltaY = touchStartY - e.touches[0].clientY;
      virtualScroll += deltaY;
      virtualScroll = Math.max(0, Math.min(virtualScroll, maxScroll));
      touchStartY = e.touches[0].clientY;
      e.preventDefault();
    }
  }, { passive: false });
  window.addEventListener('touchend', () => {
    touchStartY = null;
  });

  // Prevent arrow/page keys from scrolling
  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(e.key)) {
      e.preventDefault();
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        virtualScroll += 100;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        virtualScroll -= 100;
      }
      virtualScroll = Math.max(0, Math.min(virtualScroll, maxScroll));
    }
  });

  // Recalculate on resize
  window.addEventListener('resize', () => {
    wrapper.style.width = `${frameCount * 100}vw`;
  });

  // Start animation loop
  animate();
});