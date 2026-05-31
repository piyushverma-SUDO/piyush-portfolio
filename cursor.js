window.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector(".cursor");

    if (!cursor) {
        console.error("Cursor element not found");
        return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function updateCursor() {

        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        cursor.style.left = currentX + "px";
        cursor.style.top = currentY + "px";

        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    document
        .querySelectorAll("a, button, .project-card")
        .forEach((item) => {

            item.addEventListener("mouseenter", () => {
                cursor.classList.add("cursor-hover");
            });

            item.addEventListener("mouseleave", () => {
                cursor.classList.remove("cursor-hover");
            });

        });

});