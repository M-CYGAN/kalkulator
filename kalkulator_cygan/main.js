const display = document.getElementById('display')
const buttons = document.querySelectorAll('input[type="button"]');

let currentInput = '';
buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = this.value
        if (value === '=') {
            display.value = eval(currentInput);
            currentInput = display.value;
        } else if (value === 'C'){
            display.value = '';
            currentInput = '';
        } else {
            currentInput += value;
            display.value += value;
        }
    })
});