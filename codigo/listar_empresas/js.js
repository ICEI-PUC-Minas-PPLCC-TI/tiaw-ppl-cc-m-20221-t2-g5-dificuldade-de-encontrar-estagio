const array = [
    {
       'id': 1,
       'nome':'Coisa',
       'turno':'Manha',
       'horas':'6',
       'nomeVagas':'Vaga1'
   },
   {
       'id': 2,
       'nome':'Coisa1',
       'turno':'Tarde',
       'horas':'6',
       'nomeVagas':'Vaga2'
   },
   {
       'id': 3,
       'nome':'Coisa2',
       'turno':'Noite',
       'horas':'4',
       'nomeVagas':'Vaga3'
   },
   {
       'id': 4,
       'nome':'Coisa3',
       'turno':'Manha',
       'horas':'6',
       'nomeVagas':'Vaga4'
   }
];


function coisa(){
    let vagasContainer = document.querySelector("#container")
    vagasContainer.innerHTML=""
    array.forEach((data) =>{
        let id = data.id
        let titulo = data.nome
        let nomeVaga = data.nomeVagas
        let horas = data.horas
        let turno = data.turno
        let container =` <div class="container" data-id="${id}>
                    <h1 class="droga">${titulo}</h1>
                    <h2 class="nomeVaga">${nomeVaga}</h2>
                    <h2 class="horas">${horas}</h2>
                    <h2 class="turno">${turno}</h2>

                    
        </div>`;
        vagasContainer.innerHTML += container;
    })

}