function enviar(){
    var num = document.getElementById("idade").value;
    var nome = document.getElementById("nome").value;
    
    if(idade.value < 18){
        alert(`Oi, ${nome}, infelizmente você não pode acessar o contéudo!`);
    }else if(idade.value >= 18){
        alert(`Oi, ${nome}, você pode acessar o conteúdo!`)
    }
}
