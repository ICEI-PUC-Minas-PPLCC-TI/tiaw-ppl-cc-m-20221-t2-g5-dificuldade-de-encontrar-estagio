
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
 

    localStorage.setItem('type', type)
    location.href="../utils/nav.html"
    console.log(type);

}