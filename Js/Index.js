
/* =====================================================
   NAV BLUR ON SCROLL
===================================================== */

const nav =
document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.classList.add("scrolled");
    }

    else {

        nav.classList.remove("scrolled");
    }
});

/* =========================================================
   ABOUT CURSOR GLOW
========================================================= */

const about =
document.querySelector(".about");

document.addEventListener("mousemove", (e) => {

    if (!about) return;

    const rect =
    about.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    about.style.setProperty("--x", `${x}px`);

    about.style.setProperty("--y", `${y}px`);
});

/* =========================================================
   STACK CARD SCROLL EFFECT
========================================================= */

const stackCards =
document.querySelectorAll(".project-card");

function stackEffect() {

    stackCards.forEach((card) => {

        const rect =
        card.getBoundingClientRect();

        const trigger =
        window.innerHeight * 0.15;

        if (rect.top < trigger) {

            const offset =
            trigger - rect.top;

            const scale =
            1 - (offset * 0.0005);

            card.style.transform =

            `scale(${Math.max(scale, 0.88)})`;

        }

        else {

            card.style.transform =
            "scale(1)";
        }
    });
}

/* RUN */

window.addEventListener(
    "scroll",
    stackEffect
);

stackEffect();
