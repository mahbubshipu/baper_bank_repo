document.getElementById('btn-submit-withdraw').addEventListener('click',function(){
    const inputFieldWithdraw=document.getElementById('input-withdraw-amount');
    const inputFieldWithdrawText=inputFieldWithdraw.value;
    const inputFieldWithdrawAmount=parseFloat(inputFieldWithdrawText);

    const currentwithdrawAmount=document.getElementById('withdraw-total');
    const withDrawText=currentwithdrawAmount.innerText;
    const withDrawAmount=parseFloat(withDrawText);
    const newWithDrawAmount=withDrawAmount+inputFieldWithdrawAmount;
    currentwithdrawAmount.innerText=newWithDrawAmount;

    //update balance
    const withdrawBalance=document.getElementById('update-balance');
    const withdrawBalanceText=withdrawBalance.innerText;

    const withdrawBalanceAmount=parseFloat(withdrawBalanceText);

    const newwithdrawBalance=withdrawBalanceAmount-inputFieldWithdrawAmount;
    withdrawBalance.innerText=newwithdrawBalance;

    inputFieldWithdraw.value='';

})