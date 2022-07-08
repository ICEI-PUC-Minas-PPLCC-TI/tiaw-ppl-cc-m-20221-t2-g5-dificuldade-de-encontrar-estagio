function avancar(event) {
    event.preventDefault();
    var form = document.getElementById("formI");
    console.log(form.name.value)
    if (form.name.value != "" && form.cnpj.value != "") {
        const chkEmpresa = document.querySelector('#chkEmpresa:checked') !== null
        const chkMEI = document.querySelector('#chkMEI:checked') !== null
        const chkPofLib = document.querySelector('#chkPofLib:checked') !== null
        const chkPublic = document.querySelector('#chkPublic:checked') !== null
        if (chkEmpresa !== false || chkMEI !== false || chkPofLib !== false || chkPublic !== false) {
            var firstOne = {
                "name": form.name.value,
                "cnpj": form.cnpj.value,
                "chkEmpresa": chkEmpresa,
                "chkMEI": chkMEI,
                "chkPofLib": chkPofLib,
                "chkPublic": chkPublic

            }
    
            localStorage.setItem('firstOneEmpresas', JSON.stringify(firstOne));
            window.location.href = "./C-EmpresaII/index.html"
        }else{
        alert("Indique o tipe de empresa!!")
        }
    } else {
        alert("Campos invalidos")
    }
}