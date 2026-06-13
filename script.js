const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
        .getElementById("letter")
        .scrollIntoView({
            behavior: "smooth"
        });

});