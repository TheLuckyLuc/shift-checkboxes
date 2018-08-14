const inputs = [].slice.call(document.querySelectorAll("input"));

for (input of inputs) {
    input.addEventListener("click", function(event) {
        console.log(inputs.findIndex(checkedBox));
        console.log(findLastCheck(inputs));
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