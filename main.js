// Change navbar opacity when scrolling
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 20) {
        navbar.style.opacity = '0.8';
    } else {
        navbar.style.opacity = '1';
    }
});

//BS
function goToJob75677034() { window.location.href = "https://www.greater.jobs/job/75677034"; }
//WHS
function goToJob75676592() { window.location.href = "https://www.greater.jobs/job/75676592"; }
// Assets
function goToJob75676593() { window.location.href = "https://www.greater.jobs/job/75676593"; }



function closeNav() { document.getElementById('navbarNav').classList.remove('show'); }


const texts = [
    "Do you want to add real value in your community?",
    "Do you want a role that is varied, rewarding and challenging?",
    "Are you an outstanding individual who wants to make a positive difference?"
];

let currentIndex = 0;
const carouselTextElement = document.getElementById('carousel-text');

function showNextText() {
    // Fade out
    carouselTextElement.style.opacity = 0;

    setTimeout(() => {
        // Change text after fade out
        currentIndex = (currentIndex + 1) % texts.length;
        carouselTextElement.innerText = texts[currentIndex];

        // Fade in
        carouselTextElement.style.opacity = 1;
    }, 500); // Reduce the fade out transition time
}

// Initial display of the first text
carouselTextElement.style.opacity = 1;

// Start the carousel with a slight delay for smooth initial appearance
setTimeout(() => {
    setInterval(showNextText, 3000); // 2 seconds of visibility + 1 second of transition
}, 2000);







