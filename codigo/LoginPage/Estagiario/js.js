function avancar(event)
{
    event.preventDefault();
    var form = document.getElementById("formI")
    console.log(form.email.value)
    if (form.email.value != "" && form.pass.value != "")
    {
        var nome = {
            "email": form.email.value,
            "senha": form.pass.value
        }

        localStorage.setItem('nome', JSON.stringify(nome));
        window.location.href="../../vagas_estagiario/index.html"
    }
    else 
    {
        alert("Campos não preenchidos")
    }
}
