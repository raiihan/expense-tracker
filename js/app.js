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

    // get Expenses Amount
    const foodAmount = getInputValue('food');
    const rentAmount = getInputValue('rent');
    const clothesAmount = getInputValue('clothes');
    if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
        // total Expense
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        if (incomeAmount > totalExpenses) {
            // calculate Balance
            const balance = incomeAmount - totalExpenses;
            // update UI
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance').innerText = balance;
            document.getElementById('error-for-expenses').style = 'display: none !important';
        } else {
            document.getElementById('error-for-expenses').style = 'display: block !important';
        }
        const error = document.getElementById('error-msg');
        error.style = 'display: none !important';
    }
    else {
        const error = document.getElementById('error-msg');
        error.style = 'display: block !important';
    }
})

document.getElementById('saving-amount').addEventListener('click', function () {
    const incomeAmount = getInputValue('income');
    const percentage = getInputValue('percentage')
    if (isNaN(percentage) == true) {
        document.getElementById('input-number').style = 'display: block !important';
        document.getElementById('input-greater-number').style = 'display: none !important';
    }
    else if (percentage <= 0) {
        document.getElementById('input-number').style = 'display: none !important';
        document.getElementById('input-greater-number').style = 'display: block !important';
    }
    else {
        document.getElementById('input-number').style = 'display: none !important';
        document.getElementById('input-greater-number').style = 'display: none !important';

        const savedAmount = (incomeAmount * percentage) / 100;
        const getBalance = document.getElementById('balance');
        const balance = parseFloat(getBalance.innerText);
        if (balance > savedAmount) {
            const remainingAmount = balance - savedAmount;
            document.getElementById('Savaing-balance').innerText = savedAmount;
            document.getElementById('remainder-balance').innerText = remainingAmount;
            document.getElementById('input-enough-money').style = 'display: none !important';
        }
        else {
            document.getElementById('input-enough-money').style = 'display: block !important';
        }
    }
})