//Dado el siguiente vecotr array=[5,4,20,7,5,10]
//use map, para devolver cada elemento del vector multiplicado por 10
//Resultado esperado [50,40,200,70,50,100]

var array=[5,4,20,7,5,10];
var Multiplicar = array.map(function(data) {
   return data * 10;
});
console.log("Los numeros multiplicados del array x10 es igual a: ", Multiplicar);