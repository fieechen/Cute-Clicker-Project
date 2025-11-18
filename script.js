let count = 0;
let clickPower = 1; // normale Klickstärke

const counter = document.getElementById("counter");
const clickBtn = document.getElementById("clickImg");
const upgrade1 = document.getElementById("upgrade1");

// Klick-Logik für Hauptbutton
clickBtn.addEventListener("click", () => {
    count += clickPower;
    counter.textContent = count;

    // Check für Upgrade 1
    if (count >= 50) {
        upgrade1.disabled = false; // Button freischalten
    }
});

// Klick-Logik für Upgrade 1
upgrade1.addEventListener("click", () => {
    if (count >= 50) {
        count -= 50; // Upgrade kostet 50 Beans
        clickPower = 2; // jetzt +2 pro Klick
        counter.textContent = count;
        upgrade1.disabled = true; // optional: nur einmal kaufbar
    }
});
