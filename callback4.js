// Declarando funcion principal
function construirArreglo(num1,num2,num3,num4,num5,callback){
    setTimeout(function(){
        let numeros = [ 
            num1,
            num2,
            num3,
            num4,
            num5]
           
        
        callback(numeros)
    },5000)
}

// Llamando a la funcion principal
construirArreglo(5,5,5,5,5,function(numeros){
    let suma = 0
    numeros.forEach(function(numero){
        suma = suma + numero
    })
    console.log(`Suma: ${suma}`)
})