const form = document.getElementById('formII')

function exibir(){
    form.style.visibility="visible"
}
function getFormsIValue(event) {
    event.preventDefault();
    var form = document.getElementById("formII");
    console.log(form.name.value)
    if (form.instEnsino.value != "" && form.tipoFormacao.value != "" && form.andamento.value != "") {
        var secondOne = {
            "instEnsino": form.instEnsino.value,
            "tipoFormacao": form.tipoFormacao.value,
            "andamento": form.andamento.value,
        }
        window.location.href="../C-EstagiarioIII/index.html"
    }else{
        alert("Campos não preenchidos")
    }
}