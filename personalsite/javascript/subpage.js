document.addEventListener("DOMContentLoaded", function () {
    const runGameButton = document.getElementById("runGame");

    runGameButton.addEventListener("click", function () {
        fetch("/run-game")
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error("Error:", error));
    });
});
