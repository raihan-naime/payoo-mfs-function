document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutMoney = inputFieldValue('add-cash-out');
    const pinNumber = inputFieldValue('input-cash-out-pin');

    if(isNaN(cashOutMoney)){
        alert('Failed to cash out');
        return;
    }
    
    if(pinNumber === 1111){
        const currentBalance = textFieldValue('current-balance');

        if(cashOutMoney > currentBalance){
            alert('You do not have sufficient balance');
            return;
        }

        const newBalance = currentBalance - cashOutMoney;
        document.getElementById('current-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold text-black">Cash Out</h4>
            <p>${cashOutMoney} withdraw. New Balance ${newBalance} </p>
        `

        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('There is a problem. Please try again later')
    }
    
    
})