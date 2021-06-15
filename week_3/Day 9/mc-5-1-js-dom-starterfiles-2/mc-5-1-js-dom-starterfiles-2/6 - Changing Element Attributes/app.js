const input = document.getElementById("input");
const submit = document.getElementById("submit");
const image = document.getElementById("image");

submit.addEventListener("click", ()=>{
image.src = input.value;
})