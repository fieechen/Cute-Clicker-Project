let count = 0;

document.getElementById("clickImg").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});
