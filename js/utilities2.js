function inputFieldValue (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    // console.log(id, inputValue, inputNumber);
    return inputNumber;
}

function textFieldValue (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){

    // hide all the sections
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}