const form = document.getElementById('formIV')

function exibir() {
    form.style.visibility = "visible"
}

function getFormsIVValue(event) {
    event.preventDefault();
    var form = document.getElementById("formIV");
    if (form.competencia.value != "") {
        const checked = document.querySelector('#tecnicaCH:checked') !== null
        const checkedI = document.querySelector('#cognitivaCH:checked') !== null
        if (checked == false && checkedI == false) {
            alert("Preencha o tipo da competencia!")
        } else {
            console.log(checked)
            console.log(checkedI)

            var lastOne = {
                "id":1,
                "competencia": form.competencia.value,
                "tecnicaCH": checked,
                "cognitivaCH": checkedI,
            }
            alert("Cadastro finalizado")
            window.location.href = '../../vagas_estagiario/index.html'
            localStorage.setItem('lastOne', JSON.stringify(lastOne));
        }
    } else {
        alert("Campos invalidos")
    }

    console.log(lastOne);
}