//Dada ka matriz = [[1,2,3],[4,5],[6]]
matrizReduce = [[ 1, 2, 3 ],[ 4, 5 ],[ 6 ]];
var integrado = matrizReduce.reduce(function(a,b) {
    return a.concat(b);
});
//Multiplicar todos los valores de un array
var total = integrado.reduce(function(a, b){
    return a * b;
    });
console.log ("La multiplicacion de la matriz es:", total);