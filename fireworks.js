document.addEventListener("DOMContentLoaded", function () {
    const burstContainer1 = document.getElementById("burst1");
    const burstContainer2 = document.getElementById("burst2");

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createParticle(color) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.backgroundColor = color;
        return particle;
    }

    function createFirework(burstContainer, colors) {
        const firework = document.createElement("div");
        firework.className = "firework";
        burstContainer.appendChild(firework);

        const particleCount = 150;

        for (let i = 0; i < particleCount; i++) {
            const particle = createParticle(colors[getRandomInt(0, colors.length - 1)]);
            firework.appendChild(particle);
        }

        setTimeout(() => {
            burstContainer.removeChild(firework);
        }, 5000);
    }

    function launchFireworks() {
        setInterval(() => createFirework(burstContainer1, ["#ff0000", "#ffcc00", "#ffff00"]), 2000);
        setInterval(() => createFirework(burstContainer2, ["#00ff00", "#00ccff", "#ff66b2"]), 2000);
    }

    launchFireworks();
});
