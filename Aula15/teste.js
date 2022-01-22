var num = ['Fiat', 'BMW', 'Toyota']
var c = 0
while (c < num.length) {
    if (num[c].length <= 3) {
        console.log(num[c])
    } else {
        console.log('Grande demais')
    }
    c++
}

var numeros = [1, 4, 3, 2]
var contador = 0
var pares = []
while (contador < numeros.length) {
    if (numeros[contador] % 2 == 0) {
        pares.push(numeros[contador])
    }
    contador++
}
console.log(`Os valores pares são ${pares.sort()}`)

console.log(numeros[0])
console.log(numeros[numeros.length - 1])



var n = [1, 2, 3, 4, 5]

for (let i in n) {
    console.log(n[i])
}


var lista = [4, 5, 1, 6, 7]
var maior = menor = 0

for(let i in lista) {
    if (i == 0) {
        maior = lista[i]
        menor = lista[i]
    } else {
        if (lista[i] > maior){
            maior = lista[i]
        }
        if (lista[i] < menor) {
            menor = lista[i]
        }
    }
}
console.log(maior)
console.log(menor)

console.log('aaaaaaaaaaaaa')

lista.sort()
console.log(lista[0])
console.log(`${lista.slice(-1)}`)

console.log('aaa')

lista.sort()
console.log(lista[0])
console.log(lista[lista.length - 1])
