
function typeCadastro(type) {
    
    if (type == 'Estagiario') {
       
        localStorage.setItem('type', type);
        location.href="../LoginPage/indexEstagiario.html";
        console.log(type);
    }
    else {
        localStorage.setItem('type', type);
        location.href="../LoginPage/indexEstagiario.html";
        console.log(type);
        
    }
    
}