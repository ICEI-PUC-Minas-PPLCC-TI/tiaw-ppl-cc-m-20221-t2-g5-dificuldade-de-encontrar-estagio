
function typeCadastro(type) {
    localStorage.setItem('type', type)
    if(type == 'Empresa'){
        location.href = "../Cadastro/C-Empresa/index.html"
    }else{
        location.href="../C-Estagiario/index.html"
    }
    
    console.log(type);
}