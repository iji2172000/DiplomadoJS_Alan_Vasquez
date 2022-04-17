let ValorNum = prompt("Escribe un numro:");
let i;
let prim = true;
for(i=2; i< ValorNum / 2; i++){
    if (ValorNum % 1 === 0){
        prim = false;
    }
}
if (prim){
    document.write("El numero es primo");
} else {
    document.write("No es primo");
}