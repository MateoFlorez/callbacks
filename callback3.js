// Declarando la funcion principal
function registrarUsuario(name,age,password,callback){
    setTimeout(function(){
        // Vamos a programar lo que hace la funcion principal
        let usuario = {
            nombre: name,
            edad: age,
            contra: password
        }
        callback(usuario)
    },3000)
}

// Llamando la funcion principal
registrarUsuario('Mateo Guisao',16,'admin123',function(objeto){
    if(objeto.edad > 18){
        console.log(`Bienvenido`)
    }
    else{
        console.log(`No tienes permiso mk`)
    }
})