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
            "id":1,
            "instEnsino": form.instEnsino.value,
            "tipoFormacao": form.tipoFormacao.value,
            "andamento": form.andamento.value,
        }
        localStorage.setItem('secondone',JSON.stringify(secondOne))
        window.location.href="../C-EstagiarioIII/index.html"
    }else{
        alert("Campos não preenchidos")
    }
}