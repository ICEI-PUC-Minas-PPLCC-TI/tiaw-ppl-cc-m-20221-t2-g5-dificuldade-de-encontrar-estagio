
const form = document.getElementById('formIII')

function exibir(){
    form.style.visibility="visible"
}

function getFormsIIIValue(event){
    event.preventDefault();
    var form = document.getElementById("formIII");
    const chkandamento = document.querySelector('#andamento:checked') !== null
    if(form.empOrAuto.value != "" && form.cargo.value != "" && form.breveDesc.value != ""){
        var turdone = {
            "andamento": chkandamento,
            "empOrAuto": form.empOrAuto.value,
            "breveDesc": form.breveDesc.value,
            "cargo": form.cargo.value
        }
        localStorage.setItem("turdone", JSON.stringify(turdone))
        window.location.href="../C-EstagiarioIV/index.html"
    }else{
        alert("Campos invalidos!!!!")
    }
}