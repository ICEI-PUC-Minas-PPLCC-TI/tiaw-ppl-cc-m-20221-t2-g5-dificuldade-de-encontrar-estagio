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
            <div class="containerCard" data-id="${id}" >
            <div class="main" id="main">
                <div id="title">
                  <h1 class="titleh1">${nomeEmpresa}, id : ${id}</h1>

                 </div>
                 <div id="container2">

                     <h3 class="nomeVaga">Nome da vaga: ${nomeVaga}</h3>
           
                    <h3 class="horas">Horas diarias: ${horas}</h3>
                    <h3 class="turno">Turno de trabalho: ${turno}</h3>
                 </div>
                 <button onclick="maisdetalhes(${id})">Cadastrar na vaga</button>
            </div>
        </div>`;
        vagasContainer.innerHTML += container;
        })

    })

}

function maisdetalhes(id){
    console.log(id)
    alert('Você foi cadastrado na vaga de id' + " " + id)
}