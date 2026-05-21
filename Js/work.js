

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

