const projetImages = document.querySelectorAll('.projetimage');

projetImages.forEach(image => {
  const frame = image.closest('.projetframe');

  image.addEventListener('mouseenter', () => {
    frame.classList.add('hovered');
  });

  image.addEventListener('mouseleave', () => {
    frame.classList.remove('hovered');
  });
});