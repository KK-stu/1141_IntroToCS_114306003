/**
 * 獨立的運算函數
 */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


/**
 * 動態更新按鈕文字
 */
const operatorMap = {
    'add': 'Add',
    'subtract': 'Subtract',
    'multiply': 'Multiply',
    'divide': 'Divide'
};


/**
 * 根據選中的運算符更新按鈕上的顯示文本。
 */
function updateButtonText() {
    const operatorSelect = document.getElementById('operator');
    const calculateBtn = document.getElementById('calculateBtn');
    
    // 獲取當前選中的運算符號
    const selectedOperation = operatorSelect.value;
    
    // 從 operatorMap 中找到對應的文本
    calculateBtn.textContent = operatorMap[selectedOperation] || 'Calculate';
}


/**
 * 主要計算函數
 */
function calculate() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const resultElement = document.getElementById('result');

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operatorSelect.value;
    
    let calculationResult;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Invalid Input";
        return;
    }

    switch (operation) {
        case 'add':
            calculationResult = add(num1, num2);
            break;
        case 'subtract':
            calculationResult = subtract(num1, num2);
            break;
        case 'multiply':
            calculationResult = multiply(num1, num2);
            break;
        case 'divide':
            calculationResult = divide(num1, num2);
            break;
        default:
            calculationResult = "Invalid Operator";
    }

    if (typeof calculationResult === 'string') {
        resultElement.textContent = calculationResult;
    } else {
        resultElement.textContent = calculationResult.toFixed(2);
    }
}


/**
 * 事件監聽 (Initialization)
 */
document.addEventListener('DOMContentLoaded', () => {
    const operatorSelect = document.getElementById('operator');
    
    // 監聽下拉選單的變化事件
    operatorSelect.addEventListener('change', updateButtonText);

    // 頁面載入時，執行一次計算和按鈕文本更新，以確保初始狀態正確
    updateButtonText();
    calculate();
});