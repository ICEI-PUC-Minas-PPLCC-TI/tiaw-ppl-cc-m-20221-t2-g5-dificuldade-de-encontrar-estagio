function avancar(event)
{
    event.preventDefault();
    var form = document.getElementById("formI")
    console.log(form.email.value)
    if (form.email.value != "" && form.pass.value != "")
    {
        var login = {
            "email": form.email.value,
            "senha": form.pass.value
        }

        localStorage.setItem('login', JSON.stringify(login));
        window.location.href="indexEmpresa.html"
    }
    else 
    {
        alert("Campos não preenchidos")
    }
}
