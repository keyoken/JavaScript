Arrays.js
const edades = [25,20,,24,15,30,45,35,45,35,12,22,23,29];

//ordenar menor a mayor
const data =edades.sort((i, j ) => i - j);
console.log(data);


//ordenar mayor a menor
const dataInvertida =edades.sort((i, j ) => j - i);
console.log(dataInvertida);

// filtarar cuantos son memores de 30
const dataFiltrada = edades.filter(edades => edades < 30);
console.log(dataFiltrada); 

//promedio de las edades 
//prom[n] = n1+ n2.../n
const prom = edades.reduce((i,j) =>{
    return i+j;
},0 )
console.log(prom);
// antes de reduce 
let suma =0;
for(let i = 0; i<=edades.length; i++){

}



const edadesOrdenandes = edades.sort(); // ordena el arreglo
const elementoEliminadoUltimo = edadesOrdenandes.pop(); //elimina el ultimo 
const elementoEliminadoPrimero = edadesOrdenandes.shift(); //elimna el primer elemento del arreglo
const incertarElemento = edadesOrdenandes.push; //incerta un elemnto y debuelbe el nuevo tamanio del arreglo 




