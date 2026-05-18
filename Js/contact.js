/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor = document.querySelector(".custom-cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

/* TRACK MOUSE */

window.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;
});

/* SMOOTH CURSOR */

function animateCursor(){

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    cursor.style.transform = `
    translate(${currentX}px, ${currentY}px)
    translate(-50%, -50%)
    `;

    requestAnimationFrame(animateCursor);
}

animateCursor();

/* HOVER EFFECT */

const hoverTargets = document.querySelectorAll(
    "a, button, .about-block, .about-title"
);

hoverTargets.forEach((item) => {

    item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });
});

/* CLICK EFFECT */

window.addEventListener("mousedown", () => {
    cursor.classList.add("click");
});

window.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
});

/* =====================================================
   NAV SCROLL EFFECT
===================================================== */

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        nav.classList.add("scrolled");
    }

    else{

        nav.classList.remove("scrolled");
    }
});