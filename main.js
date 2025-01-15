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