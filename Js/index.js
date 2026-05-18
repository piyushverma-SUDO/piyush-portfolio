/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
document.querySelector(".custom-cursor");

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

        cursor.style.left =
        `${currentX}px`;

        cursor.style.top =
        `${currentY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    /* HOVER TARGETS */

    const hoverTargets =
    document.querySelectorAll(

        "a, button, .project-card, .project-btn"
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

    document.addEventListener("mousedown", () => {

        cursor.classList.add("click");
    });

    document.addEventListener("mouseup", () => {

        cursor.classList.remove("click");
    });
}

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
   OPTIMIZED STACK CARD EFFECT
========================================================= */

const stackCards =
document.querySelectorAll(".project-card");

function stackEffect() {

    stackCards.forEach((card) => {

        const rect =
        card.getBoundingClientRect();

        const trigger =
        window.innerHeight * 0.18;

        if (rect.top < trigger) {

            const offset =
            trigger - rect.top;

            /* SUBTLE SCALE */

            const scale =
            1 - (offset * 0.00015);

            card.style.transform =

            `scale(${Math.max(scale, 0.94)})`;

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
    stackEffect,
    { passive: true }
);

stackEffect();