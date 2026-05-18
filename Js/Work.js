/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
document.querySelector(".custom-cursor");

if(cursor){

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove",(e)=>{

        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor(){

        currentX += (mouseX - currentX) * 0.14;
        currentY += (mouseY - currentY) * 0.14;

        cursor.style.left =
        `${currentX}px`;

        cursor.style.top =
        `${currentY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    const hoverTargets =
    document.querySelectorAll(

        "a, button, .project-card"
    );

    hoverTargets.forEach(item=>{

        item.addEventListener("mouseenter",()=>{

            cursor.classList.add("active");
        });

        item.addEventListener("mouseleave",()=>{

            cursor.classList.remove("active");
        });
    });

    document.addEventListener("mousedown",()=>{

        cursor.classList.add("click");
    });

    document.addEventListener("mouseup",()=>{

        cursor.classList.remove("click");
    });
}

/* =========================================================
   NAV BLUR
========================================================= */

const nav =
document.querySelector(".nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 40){

        nav.classList.add("scrolled");
    }

    else{

        nav.classList.remove("scrolled");
    }
});

/* =========================================================
   PROJECT EXPAND
========================================================= */

const projectCards =
document.querySelectorAll(".project-card");

const overlay =
document.createElement("div");

overlay.classList.add("project-overlay");

document.body.appendChild(overlay);

projectCards.forEach(card=>{

    card.addEventListener("click",()=>{

        projectCards.forEach(item=>{

            item.classList.remove("active");
        });

        card.classList.add("active");

        overlay.classList.add("show");

        document.body.style.overflow = "hidden";
    });
});

overlay.addEventListener("click",()=>{

    projectCards.forEach(card=>{

        card.classList.remove("active");
    });

    overlay.classList.remove("show");

    document.body.style.overflow = "auto";
});