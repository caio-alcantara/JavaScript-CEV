function contador() {
    var iniciotxt = document.getElementById('inicio')
    var inicio = Number(iniciotxt.value)
    var fimtxt = document.getElementById('fim')
    var fim = Number(fimtxt.value)
    var passotxt = document.getElementById('passo')
    var passo = Number(passotxt.value)

    if (iniciotxt.value.length == 0 || fimtxt.value.length == 0 || passotxt.value.length == 0 || passotxt.value == 0){
        window.alert('Não é possível contar usando esses parâmetros')
        resultado.innerHTML = ''
        return none
    }



    var resultado = document.getElementById('resultado')
    resultado.innerHTML = ''


    if (inicio < fim){
        for (var i = inicio; i <= fim; i+=passo) {
            resultado.innerHTML += ` ${i} ->`
        }
    } else {
        for(var i = inicio; i >= fim; i -= passo) {
            resultado.innerHTML += ` ${i} ->`
        }

    }
    resultado.innerHTML += ' Fim'
}