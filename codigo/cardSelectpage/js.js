
function typeCadastro(type) {
    localStorage.setItem('type', type)
    location.href="../utils/nav.html"
    console.log(type);
}