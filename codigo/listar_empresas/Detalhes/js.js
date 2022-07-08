const vagasContainer = document.getElementById('item')

window.onload = () => {
    getData();
}

function getData() {
    var first = {
        "primeiro": JSON.parse(localStorage.getItem("firstOneEmpresas"))
    }
    var second = {
        "segundo": JSON.parse(localStorage.getItem("secondoneEmpresa"))
    }

    var tudo = []
    tudo.push(first)
    tudo.push(second)

    console.log(tudo)
    console.log(second)

    
    vagasContainer.innerHTML = ''
    tudo.forEach((data) => {
        let contato = ''//data.segundo.contact
        let titulo = '' //.primeiro.name
        let CNPJ = ''//data.primeiro.cnpj
        let EMAIL = ''//data.segundo.email
        container = `
        <div id="container">
            <p class="item">Nome Empresa:</p>
            <p class="item-valor">${titulo}</p>
        </div>
        <div id="caracteristica">
            <p class="item">Contato:</p>
            <p class="item-valor">${contato}</p>
        </div>
        <div id="caracteristica">
            <p class="item">CNPJ:</p>
            <p class="item-valor">${CNPJ}</p>
        </div>
        <div id="caracteristica">
            <p class="item">EMAIL:</p>
            <p class="item-valor">${EMAIL}</p>
        </div>
            `;
        vagasContainer.innerHTML += container;
    })
}