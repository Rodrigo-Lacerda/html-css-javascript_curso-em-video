function cont() {
    var ini = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    // alert(`${ini.value}, ${fim.value}, ${passo.value}`)

    // res.innerHTML = `Inicio ${ini.value}, Fim ${fim.value}, Passo ${passo.value}`
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro: Faltam dados.')
    }else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = 'Contando...'
        for(c = i; c <= f; c += p) {
            res.innerHTML += `${c} `
        }
    }
}


