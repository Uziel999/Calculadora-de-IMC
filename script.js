function calcular() {
    var peso_usuario = document.querySelector('#peso').value
    var altura_usuario = document.querySelector('#altura').value
    var resposta = document.querySelector('#resposta')
    var imc = peso_usuario / (altura_usuario * altura_usuario)
    var imc_usuario = parseFloat(imc).toFixed(1)
    if (peso_usuario == '' || altura_usuario == '') {
        alert(`Insira o dado que está faltando`)

    } else {
        verificar(imc_usuario)
        limpar(peso_usuario, altura_usuario)
    }

}



function verificar(imc_usuario) {

    if (imc_usuario < 12.5) {
        resposta.innerHTML = imc_usuario
        document.querySelector('#magreza').style.backgroundColor = 'red'
    } else if (imc_usuario >= 15.5 && imc_usuario <= 24.9) {
        resposta.innerHTML = imc_usuario
        document.querySelector('#normal').style.backgroundColor = 'blue'

    } else if (imc_usuario >= 25.0 && imc_usuario <= 29.9) {
        resposta.innerHTML = "<strong>" + imc_usuario + "</strong>"
        document.querySelector('#sobrePeso').style.backgroundColor = 'red'

    } else if (imc_usuario >= 30.0 && imc_usuario <= 39.9) {
        resposta.innerHTML = "<strong>" + imc_usuario + "</strong>"
        document.querySelector('#sobrePeso2').style.backgroundColor = 'red'

    } else {
        resposta.innerHTML = imc_usuario
        document.querySelector('#obeso').style.backgroundColor = 'red'
    }
}

function limpar(peso_usuario, altura_usuario) {
    var peso_usuario = document.querySelector('#peso').value = ''
    var altura_usuario = document.querySelector('#altura').value = ''
}