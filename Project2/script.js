document.addEventListener('DOMContentLoaded', (event) => {
    let buttons = document.querySelectorAll('.number button');
    let result = document.querySelector('.result');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let btnValue = button.textContent;

            if (btnValue === 'AC') {
                currentInput = '';
                previousInput = '';
                operator = '';
                result.textContent = '';
            } else if (btnValue === 'Del') {
                currentInput = currentInput.slice(0, -1);
                result.textContent = currentInput;
            } else if (btnValue === '%') {
                if (currentInput !== '') {
                    currentInput = (parseFloat(currentInput) / 100).toString();
                    result.textContent = currentInput;
                }
            } else if (btnValue === '/' || btnValue === '+' || btnValue === '-' || btnValue === '*') {
                previousInput = currentInput;
                operator = btnValue;
                currentInput = '';
                result.textContent = previousInput + ' ' + operator;
            } else if (btnValue === '=') {
                if (previousInput !== '' && currentInput !== '') {
                    switch (operator) {
                        case '+':
                            currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
                            break;
                        case '-':
                            currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
                            break;
                        case '*':
                            currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
                            break;
                        case '/':
                            currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toFixed(2);
                            break;
                    }
                    result.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else {
                currentInput += btnValue;
                result.textContent = (previousInput ? previousInput + ' ' + operator + ' ' : '') + currentInput;
            }
        });
    });
});
