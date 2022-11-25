let englishButton = document.getElementById('anglais');
let mathButton = document.getElementById("math")

console.log(mathButton);
console.log(englishButton);

englishButton.addEventListener("click", function () {
    console.log("J'ai click");
})

mathButton.addEventListener("click", function () {
    console.log("c'est les maths");
})