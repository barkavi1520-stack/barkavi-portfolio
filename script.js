
// ======================================
// BARKAVI PORTFOLIO - JAVASCRIPT
// ======================================


// 1. MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    // Change hamburger icon
    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Close menu when clicking a navigation link

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// 2. HEADER SCROLL EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// 3. BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// 4. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section-heading, .about-container, .timeline-item, " +
    ".skill-card, .project-card, .certificate-box, .contact-container"
);

// Add reveal class

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


// Observe all elements

revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// 5. ACTIVE NAVIGATION LINK

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


// 6. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// 7. CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get visitor information

    const visitorName = document.getElementById("name").value.trim();

    const visitorEmail = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (
        !visitorName ||
        !visitorEmail ||
        !subject ||
        !message
    ) {

        formStatus.textContent = "Please complete all fields.";

        return;

    }


    // Replace this with your actual email address

    const myEmail = "YOUR-EMAIL@gmail.com";


    // Create email content

    const emailSubject = encodeURIComponent(subject);

    const emailBody = encodeURIComponent(

        "Name: " + visitorName +
        "\nEmail: " + visitorEmail +
        "\n\nMessage:\n" + message

    );


    // Open visitor's email application

    const mailtoLink =
        "mailto:" + myEmail +
        "?subject=" + emailSubject +
        "&body=" + emailBody;


    formStatus.textContent =
        "Opening your email application...";


    window.location.href = mailtoLink;


    // Clear form

    contactForm.reset();

});


// ======================================
// END OF BARKAVI PORTFOLIO
// ======================================