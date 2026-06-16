let nombreEstudiante="Tomas Delgadillo";
//
const diaSemana = 7;
//
let temperaturaActual = 30.5;
//
let userConnect = true;
//
let nota1 = 6, nota2 = 4, nota3 = 8;
//
let listaAlumnos = "Juan, Pedro, Ana";
//
let materiaFavorita = "Fisica";
//
let cantidadEntradas = 0;
cantidadEntradas = 1;
//
const ANIO_FUNDACION = 1963;
//
let num = 2;
num += 5;
console.log(num);
//
let NATURALES = [];
for (let i = 1; i < 19; i++) {
    NATURALES.push(i);
    console.log(NATURALES);
}
//
let NATURALES = [];
for (let i = 35; i > 0;) {
    if (i % 2 != 0){
        NATURALES.push(i);
        console.log(NATURALES);
    }
    i--;
}
//

let RESULTADO = [NATURALES[0], NATURALES[1], NATURALES[2], NATURALES[15], NATURALES[16], NATURALES[17]];
console.log(RESULTADO);
//
let ORIGEN = [];
let DESTINO = [];
for (let i = 0; i < 5;i++){
    let numberOrigen = prompt ("Ingresa un numero ");
    ORIGEN.push(Number(numberOrigen));
    console.log(ORIGEN);
}
for (let i = 0; i < 5;i++){
    DESTINO.push(ORIGEN[i]);
    console.log(DESTINO);
}
//
let ORIGEN = [];
let DESTINO = [];
for (let i = 0; i < 5;i++){
    let numberOrigen = prompt ("Ingresa un numero ");
    ORIGEN.push(Number(numberOrigen));
    console.log(ORIGEN);
}
for ( i = 4; i >= 0;i--){
    DESTINO.push(ORIGEN[i]);
    console.log(DESTINO);
}
//
let NUM = [];
let FILT = [];
for (let i = 0; i <=5; i++){
    NUM.push(Math.floor(Math.random()*11));
    console.log(NUM); 
}
for (i = 0; i <= 5; i++){
    if (NUM[i]!=8){
        FILT.push(NUM[i]);
        console.log(FILT)
    }    
}
//
let NUM = [];
let FILT = [];
for (let i = 0; i <=5; i++){
    NUM.push(Math.floor(Math.random()*11));
    console.log(NUM); 
}
for (i = 0; i <= 5; i++){
    if (NUM[i]<8){
        FILT.push(NUM[i]);
        console.log(FILT)
    }    
}
//
let NUM = [];
let FILT = [];
for (let i = 0; i <=5; i++){
    NUM.push(Math.floor(Math.random()*11));
    console.log(NUM); 
}
for (i = 0; i <= 5; i++){
    if (NUM[i]>2 && NUM[i]<8){
        FILT.push(NUM[i]);
        console.log(FILT)
    }    
}    
//
let IMPARES = [];
let cantidadPregunta = prompt("ingresa el largo del arreglo ")
let cantidad = Number(cantidadPregunta);
for (let i = 1; i <= cantidad;){
    let random = Math.floor(Math.random()*11);
    if (random % 2 !== 0){
        IMPARES.push(random); 
        i++
    }
    console.log(IMPARES);

}
console.log("antes: ", IMPARES);
let cnt = IMPARES[0];
IMPARES[0] = IMPARES[cantidad-1];
IMPARES[cantidad-1] = cnt;
console.log(IMPARES);
//

