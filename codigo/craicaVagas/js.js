function getFormsValue() {
    var form = document.getElementById("novavaga")
    var novavaga = {
        "nome": form.ipnome.value,
        "turnoM": form.ipmanha.value,
        "turnoT": form.iptarde.value,
        "turnoN": form.ipnoite.value,
        "atuacao": form.ipatuacao.value,
        "horasdiarias": form.iphoras.value,
        "descricao": form.ipdescricao.value,
    }
    localStorage.setItem("novavaga", JSON.stringify(novavaga))
    console.log(novavaga)
}