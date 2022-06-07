let num = [5, 8, 2, 9, 3]

console.log(`Nossos valores sao ${num}`)

num[3] = 6
console.log(`Nossos valores sao ${num}`)

console.log(`o array tem ${num.length}`)

console.log(`De forma ordenada os elementos sao ${num.sort()}`)

console.log(`O segundo valor do vetor e ${num[0]}`)

let valores = [8, 1, 7, 4, 2, 9]
for (let pos = 0; pos < valores.length; pos ++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in num){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

let posicao = num.indexOf(6)
console.log(`o valor 6 esta na posicao ${posicao}`)
