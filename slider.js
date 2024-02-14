let currentSlide = 0;
const videos = document.querySelectorAll('.slider');

function showSlide(index) {
    videos.forEach((video, i) => {
        if (i === index) {
            video.style.display = 'block';
        } else {
            video.style.display = 'none';
        }
    });
}

function nextVideo() {
    currentSlide++;
    if (currentSlide >= videos.length) {
        currentSlide = 0; // Loop back to the first video
    }
    showSlide(currentSlide);
}

function previousVideo() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = videos.length - 1; // Go to the last video if at the beginning
    }
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);