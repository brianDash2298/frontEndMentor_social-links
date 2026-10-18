const links = document.querySelectorAll(".link");

links.forEach(function (link) {
    link.addEventListener("mouseover", function (e) {
        const rect = link.getBoundingClientRect();

        // Calculate mouse position RELATIVE to the top-left of the button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Pass coordinates to CSS custom variables
        link.style.setProperty("--x", `${x}px`);
        link.style.setProperty("--y", `${y}px`);

        console.clear();
        console.log(rect);
        console.log(x);
        console.log(y);
    });
}); 