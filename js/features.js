document.getElementById('show-add-money-form')
    .addEventListener('click', function(event){
        console.log('added add money button');
        showSectionById('add-money-section');
    })

document.getElementById('show-cash-out-form')
    .addEventListener('click', function(){
        showSectionById('cash-out-section');
    })

document.getElementById('show-transaction-section')
    .addEventListener('click', function(){
        showSectionById('transaction-section');
    })