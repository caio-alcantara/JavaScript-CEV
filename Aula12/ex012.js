var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if (hora >=5 && hora <= 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 19) {
    console.log('Boa tarde!')
    } else if (hora >= 19 && hora < 24 && hora != 0){
         console.log('Boa noite!')
        } else {
            console.log('Boa madrugada!')
        }
    