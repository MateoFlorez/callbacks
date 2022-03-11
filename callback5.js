// Declarando la función principal
function registrarPersonas(personas,callback){
    setTimeout(function(){
        let solteros = personas.filter(function(persona){
            return (persona.estadoCivil == false)
        })
        callback(solteros)
    },3000)
}

let personasCesde = [
    {
        nombre: "Mateo",
        salario: 3200000,
        estadoCivil: false
    },
    {
        nombre: "Raquel",
        salario: 3500000,
        estadoCivil: false
    },
    {
        nombre: "Tommy",
        salario: 1000000,
        estadoCivil: true
    }
]


registrarPersonas(personasCesde,function(solteros){
    let suma = 0
    solteros.forEach(function(soltero){
        suma = suma + soltero.salario
    })
    console.log(solteros)
    console.log(`La suma de los salarios es ${suma}`)
})