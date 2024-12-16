document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const toggleButton = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-collapse');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


const testimonials = [
    "BioBiz has transformed the way we work!",
    "Outstanding services and support!",
    "Highly recommend BioBiz for startups!"
];

let index = 0;
setInterval(() => {
    document.querySelector('#testimonial').textContent = testimonials[index];
    index = (index + 1) % testimonials.length;
}, 3000);



const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



document.getElementById('contactForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (email === '' || message === '') {
        e.preventDefault();
        alert('Please fill out all fields.');
    }
});

// JavaScript to dynamically show the platform name when hovering
document.addEventListener('DOMContentLoaded', function () {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        const platformName = icon.getAttribute('data-name');

        // On mouseover, set the name of the platform
        icon.addEventListener('mouseover', function () {
            icon.setAttribute('title', platformName);
        });

        // Optional: Reset on mouseout (if needed for any other interactive purposes)
        icon.addEventListener('mouseout', function () {
            icon.removeAttribute('title');
        });
    });
});

// Function to make news bulletins scroll vertically
function startVerticalScroll(containerId) {
    const container = document.getElementById(containerId);
    const list = container.querySelector("ul");

    // Clone the list for infinite scrolling
    const clone = list.cloneNode(true);
    container.appendChild(clone);

    let scrollPosition = 0;

    // Scroll function
    function scrollNews() {
        scrollPosition += 1; // Increase scroll position
        if (scrollPosition >= list.scrollHeight) {
            scrollPosition = 0; // Reset to the top
        }
        container.scrollTop = scrollPosition; // Set the scroll position
    }

    // Start scrolling
    setInterval(scrollNews, 50); // Adjust speed (lower value = faster)
}

// Start scrolling for both bulletins
startVerticalScroll("indiaUpdates");
startVerticalScroll("weeklyUpdates");

