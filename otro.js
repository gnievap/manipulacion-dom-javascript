let cuentaAtras = numero => {
    // caso base
    if ( numero === 0 ){
        return;
    }
    console.log( numero );
    return cuentaAtras( numero - 1 );
};

console.log("Script para contar hacia atrás");
console.log( cuentaAtras(5) );