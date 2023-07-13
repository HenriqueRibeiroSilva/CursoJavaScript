function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("img")
    var data = new Date()
    var Hora = 9//data.getHours()
    var data2 = new Date()
    var Minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${Hora}:${Minutos} horas.`
    if (Hora >=0 && Hora< 12) {//Bom dia!
        img.src = `fotomanha.png`
        document.body.style.background = `#e2cd9f`
    } else if (Hora >=12 && Hora< 18) {//Boa tarde!
        img.src = `fototarde.png`
        document.body.style.background = `#b9846f`
    } else {//Boa noite!
        img.src = `fotonoite.png`
        document.body.style.background = `#515154`
    } 
        


}