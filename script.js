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


// const galleryContainer = document.querySelector('.gallery-container');
// let isDown = false;
// let startX;
// let scrollLeft;

// galleryContainer.addEventListener('mousedown', (e) => {
//     isDown = true;
//     galleryContainer.classList.add('active');
//     startX = e.pageX - galleryContainer.offsetLeft;
//     scrollLeft = galleryContainer.scrollLeft;
// });

// galleryContainer.addEventListener('mouseleave', () => {
//     isDown = false;
//     galleryContainer.classList.remove('active');
// });

// galleryContainer.addEventListener('mouseup', () => {
//     isDown = false;
//     galleryContainer.classList.remove('active');
// });

// galleryContainer.addEventListener('mousemove', (e) => {
//     if (!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - galleryContainer.offsetLeft;
//     const walk = (x - startX) * 2;
//     galleryContainer.scrollLeft = scrollLeft - walk;
// });

// galleryContainer.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     galleryContainer.scrollLeft += e.deltaY;
// });

// const galleryItems = document.querySelectorAll('.gallery-item img');
// const modal = document.getElementById('imageModal');
// const modalImage = document.getElementById('modalImage');
// const modalClose = document.getElementById('modalClose');

// galleryItems.forEach(item => {
//     item.addEventListener('click', () => {
//         modalImage.src = item.src;
//         modal.classList.add('active');
//     });
// });

// modalClose.addEventListener('click', () => {
//     modal.classList.remove('active');
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('active');
//     }
// });