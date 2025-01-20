const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modalImage.src = item.src;
        modal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});