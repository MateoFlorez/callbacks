function calcularSuma(num1, num2, callback){
    setTimeout(function(){
        suma = num1 + num2
        callback(suma)
    },5000)
}

calcularSuma(5, 1, function(suma){
    console.log(`Suma: ${suma}`)
})