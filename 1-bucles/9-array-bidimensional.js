
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]
or(var i = 0; i <= 2; i++){
    for(var j = 0; j <= 2; j++){
    matriz[i][j] = i.toString() + j.toString();
}
}
    console.log(matriz);
