function soma(n1=0, n2=0) {
    return n1 + n2
}

function antecessores(num) {
    while (num > 0) {
        num--
        console.log(num)
    }
}
antecessores(5)


function ParOuImpar(num) {
    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(ParOuImpar(45))

function fatorial(num){
    var fatorial = 1
    var list = []
    while (num >= 1) {
        if (num > 1){
            list.push(num, 'x')
        } else {
            list.push(num, '=')
        }
        fatorial *= num
        num--
    }
    list.push(fatorial)
    console.log(`O fatorial de ${num} é ${list.join(' ')}`)
}

fatorial(05)

