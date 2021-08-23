// document.getElementById('btn-submit-deposit').addEventListener('click',function(){

//     //set deposit amount
//     const depositField=document.getElementById('input-deposit-amount');
//     const newdepositText=depositField.value;
//     const newdepositAmount=parseFloat(newdepositText);


//     // console.log(depositAmount);
     
//     const depositTotal=document.getElementById('deposit-total');
//     const previousdepositText=depositTotal.innerText;
//     const previousdepositAmount=parseFloat(previousdepositText);
//      const currentDepositBalance= previousdepositAmount+newdepositAmount;
//     depositTotal.innerText=currentDepositBalance;

//     //update balance
//     const updatebalance=document.getElementById('update-balance');
//     const updateBalancePreviousText=updatebalance.innerText;
//     const updateBalancePreviousAmount=parseFloat(updateBalancePreviousText);

//     const updateTotalBalance=updateBalancePreviousAmount+newdepositAmount;

//     updatebalance.innerText=updateTotalBalance;
//     depositField.value='';


// })
document.getElementById('btn-submit-deposit').addEventListener('click',function(){
    const inputField=document.getElementById('input-deposit-amount');
    const inputFieldText=inputField.value;
    const inputFieldAmount=parseFloat(inputFieldText);

    const currentDeposit=document.getElementById('deposit-total');
    const currentDepositText=currentDeposit.innerText;
    const currentDepositAmount=parseFloat(currentDepositText);

    const depositTotal=currentDepositAmount+inputFieldAmount;
    currentDeposit.innerText=depositTotal;


    //update Balance

    const currentBalance=document.getElementById('update-balance');

    const currentBalanceText=currentBalance.innerText;
    const currentBalanceAmount= parseFloat(currentBalanceText);
    
    const updateBalance=currentBalanceAmount+inputFieldAmount;

    currentBalance.innerText=updateBalance;

    inputField.value='';

})