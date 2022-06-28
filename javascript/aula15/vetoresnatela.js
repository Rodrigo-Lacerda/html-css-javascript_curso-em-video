let valores = [1, 2, 5, 4, 6, 7, 4]

// for(pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} Tem o valor: ${valores[pos]}`)
// }

console.log('====== Simplificando vetores')
for(let pos in valores) {
    console.log(`A posição ${pos} Tem o valor ${valores[pos]}`)
}
