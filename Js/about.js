/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor = document.querySelector(".custom-cursor");

if (cursor) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    /* TRACK */

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    /* SMOOTH FOLLOW */

    function animateCursor() {

        currentX += (mouseX - currentX) * 0.14;
        currentY += (mouseY - currentY) * 0.14;

        cursor.style.left = `${currentX}px`;
        cursor.style.top = `${currentY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    /* HOVER TARGETS */

    const hoverTargets = document.querySelectorAll(

        "a, button, .about-block, .about-title"
    );

    hoverTargets.forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {

            cursor.classList.remove("active");
        });
    });

    /* CLICK */

    document.addEventListener("mousedown", () => {

        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {

        cursor.classList.remove("click");
    });
}

/* =====================================================
   MOUSE GLOW
===================================================== */

const glow = document.querySelector(".mouse-glow");

const section = document.querySelector(".resume-section");

if (glow && section) {

    section.addEventListener("mousemove", (e) => {

        const rect = section.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;
    });
}
/* =====================================================
   NAV BLUR ON SCROLL
===================================================== */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.classList.add("scrolled");
    }

    else {

        nav.classList.remove("scrolled");
    }
});