function funcionPrincipal(funcionSecundaria){
    setTimeout(function(){
        console.log(`Soy el proceso principal`)
        funcionSecundaria()
    },5000)
}

funcionPrincipal(function(){
    console.log(`Soy la funcion secundaria`)
})