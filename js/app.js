
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
    if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {

        console.log('Food : ', foodAmount, "rent : ", rentAmount, 'clothes : ', clothesAmount)
        // total Expense
        const totalExpenses = foodAmount + rentAmount + clothesAmount;
        console.log(totalExpenses);
        if (incomeAmount > totalExpenses) {
            // calculate Balance
            const balance = incomeAmount - totalExpenses;
            console.log(balance);
            // update UI
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance').innerText = balance;
        } else {
            console.log('you dont hava money')
            document.getElementById('error-for-expenses').style = 'display: block !important';
        }


        const error = document.getElementById('error-msg');
        error.style = 'display: none !important';


    }
    else {
        const error = document.getElementById('error-msg');
        error.style = 'display: block !important';
        console.log(error)


    }
})

document.getElementById('saving-amount').addEventListener('click', function () {
    const incomeAmount = getInputValue('income');
    // const percentInput = document.getElementById('percentage');
    const percentage = getInputValue('percentage')
    if (isNaN(percentage) == true) {
        console.log('Not number')
        document.getElementById('input-number').style = 'display: block !important';
        document.getElementById('input-greater-number').style = 'display: none !important';
    }
    else if (percentage <= 0) {
        console.log('Input large number')
        document.getElementById('input-number').style = 'display: none !important';
        document.getElementById('input-greater-number').style = 'display: block !important';
    }
    else {
        console.log(' a number')
        document.getElementById('input-number').style = 'display: none !important';
        document.getElementById('input-greater-number').style = 'display: none !important';

        const savedAmount = (incomeAmount * percentage) / 100;
        const getBalance = document.getElementById('balance');
        const balance = parseFloat(getBalance.innerText);
        console.log(balance);
        if (balance > savedAmount) {
            const remainingAmount = balance - savedAmount;
            document.getElementById('Savaing-balance').innerText = savedAmount;
            document.getElementById('remainder-balance').innerText = remainingAmount;
            document.getElementById('input-enough-money').style = 'display: none !important';
        }
        else {
            console.log('you dont have enough');
            document.getElementById('input-enough-money').style = 'display: block !important';
        }

        // console.log(savedAmount);

    }


})