document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    // console.log('clicked by add money btn');

    // getInputFieldValueById();

    // const addMoney = getInputFieldValueById(); 
    // console.log('add money value', addMoney);

    // const addMoney = document.getElementById('add-money-amount').value;
    // const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueById('add-money-amount');
    const pinNumber = getInputFieldValueById('input-pin-number');
    console.log('add money with parameter', addMoney, pinNumber);
})