//1 Pide por pop-up la altura y el peso y almacénalo cada uno en una variable.

let altura = parseFloat(prompt("Introduce tu altura en metros:"));
let peso = parseFloat(prompt("Introduce tu peso en kilogramos:"));

//2- Imprime por pantalla la suma de ambas variables.

alert(`La suma de tu altura y tu peso es: ${altura + peso}`);

console.log(altura + peso)

//3- Pide por pop-up la edad y almacénala en una variable.

let edad = parseInt(prompt("Introduce tu edad:"));

//4- Define una variable con un operador ternario que sea true si la edad es mayor que 18 o false si es menor.

let esMayorDeEdad = (edad >= 18) ? true : false;
console.log(`Es mayor de edad: ${esMayorDeEdad}`);
//5- Crea un bucle que sume los primeros 5 números pares entre 50 y 70. Haz esto de 3 maneras distintas.

let sumaPares1 = 0;
let contador= 0;
for (let i = 50; i <= 70; i += 2) {
    sumaPares1 += i;
    contador++;
        if(contador === 5){
            break;
        }
}
console.log("Suma de los primeros 5 números pares (for): " + sumaPares1);

let suma1 = 0;
for (let i = 50; i <= 70; i += 2) {
    suma1 += i;
    if (suma1 === 5){
        break
    } 
}
console.log(`Suma usando for: ${suma1}`);


let suma2 = 0;
let num = 50;
while (num <= 70) {
    suma2 += num;
    num += 2;
}
console.log(`Suma usando while: ${suma2}`);

let suma3 = 0;
let num2 = 50;
do {
    suma3 += num2;
    num2 += 2;
} while (num2 <= 70);
console.log(`Suma usando do...while: ${suma3}`);

//6- Pide por pop-up un nombre y almacénalo en una variable.

let nombre = prompt("Introduce tu nombre:");
nombre.includes("Mierda")

//7- Comprueba si el nombre contiene la palabra malsonante "Mierda".

//8- En caso de contenerla, haz un slice del nombre de manera que el resultado de la subcadena dicha sea dicha palabra malsonante.
// En caso de no contenerla, muestra por pantalla un mensaje de bienvenida mediante un pop-up.
let realname = prompt("Introduce tu nombre")
let bool = realname.includes(mierda)
let mierda = "Mierda"

if(bool){
   let i = realname.indexOf("Mierda")
realname.slice(i,i + realname.length )

}

if (nombre.includes("Mierda")) {
    // En caso de contenerla, haz un slice del nombre de manera que el resultado de la subcadena sea dicha palabra malsonante.
    let malsonante = nombre.slice(nombre.indexOf("Mierda"), nombre.indexOf("Mierda") + "Mierda".length);
    alert(`Tu nombre contiene la palabra malsonante: ${malsonante}`);
} else {
    // En caso de no contenerla, muestra por pantalla un mensaje de bienvenida mediante un pop-up.
    alert(`¡Bienvenido/a, ${nombre}!`);
}




//9- Crea una cadena con los nombres de los compañeros que estén en tu misma fila, separados por comas.

let chain = "Hugo,Fernando,Jose";
let nombres = chain.split(",")

for (n of nombres){
    console.log(n)
}

//10- Almacena en una variable el array resultado de separar la cadena anterior por comas (Usar un método de la clase String).

let arrayCompanyeros = chain.split(",");

//11- Itera con un bucle dicho array, imprimiendo por consola cada elemento.
// Itera con un bucle dicho array, imprimiendo por consola cada elemento.
arrayCompanyeros.forEach(chain => {
    console.log(chain);});





    // apuntes function
    let f = (base, altura)
    function f(base,altura){
        return base*altura
    } 
    function f2(base,altura){
        return base*altura
    } 

    console.log(f(2,4))
    console.log(f2(2,4))

    function f3(base,altura){
        return base*altura
    } 
    console.log(f3(2,4))

    let f4 = (base,altura) => base*altura
    console.log(f4(2,4))

    let flecha = (i) => console.log(i)

    array.forEach(flecha)

    let flecha2 = (i) =>  i+1
    let arrayNuevo = array.map(flecha2)

    array.some((e) => e > 3  )

    array.findIndex((e) => e > 3 )


    // primero pasas variable donde se almacenará entre otros 
    array.reduce((res,e) => res += e, 0 )

    let arrayFiltrado = array.filter((e) => e%2) 

   // let [ ,j] = array
    
   // let [ ,j,... final] =    array

   
   // push anyadir un elemtento al final array
   let nuevoArray1 = array.push(3)

   // unshift para anydirlo al inicio del array 

   let nuevoArray2 = array.unshift(0)

   //borrar elementos al final se usa .shift

   //borrar elementos al inicio se usa .pop


   // Ejercicios de arrays en js 

   // Dado el array = [3,7,11,8,1,4]
/*
1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.
2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.

Dado el string = "Jurado, Alberto, Marcelo, Pablo, Maria"
1) Definir un array en cuya cada posición esté cada nombre del string anterior.
2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.
3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.
4) Crear una función que dado un array devuelva el array al revés (la posición 0 ahora tendrá el valor de la última posición y viceversa). Crearla como función normal y como función flecha.
5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés

1)Crea un array de números de 100 posiciones, que contendrá los números del 1 al 100. Partiendo del array ya creado y completamente relleno, obtener la suma de todos ellos y la media.
2)Crear un array de enteros donde indicamos por teclado el tamaño del array, rellenamos el array con números aleatorios entre 0 y 9, y mostramos por pantalla el valor de cada posición y la suma de todos los valores.
3)Leer por alerta  un numero entero y crear un array de ese tamaño, con valores aleatorios entre 1 y 300. A continuación, pedir un número entero entre 0 y 9, e imprimir todas las posiciones del array que tengan un número acabado en ese dígito. Esos números, además de imprimirlos, almacenarlos en un array de salida con el tamaño adecuado.
4)Introduce por alerta el número de tu DNI, y vuelve a imprimirlo seguido de la letra. Para calcular la letra, cogeremos el resto de dividir nuestro dni entre 23, el resultado debe estar entre 0 y 22. Tendrás que crear un array que contenga (ver imagen):
*/

// 1) Mostrar por pantalla el valor de cada elemento multiplicado por vuestra edad. La edad debe pedirla por una alerta.

let array = [3,7,11,8,1,4]
let edad1 = parseInt(prompt("Introduce tu edad :"));

array.forEach(element => {
    console.log(element * edad1)
})

// 2) Modificar el valor de cada elemento del array por el resto de dividir cada elemento entre 2.

array.forEach(element => {
    console.log(element % 2) 
})
let arrayString = ["Jurado, Alberto, Marcelo, Pablo, Maria"]
// 1) Definir un array en cuya cada posición esté cada nombre del string anterior.

arrayString = nuevoArrayString.split(",")


// 2) Dado el array anterior, mostrar por pantalla en que posición se encuentra la letra a en cada elemento del array.

nuevoArrayString.forEach(element => {
    console.log(element.indexOf("a"))
})



// 3) Dado el array anterior, cambiar en cada elemento del array anterior la letra a por la e.

array.forEach(element => {
    console.log(element.replace("a","e"))
})

// 4) Crear una función que dado un array devuelva el array al revés (la posición 0 ahora tendrá el valor de la última posición y viceversa).
// Crearla como función normal y como función flecha.
let arrayNormal = [1,2,3,4,5]
arrrayNormal = arrayNormal.reverse()

arrayNormal.forEach(element => arrayNormal.reverse())




// 5) Dado el array de nombres, poner cada nombre en mayúsculas y al revés