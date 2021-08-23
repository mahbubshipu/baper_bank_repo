document.getElementById('btn-submit').addEventListener('click',function(){
    // alert('shipu');
    const emailfied=document.getElementById('useremeil');

    const useremail=emailfied.value;
    // console.log(useremail);

    const passfield=document.getElementById('userpassword');
    const userpass=passfield.value;
    // console.log(userpass);
    if(useremail=='sontan@gmail.com' && userpass=='abc123'){
        // console.log('valid password');
        window.location.href='bank.html';
        emailfied.value='';
    }
})