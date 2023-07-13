function contar(){
    let ini = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpassos')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim == 0 || passo == 0) {
        window.alert('[ERRO] Verifique os dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let n1 = Number(ini.value)
        let n2 = Number(fim.value)
        let n3 = Number(passo.value)

        if (n3 == 0) {
            window.alert('Passo inválido! considerando passo como 1')
            n3 = 1
        }
        if (n1<n2) {
            //Contagem crescente
            for(let c = 1; c <= n2 ; c+=n3) {
                res.innerHTML += `${c} \u{1F449}`  
            }
        }else{
            //Contagem decrescente
            for(let c = n1; c >= n2 ; c-=n3) {
                res.innerHTML += `${c} \u{1F449}`  
            }    
        }
        res.innerHTML+=`\u{1F3C1}`
        
    }
}