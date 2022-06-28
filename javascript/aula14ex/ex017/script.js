// alert('ola')
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value == 0) {
        alert('Por Favor Digite um número.')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} X ${n} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
}
