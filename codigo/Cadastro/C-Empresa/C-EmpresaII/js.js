function avancar(event) {
    event.preventDefault();
    var form = document.getElementById("formI");
    console.log(form.name.value)
    if (form.name.value != "" && form.email.value != ""  && form.contact.value != "" && form.pass.value != "" && form.confirmPass.value != "") {
        if (form.pass.value === form.confirmPass.value && form.pass.value != "" && form.confirmPass.value != "") {
            var secondone = {
                "name": form.name.value,
                "email": form.email.value,
                "contact":  form.contact.value,
                "pass": form.pass.value,
                "confimPass": form.confirmPass.value
            }
            
            localStorage.setItem('secondoneEmpresa',JSON.stringify(secondone));
            window.location.href='../../../vagas_estagiario/index.html'

        } else {
         alert("As senhas devem ser identicas")
        }
           
    } else {
        alert("Campos não Preenchidos")
    }
}