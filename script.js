/* ==========================================
   Samad Akorede Portfolio
   Clean JavaScript
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       Sticky Header
    ====================================== */

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("header-scrolled");
            } else {
                header.classList.remove("header-scrolled");
            }
        });
    }

    /* ======================================
       Active Navigation
    ====================================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const top = section.offsetTop - 180;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                currentSection = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();

    /* ======================================
       Scroll Reveal
    ====================================== */

    const revealItems = document.querySelectorAll(
        ".project-card, .skill-card, .trust-card, .repo-card, .testimonial-card, .why-box, .timeline-item, .contact-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.15

        });

        revealItems.forEach(item => {

            item.classList.add("hidden");
            observer.observe(item);

        });

    } else {

        revealItems.forEach(item => item.classList.add("show"));

    }

    /* ======================================
       Smooth Scrolling
    ====================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ======================================
       Project Hover
    ====================================== */

    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ======================================
       Skill Hover
    ====================================== */

    document.querySelectorAll(".skill-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ======================================
       Current Year
    ====================================== */

    const year = document.getElementById("year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});


/* ======================================
   Loader
====================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.remove();

        }, 500);

    }

});