function geraTabuada() {
    var tab = document.getElementById('resposta');
    if (document.getElementById("numero").value.length == 0) {
        window.alert('Nenhum valor foi digitado. Por favor, tente novamente.')
    } else {
        num = Number(document.getElementById('numero').value)
        var contador = 1
        resposta.innerHTML = ''
        while (contador <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num*contador}`
            item.value = `tabuada${contador}`
            resposta.appendChild(item)
            contador++
        }
    }
}    
 