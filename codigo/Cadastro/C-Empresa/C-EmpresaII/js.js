function avancar(event) {
    event.preventDefault();
    var form = document.getElementById("formI");
    console.log(form.name.value)
    if (form.name.value != "" && form.email.value != ""  && form.contact.value != "" && form.pass.value != "" && form.confirmPass.value != "") {
        if (form.pass.value === form.confirmPass.value && form.pass.value != "" && form.confirmPass.value != "") {
            var firstOne = {
                "name": form.name.value,
                "email": form.email.value,
                "contact":  form.contact.value,
                "pass": form.pass.value,
                "confimPass": form.confirmPass.value
            }
            
            localStorage.setItem('firstOne',JSON.stringify(firstOne));
            window.location.href="./C-EstagiarioII/index.html"

        } else {
         alert("As senhas devem ser identicas")
        }
            window.location.href = ""
    } else {
        alert("Campos não Preenchidos")
    }
}