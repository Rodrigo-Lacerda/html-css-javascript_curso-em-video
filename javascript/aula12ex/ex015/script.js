function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.querySelector('input#txtano').value
    var res = document.querySelector('div#res')
    
    if(fano == 0 || fano > ano) {
        alert('[ERRO]: Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = Number(ano) - Number(fano)
        var genero = ''
        var img = document.createElement('img') // Colocando imagem por JavaScript
        // img.setAtribute('src', 'path-da-imagem')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            // Validaçoes de idade
        }else if(fsex[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}