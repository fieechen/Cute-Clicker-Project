let count = 0;
let clickPower = 1; // normale Klickstärke

let upgrade1Unlocked = false;
let upgrade2Unlocked = false;
let upgrade3Unlocked = false;

const counter = document.getElementById("counter");
const clickBtn = document.getElementById("clickImg");
const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");

// Klick-Logik für Hauptbutton
clickBtn.addEventListener("click", () => {
    count += clickPower;
    counter.textContent = count;

    // Check für Upgrade 1
   if (!upgrade1Unlocked && count >= 50) {
        upgrade1.disabled = false;
        upgrade1Unlocked = true;
    }

    // Upgrade 2 freischalten
    if (!upgrade2Unlocked && count >= 100) {
        upgrade2.disabled = false;
        upgrade2Unlocked = true;
    }

    // Upgrade 3 freischalten
    if (!upgrade3Unlocked && count >= 150) {
        upgrade3.disabled = false;
        upgrade3Unlocked = true;
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

upgrade2.addEventListener("click", () => {
    if (count >= 100) {
        count -= 100; // Upgrade kostet 50 Beans
        clickPower = 4; // jetzt +2 pro Klick
        counter.textContent = count;
        upgrade2.disabled = true; // optional: nur einmal kaufbar
    }
});

upgrade3.addEventListener("click", () => {
    if (count >= 150) {
        count -= 150; // Upgrade kostet 50 Beans
        clickPower = 8; // jetzt +2 pro Klick
        counter.textContent = count;
        upgrade3.disabled = true; // optional: nur einmal kaufbar
    }
});