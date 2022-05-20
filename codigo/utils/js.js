const IUrl = "../C-Estagiario/index.html"
const IIUrl = "../C-Estagiario/C-EstagiarioII/index.html"
const IIIUrl = "../C-Estagiario/C-EstagiarioIII/index.html"
const IVUrl = "../C-Estagiario/C-EstagiarioIV/index.html"

var count = 0
const myIframe = document.getElementById('MyIframe')



 function  start() {
    var path =  localStorage.getItem("locate")
    console.log(path)
    if(path === "Estagiario"){
        myIframe.src = IUrl
    }else{
        console.log('outro fluxo')
    }
}

function viewClick() {
    var path = localStorage.getItem("locate")
    if (path == 'C') {
        goOn(true,false) 
    }else{
        console.log("Case E")
    }
}


function goOn(firstView, clicked) {
    if(!clicked){
        if (firstView) {
            count = 0
            myIframe.src = IUrl;
        }
    }
    if(clicked){
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
            count++
            break
        case 4:
            createAllForm()
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

function createAllForm(){
    localStorage.setItem('firstOne', firstOne)
    localStorage.setItem('secondOne', secondOne)
    localStorage.setItem('tirdOne', tirdOne)
    localStorage.setItem('lastOne', lastOne)

}

window.onload = () => {
    console.log("fui chamado ")
    start()
}
