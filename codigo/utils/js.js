const IUrl = "../C-Estagiario/index.html"
const IIUrl = "../C-Estagiario/C-EstagiarioII/index.html"
const IIIUrl = "../C-Estagiario/C-EstagiarioIII/index.html"
const IVUrl = "../C-Estagiario/C-EstagiarioIV/index.html"

const empresaIUrl = "../Cadastro/C-Empresa/index.html"
const empresaIIUrl = "../Cadastro/C-Empresa/C-EmpresaII/index.html"


var count = 0
const myIframe = document.getElementById('MyIframe')




function start() {
    var path = localStorage.getItem("type")
    console.log(path)
    if (path === "Estagiario") {
        myIframe.src = IUrl
    } else {
        myIframe.src = empresaIUrl
    }
}


function goOn(firstView, clicked) {
    var path = localStorage.getItem("type")
    if (path == 'Estagiario') {
        if (!clicked) {
            if (firstView) {
                count = 0
                myIframe.src = IUrl;
            }
        }
        if (clicked) {
            switch (count) {
                case 0:
                    getFormsIValue()
                    count++
                    myIframe.src = IIUrl;
                    break
                case 1:
                    getFormsIIValue()
                    count++
                    myIframe.src = IIIUrl;
                    break
                case 2:
                    getFormsIIIValue()
                    count++
                    myIframe.src = IVUrl;
                    break
                case 3:
                    getFormsIVValue()
                    alert("tudo certo")
                    createAllForm()
                    break

            }
        }
    } else {
        if (!clicked) {
            if (firstView) {
                count = 0
                myIframe.src = empresaIUrl;
            }
        }
        if (clicked) {
            switch (count) {
                case 0:
                    // getFormsIValue()
                    count++
                    myIframe.src = empresaIIUrl;
                    break
                case 1:
                    // getFormsIIValue()
                    count++
                    myIframe.src = empresaIIUrl;
                    alert("tudo certo")

                    break



            }
        }
    }


}


function getFormsIValue() {
    const iframeWindow = myIframe.contentWindow;
    var form = iframeWindow.document.getElementById("formI");
    if (form.name.value != "" && form.email.value != "" && form.pass.value != "" && form.confirmPass.value != "") {

        if (form.pass.value === form.confirmPass.value) {
            var firstOne = {
                "name": form.name.value,
                "email": form.email.value,
                "pass": form.pass.value,
                "confimPass": form.confirmPass.value
            }
        } else {
            console.log("senha invalida")
        }
        console.log(firstOne);
    }
}

function getFormsIIValue() {
    const iframeWindow = myIframe.contentWindow;
    var form = iframeWindow.document.getElementById("formII");
    if (form.instEnsino.value != "" && form.tipoFormacao.value != "") {
        var secondOne = {
            "instEnsino": form.instEnsino.value,
            "tipoFormacao": form.tipoFormacao.value,
            "andamento": form.andamento.value,
        }
        console.log(secondOne);
    }
}

function getFormsIIIValue() {
    const iframeWindow = myIframe.contentWindow;
    var form = iframeWindow.document.getElementById("formIII");

    var tirdOne = {
        "empOrAuto": form.empOrAuto.value,
        "cargo": form.cargo.value,
        "breveDesc": form.breveDesc.value,
    }
    console.log(tirdOne);
}

function getFormsIVValue() {
    const iframeWindow = myIframe.contentWindow;
    var form = iframeWindow.document.getElementById("formIV");

    var lastOne = {
        "tecnicaCH": form.tecnicaCH.value,
        "cognitivaCH": form.cognitivaCH.value,
    }
    console.log(lastOne);
}

function createAllForm() {
    localStorage.setItem('firstOne', firstOne)
    localStorage.setItem('secondOne', secondOne)
    localStorage.setItem('tirdOne', tirdOne)
    localStorage.setItem('lastOne', lastOne)

}

window.onload = () => {
    if (localStorage.getItem('locate') === "Cadastro") {
        start()
    }
    console.log("outro fluxo ")
}
