// console.log ("hello word")

// alert("Hello world!!");

// var nome = "Késsia" !não vamos usar o var

// let nome = "Kessia"


const campoSenha = document.getElementById("senha");
const btnSenha = document.querySelector("#mostrar-senha");

console.log](btnSenha.type);

btnSenha.addEventListener("click", function() {

    // if(campoSenha.type == "password"){
    //     campoSenha.type ="text";
    // }
    // else{
    //     campoSenha.type = "password"; 
    // }
    
    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
     

})
