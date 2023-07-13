function verificador() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || Number(fano.value)>ano || Number(fano.value)<1800) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsexo")
        var idade = ano- Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            if (idade>=0 && idade<10) {
                //CRIANÇA
                img.setAttribute('src','foto-menino.png')
                genero='Menino'
                res.innerHTML = `${genero} com ${idade} anos.`
            }else if (idade<21) {
                //JOVEM
                img.setAttribute('src','foto-homemjovem.png')
                genero='Homem jovem'
                res.innerHTML = `${genero} com ${idade} anos.`
            }else if (idade<50) {
                //ADULTO
                img.setAttribute('src','foto-adulto.png')
                genero='Homem adulto'
                res.innerHTML = `${genero} com ${idade} anos.`   
            }else {
                //IDOSO
                img.setAttribute('src','foto-idoso.png')
                genero='Idoso'
                res.innerHTML = `${genero} com ${idade} anos.`
            }
        }    
        else if(fsex[1]) {
            if (idade>=0 && idade<10) {
                //CRIANÇA
                img.setAttribute('src','foto-menina.png')
                genero='Menina'
                res.innerHTML = `${genero} com ${idade} anos.`
            }else if (idade<21) {
                //JOVEM
                img.setAttribute('src','foto-mulherjovem.png')
                genero='Jovem mulher'
                res.innerHTML = `${genero} com ${idade} anos.`
            }else if (idade<50) {
                //ADULTO
                img.setAttribute('src','foto-adulta.png')
                genero='Mulher aduta'
                res.innerHTML = `${genero} com ${idade} anos.`
            }else {
                //IDOSO
                img.setAttribute('src','foto-idosa.png')
                genero='Idosa'
                res.innerHTML = `${genero} com ${idade} anos.`
            }    
        }
        res.appendChild(img)
    } 

}

    
  
















