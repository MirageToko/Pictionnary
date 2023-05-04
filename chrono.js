function GestionDuTemps(n){
    return new Promise(function(resolve){
        setTimeout(resolve,(1 / n) * 1000);
    });
}
