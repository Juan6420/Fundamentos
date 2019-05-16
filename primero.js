let promedio=(nota_uno, nota_dos, nota_tres, callback)=>{
    setTimeout(function(){
        let resultado=(nota_uno+nota_dos+nota_tres)/3;
        callback (resultado);
    }, 0);
}

promedio(5,10,9, function(resultado){
    console.log(resultado);
})