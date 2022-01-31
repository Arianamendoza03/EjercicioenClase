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

//se tiene un vector cpn los siguientes elementos 
//imput=[30,48,5,32]
//se pide diseñar la funcion que devuelva la siguiente cadena;
//"tus numeros de la suerte son: 30, 48,11,5 y 32"
//use la funcion reduce 
const arrayNumeros=[30,48,11,5, 32];
function numerosDelaSuerte(array){
    const cad="Tus numeros de la suerte son:";
    return cad + array.reduce((ac, va, index, array) =>{ 
        var aux = index  <(array.length-1) ? "," : "y";
        return(ac)+ aux + (va);
    });
}

    console.log (numerosDelaSuerte(arrayNumeros));
    //El metodo some() comprueba si al menos un elemnto del array
    //cumple con la condicion implementada por la funcion proporcioada 

    //verificar si uno de los elementos del array es mayor a 10
     const goodInput =[8,9,10,11,16];
     function numeroMayorq10(array){
         return array.some(data => {
             return data > 10;
         })
     }
     console.log(numeroMayorq10(goodInput));
//1)Verificar si una de las cadenas de caracteres del array 
//tiene mas de 10 caracteres 
const vectorCadenas=["Ecuador","Argentina","Dinamarca","Corea del Norte"];
function cadenadecaracteresMayorq10(array){
    return array.some(data => {
        return data > 10;
    })
}
console.log(cadenadecaracteresMayorq10(vectorCadenas));




//2)chequear si uno de los elementos de la matriz es true 
   const vectorBooleano = [ 
   [false,false,false]
    [false,false,false]
    [false, false, true]
]
 
//3)verificar si la palabra'lost' existe dentro del siguiente array:
    var vectorParrafo = ["Strange is the night where black stars rise,","Lost", "And strange moons circle through the skies,",
  "But stranger Lost still is","Lost Carcosa."
  ];
if(vectorParrafo.includes("Lost")){
  console.log("La palabra Lost esta presente");
}else{
  console.log("La palabra Lost no encontrada");
}
