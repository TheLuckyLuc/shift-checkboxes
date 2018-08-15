const inputs = [].slice.call(document.querySelectorAll("input"));

let firstCheck;

for (input of inputs) {
    input.addEventListener("click", checkBoxes);
}

// function that checks the necessary boxes
function checkBoxes(event) {
    
    // check if the shift key has been pressed on click
    if (!event.shiftKey) {
        // if not, mark this box as the "latest one clicked"
        firstCheck = inputs.indexOf(this);

    } else {
        // if shift IS pressed on click, mark this as the "last" check box
        const lastCheck = inputs.indexOf(this);
        
        if (firstCheck < lastCheck) {
            // if the first marked check is at a lower index than the last, loop up & tick the boxes inbetween
            for (let i = firstCheck; i < lastCheck; i++) {
                inputs[i].checked = true;
            }

        } else {
            // do the same if the opposite is true
            for (let i = lastCheck; i < firstCheck; i++) {
                inputs[i].checked = true;
            }
        }
    }
}