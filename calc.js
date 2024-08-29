let disp = document.querySelector("#display");
 let cButton = document.querySelector("#C-button");

function displayAppend(a) {
    disp.value += a;
}

 cButton.addEventListener("click",()=> {
    disp.value = "";
 });


function calculate() {
    
    try {
        let result = eval(disp.value); 
        disp.value = result;
    } catch (e) {
        disp.value = 'Error';
    }
}
