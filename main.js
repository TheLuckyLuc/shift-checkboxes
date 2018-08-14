const inputs = [].slice.call(document.querySelectorAll("input"));

for (input of inputs) {
    input.addEventListener("click", function(event) {
        const firstCheck = inputs.findIndex(checkedBox);
        const lastCheck = findLastCheck(inputs);
        
        if (event.shiftKey) {
            for (let i = firstCheck; i < lastCheck; i++) {
                inputs[i].checked = true;
            }
        }
    });
}

function checkedBox(element) {
    return element.checked;
}

function findLastCheck(array) {
    for (let i = array.length - 1; i > 0; i--){
        if(array[i].checked){
            return i;
        }
    }
}