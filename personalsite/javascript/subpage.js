document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.code_image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log("Image clicked!");
            image.classList.toggle('expanded');
        });
    });
});
