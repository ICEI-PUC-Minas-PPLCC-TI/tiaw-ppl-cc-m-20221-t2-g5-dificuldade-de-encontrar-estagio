const array = [
    {
        'id': 1,
        'nome': 'Coisa',
        'turno': 'Manha',
        'horas': '6',
        'nomeVagas': 'Vaga1'
    },
    {
        'id': 2,
        'nome': 'Coisa1',
        'turno': 'Tarde',
        'horas': '6',
        'nomeVagas': 'Vaga2'
    },
    {
        'id': 3,
        'nome': 'Coisa2',
        'turno': 'Noite',
        'horas': '4',
        'nomeVagas': 'Vaga3'
    },
    {
        'id': 4,
        'nome': 'Coisa3',
        'turno': 'Manha',
        'horas': '6',
        'nomeVagas': 'Vaga4'
    }
];
window.onload = () => {
    coisa();
}

function coisa() {
    let vagasContainer = document.querySelector("#container")
    vagasContainer.innerHTML = ""
    array.forEach((data) => {
        let id = data.id
        let titulo = data.nome
        let nomeVaga = data.nomeVagas
        let horas = data.horas
        let turno = data.turno
        let container = `
        <div class="containerCard" data-id="${id}>
            <div class="main" id="main">
                <div id="title">
                  <h1 class="titleh1">${titulo}</h1>
                 </div>
                 <div id="container2">

                     <h3 class="nomeVaga">Nome da vaga: ${nomeVaga}</h3>
           
                    <h3 class="horas">Horas diarias: ${horas}</h3>
                    <h3 class="turno">Turno de trabalho: ${turno}</h3>
                 </div>
                 
            </div>
        </div>`;
        vagasContainer.innerHTML += container;
    })

}