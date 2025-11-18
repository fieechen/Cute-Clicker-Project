let count = 0;

document.getElementById("clickBtn").addEventListener("click", () => {
    count++;
    document.getElementById("counter").textContent = count;
});
