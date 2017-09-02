import calculator from './calc-module'; 
import output from './output-module'; 
//--------------------------------------------------------------------------------
const crtEl = document.createElement.bind(document);
const crtTxt = document.createTextNode.bind(document);
const getEl = document.getElementById.bind(document)
//--------------------------------------------------------------------------------
const signMatcher = {
    '+': calculator.add,
    '-': calculator.substruct,
    '*': calculator.multiply,
    '/': calculator.divide
}
//--------------------------------------------------------------------------------
function checkOperands(a, b) {
    return isNaN(b) || Number.isNaN(b);
}
//--------------------------------------------------------------------------------
function render() {
    let appEl = getEl('app');
    let calcEl  = crtEl('div');
    let inputElop1;
    let inputElop2;
    let buttonEl = crtEl('button')
    let outputEl = crtEl('div');
    let selectEl = crtEl('select');

    inputElop1 = crtEl('input');
    inputElop1.type = 'number';
    inputElop1.placeholder = 'Input operand1';
    inputElop2 = crtEl('input');
    inputElop2.type = 'number';
    inputElop2.placeholder = 'Input operand2';
    
    selectEl.value = Object.keys(signMatcher)[ 0 ];
    for (let prop in signMatcher) {
        let optionEl = crtEl('option');

        optionEl.value = prop;
        optionEl.innerText = prop;
        selectEl.appendChild(optionEl);
    }

    buttonEl.innerText = ' = ';
    buttonEl.onclick = () => {
        let a = +inputElop1.value;
        let b = +inputElop2.value;

        if (checkOperands(a, b)) {
            alert('Both operands must be filled and each must be a number!');
            return;            
        }

        output.showResult(signMatcher[selectEl.value](a, b));
    }

    outputEl.id = 'output';
    outputEl.appendChild(crtTxt('?'));

    calcEl.id = 'calculator';
    calcEl.appendChild(crtEl('p')).appendChild(crtTxt('Calculator'));
    calcEl.appendChild(inputElop1);
    calcEl.appendChild(selectEl);
    calcEl.appendChild(inputElop2);
    calcEl.appendChild(buttonEl);
    calcEl.appendChild(outputEl);

    appEl.appendChild(calcEl);
}
//--------------------------------------------------------------------------------
export default {
    render
}