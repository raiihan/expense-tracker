
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
    // get Expenses Amount
    const foodAmount = getInputValue('food');
    const rentAmount = getInputValue('rent');
    const clothesAmount = getInputValue('clothes');
    console.log('Food : ', foodAmount, "rent : ", rentAmount, 'clothes : ', clothesAmount)
    // total Expense
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    console.log(totalExpenses);
    // calculate Balance
    const balance = incomeAmount - totalExpenses;
    console.log(balance);
    // update UI
    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;

})