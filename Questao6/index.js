var password = document.getElementById("pass"),
pass_confirm = document.getElementById("pass_confirm");

function validadePassword(){
    if(password.value != pass_confirm.value){
        pass_confirm.setCustomValidity("Senha Diferentes!");
    }else{
        pass_confirm.setCustomValidity('');
    }
}

password.onchange = validadePassword;
pass_confirm.onkeyup = validadePassword;