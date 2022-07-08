window.onload = () => {
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        console.log(param[1])
        getData(param[1])
    }
}

function getData(code) {
    var first = {
        "primeiro": JSON.parse(localStorage.getItem("novavaga"))
    }
    var tudo = []
    tudo.push(first)
    let vagasContainer = document.querySelector("#container")
    vagasContainer.innerHTML = ""
    tudo.forEach((data) => {


        data.primeiro.forEach((data) => {
            if (code = data.id) {
                let id = code;
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
                <div class="info">
                <div class="h4-container">
                    <h4>${nomeEmpresa}</h4>
                </div>      
                <h5 class="info-item">TURNO: ${turno}</h5>
                <h5 class="info-item">HORAS POR DIA:${horas} </h5>
                <h5 class="info-item">BOLSA: A Combinar</h5>
                <h5 class="info-item">BENEFÍCIOS: A Combinar </h5>
            </div>
            <div class="info2">
                <div class="h4-container">
                    <h4>REQUISITOS</h4>
                </div>
                <h5 class="info2-item">CURSANDO: </h5>
                <h5 class="info2-item">QUALIFICAÇÃO: </h5>
                <h5 class="info2-item">CONHECIMENTOS: </h5>
                <h5 class="info2-item">DOMÍNIO EM LÍNGUAS ESTRANGEIRAS: </h5>
                <div class="chk">
                    <input type="checkbox" name="basico" id="basico">
                    <label for="basico">Básico</label>
                    <input type="checkbox" name="inter" id="inter">
                    <label for="inter">Intermediário</label>
                    <input type="checkbox" name="avan" id="avan">
                    <label for="avan">Avançado</label>
                </div>
            </div>`;
                vagasContainer.innerHTML += container;
            }else{
                console.log("não é o id")
            }

        })

    })

}
