let numero=-5;
let palabra= 'Hola mundo';
let respuesta= true;
respuesta=false;
const a="hola papu"
b= a+palabra;
console.log(numero, palabra, respuesta,a,b);


let cadena="Hola Mundo";
console.log(cadena);

let primerA=2;
console.log(primerA);

let len="cómo estás papu cuéntame";
console.log(len.length);

let upp="mayúsculas";
console.log(upp.toUpperCase());

let down="MINUSCULAS";
console.log(down.toLocaleLowerCase());

let index="hola5677444459";
console.log(index.indexOf("9")); /* lo que ponemos en el paréntesis es lo que queremos buscar
y lo que nos aparcerá en el navegador es en qué posición está, en este caso el nueve está
 en la posición 13 */

 let susitutye="444";
 console.log(susitutye.replace("444","888                        ")); /*declaramos la variable String  y primer decimos qué queremos
 sustituir ponemos coma y luego el valor que lo va a sustituir*/

 let trameo="               hola majos qué tal va      ";
 console.log(trameo.trim());/*quit alos espacios al principio ya la final*/

 let verdadomentira="empieza o no por por e";
 console.log(verdadomentira.startsWith("e")); /*si empieza con la letra true o flase*/
 console.log(verdadomentira.endsWith("e"));/*si termina con la letra true o flase*/

 let repite="repite";
 console.log(repite.repeat(10)); /*repite las veces que queramos en este caso 10 veces */

 let nombres= "Alex";
 
 let apellido= "López"

 let edad= 20;

 
console.log("hola "  + nombres + " qué tal este señor " + apellido + " tiene? " + edad + " años?");

console.log(`Hola ${nombres} cómo estás, tu apellido es  ${apellido} y la edad que tienes es  ${edad}`);

let ordenador="ryzen 2700x";
let mando="Xbox";
let movil="Pixel 4a";

console.log("Mi ordenador es " + ordenador + "tengo un mando de " + mando + " y mi móvil es un "+movil);
console.log(`Mi ordenador es un ${ordenador} el mando que tengo de mi ordenador es ${mando} y de móvil me compré un ${movil} `);