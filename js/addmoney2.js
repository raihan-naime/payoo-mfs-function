document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = inputFieldValue('add-money-amount');
    const pinNumber = inputFieldValue('input-pin-number');

    // console.log('the amount and pin number is: ', addMoney, ', ', pinNumber);

    if(isNaN(addMoney)){
        alert('failed to add money');
        return;
    }

    // wrong way to check or verify. do not try it at your serious website
    if (pinNumber === 1111) {

        const currentBalance = textFieldValue('current-balance');
        const newBalance = addMoney + currentBalance;
        document.getElementById('current-balance').innerText = newBalance;
        console.log(newBalance);

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction-container').appendChild(p);

    }
    else {
        alert('Failed to add the money.');
    }
})

