
window.onload = () => {
    getData();
}



function getData() {
    var first = {
        "primeiro": JSON.parse(localStorage.getItem("novavaga"))
    }
    var tudo = []
    tudo.push(first)
    let vagasContainer = document.querySelector("#allvagas")
    vagasContainer.innerHTML = ""
    tudo.forEach((data) => {
        data.primeiro.forEach((data) => {
            let id = data.id;
            let nomeEmpresa = data.nomeEmpresa
            let nomeVaga = data.nome
            let horas = data.horasdiarias
            let turnoM = data.turnoM
            let turnoN = data.turnoN
            let turnoT = data.turnoT
            let desc = data.descricao
            let atuacao = data.atuacao
            var turno;

            if (turnoM == true) {
                turno = 'Manhã'
            } else if (turnoT == true) {
                turno = 'Tarde'
            } else {
                turno = "Noite"
            }


            let container = `
            <div class="containerCard" data-id="${id}>
                <div class="main" id="main">
                    <div id="title">
                      <h1 class="titleh1">${nomeEmpresa}</h1>
                     </div>
                     <div id="container2">
    
                         <h3 class="nomeVaga">Nome da vaga: ${nomeVaga}</h3>
    
                        <h3 class="horas">Horas diarias: ${horas}</h3>
                        <h3 class="turno">Turno de trabalho: ${turno}</h3>
                        <p class="desc">Descrição da vaga: ${desc}</p>
                        <p class="atuação">Area de atuação: ${atuacao}</p>
    
                     </div>
                     
                </div>
            </div>`;
            vagasContainer.innerHTML += container;
        })

    })

}

function novavagaSaveValue() {
    var form = document.getElementById("novavaga")
    const ipmanha = document.querySelector('#ipmanha:checked') !== null
    const iptarde = document.querySelector('#iptarde:checked') !== null
    const ipnoite = document.querySelector('#ipnoite:checked') !== null

    var novavaga = {
        "id": 0,
        "nomeEmpresa": form.ipnomeEmpresa.value,
        "nome": form.ipnome.value,
        "turnoM": ipmanha,
        "turnoT": iptarde,
        "turnoN": ipnoite,
        "atuacao": form.ipatuacao.value,
        "horasdiarias": form.iphoras.value,
        "descricao": form.ipdescricao.value,
    }
    if (localStorage.getItem('novavaga') === null) {
        localStorage.setItem("novavaga", JSON.stringify([novavaga]))
    } else {
        localStorage.setItem(
            'novavaga', JSON.stringify([
                ...JSON.parse(localStorage.getItem('novavaga')),
                novavaga
            ])
        );

    }
    alert("Vaga criada com sucesso")
    window.location.reload(true)
    console.log(novavaga)
}