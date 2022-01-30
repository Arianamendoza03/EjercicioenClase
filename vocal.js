//se pide crear una funcion que devuelva aquellas palabras que NO tiene la misma vocal.
//const entrada=[rececar],[alamgam], [olygopoly], [zoom], [cama],[enano];
//const esperado = [rececar], [olygopoly], [enano];
const entrada = ["racecar", "amalgam", "oligopoly", "zoom", "cama", "enano"];
function Vocales(array){
    var vocal = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    return array.split("").filter (data => {
        return vocal.indexOf(data.toLowerCase())!=-1;
    });
}
function getPalabras(array){
    const r = [];
    array.forEach(data =>{
        const v = Vocales(data);
        for (i=1;i<=v.length-2;i++){
        if(v[0] != v[i])
        r.push(data)
        }
    })
    return r;
    }
    console.log("Palabras que NO tiene las misma vocal: ", getPalabras(entrada));

