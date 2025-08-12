document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.autresproject');

    items.forEach(item => {
        item._typewriterTimeout = null; // Track timeout per item

        item.addEventListener('click', function () {
            const isExpanded = item.classList.contains('expanded');

            if (!isExpanded) {
                items.forEach(other => {
                    if (other !== item) {
                        other.classList.add('shrunk');
                        other.classList.remove('expanded');
                        // Cancel typewriter for other items
                        if (other._typewriterTimeout) {
                            clearTimeout(other._typewriterTimeout);
                            other._typewriterTimeout = null;
                        }
                    }
                });
                item.classList.add('expanded');
                item.classList.remove('shrunk');
                const descriptionElem = item.querySelector('.autresprojectdescription');
                if (descriptionElem) {
                    const text = descriptionElem.getAttribute('data-description');
                    console.log(text)
                    let i = 0;
                    descriptionElem.textContent = '';
                    descriptionElem.style.opacity = '1';
                    descriptionElem.style.transition = 'opacity 0.3s';

                    function typeWriter() {
                        // Stop typing if item is no longer expanded
                        if (!item.classList.contains('expanded')) return;
                        if (i < text.length) {
                            descriptionElem.textContent += text.charAt(i);
                            i++;
                            item._typewriterTimeout = setTimeout(typeWriter, 30);
                        } else {
                            item._typewriterTimeout = null;
                        }
                    }
                    typeWriter();
                }
            } else {
                items.forEach(other => {
                    other.classList.remove('shrunk');
                    other.classList.remove('expanded');
                    // Cancel typewriter for all items
                    if (other._typewriterTimeout) {
                        clearTimeout(other._typewriterTimeout);
                        other._typewriterTimeout = null;
                    }
                    const descriptionElem = other.querySelector('.autresprojectdescription');
                    if (descriptionElem) {
                        descriptionElem.style.transition = 'opacity 0.3s';
                        descriptionElem.style.opacity = '0';
                        setTimeout(() => {
                            descriptionElem.textContent = '';
                            descriptionElem.style.opacity = '';
                            descriptionElem.style.transition = '';
                        }, 300);
                    }
                });
            }
        });
    });
});