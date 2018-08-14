const inputs = document.querySelectorAll("input");

for (input of inputs) {
    input.addEventListener("click", event => {
        console.log(event.shiftKey);
    });
}