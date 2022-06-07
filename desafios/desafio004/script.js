function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    var c = 0

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando:<br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i <f){
            for(var i = 0; i <= f; i += p){
                res.innerText += `${i}`
            }
        } else{
            for(var i = 0; i>= f; i -=p){
                res.innerText += `${i}`
            }
        }
        res.innerText += `FIM`
    }    
}    
