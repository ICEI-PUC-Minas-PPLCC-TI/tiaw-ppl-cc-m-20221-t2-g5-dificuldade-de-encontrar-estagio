
function typeCadastro(type) {
    let locate = localStorage.getItem('locate')
    localStorage.setItem('type', type)
    if(locate === "Entrar"){
        if(type == 'Empresa'){
            location.href = "../LoginPage/Empresa/indexEmpresa.html"
        }else{
            location.href="../LoginPage/Estagiario/indexEstagiario.html"
        }
    }else{
        if(type == 'Empresa'){
            location.href = "../Cadastro/C-Empresa/index.html"
        }else{
            location.href="../C-Estagiario/index.html"
        }
    }
   
    
    console.log(type);
}