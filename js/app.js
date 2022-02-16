
// Get input Value by function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmount = parseFloat(inputText);
    return inputAmount;
}

// Get Calculate button and add Event Listener
document.getElementById('calculate-btn').addEventListener('click', function () {
    // get input Amount
    const incomeAmount = getInputValue('income');
    console.log(incomeAmount);

})