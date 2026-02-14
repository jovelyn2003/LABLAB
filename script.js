document.addEventListener("DOMContentLoaded", function() {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const container = document.querySelector(".container");
    const buttonBox = document.querySelector(".buttons");
    const music = document.getElementById("bgMusic");

    // Move to page 2 ONLY when Yes is clicked
    yesBtn.addEventListener("click", function() {
        container.style.transform = "translateX(-100vw)";

        // Start music and fade in
        music.volume = 0;
        music.play().then(() => {
            let fade = setInterval(() => {
                if (music.volume < 0.9) {
                    music.volume = Math.min(music.volume + 0.05, 0.9);
                } else {
                    clearInterval(fade);
                }
            }, 200);
        }).catch(err => {
            console.log("Music play blocked by browser:", err);
        });
    });

    // Make No button move randomly
    noBtn.addEventListener("mouseover", function() {
        const boxRect = buttonBox.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const maxX = boxRect.width - btnRect.width;
        const maxY = boxRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

});
