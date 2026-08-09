// Wait until the page has loaded
document.addEventListener("DOMContentLoaded", () => {

    const helloButton = document.getElementById("helloButton");

    helloButton.addEventListener("click", () => {
        alert("Hello! 👋");
    });

});