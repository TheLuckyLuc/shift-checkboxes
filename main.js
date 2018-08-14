const inputs = document.querySelectorAll("input");

let lastChecked;

for (input of inputs) {
    input.addEventListener("click", tickBoxes);
}

function tickBoxes(e) {
    let inBetween = false;

    if (e.shiftKey && this.checked) {
        inputs.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}