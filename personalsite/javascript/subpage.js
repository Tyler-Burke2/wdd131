document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.code_image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            console.log("Image clicked!");
            image.classList.toggle('expanded');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const viewCodeBtn = document.getElementById('viewCodeBtn');

    viewCodeBtn.addEventListener('click', () => {
        window.open('https://github.com/Tyler-Burke2/CSE-110--Intro-to-Programming-/blob/main/asdgsgd.py', '_blank');
    });
});


