function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var hora = new Date().getHours()
    // hora = 7
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'imagens/manha.png'
        window.document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18) {
        // Boa Tarde
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#b9846f'
    }else {
        // Boa Noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}
