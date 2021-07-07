//Automatic FadeShow on Section 1
const slideshowImages = document.querySelectorAll(".section_a .slideshow-img");

const nextImageDelay = 4000;

let currentImageCounter = 0;
let prevImageCounter = 0;
let nextImageCounter = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {

    slideshowImages[currentImageCounter].style.opacity = 0;
    
    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    if(currentImageCounter != 0){
        prevImageCounter = (currentImageCounter -1) % slideshowImages.length;
    } else {
        prevImageCounter = slideshowImages.length - 1;
    }

    slideshowImages[nextImageCounter].style.opacity = 1;

    nextImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    
}

//Intersection Observers

//Header
const header = document.querySelector("header");
const sectionOne = document.querySelector(".section_a");

const sectionOneOptions = {
    rootMargin: "-50px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav_scrolled");
        } else {
            header.classList.remove("nav_scrolled");
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//About Us

const sliders = document.querySelectorAll(".slide_in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
    
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})