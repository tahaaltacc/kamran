// This script makes the image float and enables interaction for post-it notes
document.addEventListener("DOMContentLoaded", () => {
    const picture = document.getElementById('kamran-picture');

    // Make the picture float by toggling a class
    picture.addEventListener('mouseover', () => {
        picture.style.animation = "float 2s infinite ease-in-out";
    });

    picture.addEventListener('mouseout', () => {
        picture.style.animation = "";
    });

    // Post-it Notes Interactions
    const postIt1 = document.getElementById('post-it-1');
    const postIt2 = document.getElementById('post-it-2');
    const postIt3 = document.getElementById('post-it-3');

    // Toggle the visibility of the post-it notes
    postIt1.addEventListener('click', () => {
        postIt1.classList.toggle('hidden');
    });

    postIt2.addEventListener('click', () => {
        postIt2.classList.toggle('hidden');
    });

    postIt3.addEventListener('click', () => {
        postIt3.classList.toggle('hidden');
    });
});
