const image = document.getElementById("cat");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
if (image.style.display == "block") {
image.style.display = "none";
button.textContent = "Show";
} else {
image.style.display = "block";
button.textContent = "Hide";
}
})