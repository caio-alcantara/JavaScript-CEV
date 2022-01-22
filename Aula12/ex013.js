var agora = new Date()
var diaSemana = agora.getDay()
switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda-Feira')
        break
    
    case 2: 
        console.log('Terça-Feira')
        break

    case 3:
        console.log('Quarta-Feira')
        break
    
    case 4:
        console.log('Quinta-Feira')
        break
    
    case 5: 
        console.log('Sexta-Feira')
        break
    
    case 6:
        console.log('Sábado')
        break
    
    default:
        console.log(`[ERRO!] ${diaSemana} não é um dia válido. Escolha uma opção entre 0 e 6.`)
    }
