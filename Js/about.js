
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
