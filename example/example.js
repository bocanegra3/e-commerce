/* //clase 1
/* const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

const isWide = () => matchMedia('(min-width: 900px)').matches;
function setDesktopIfWide(){
  if(isWide()){
    menu.style.display = 'flex';
    toggle.setAttribute('aria-expanded', 'false');
  } else {
    menu.style.display = 'none';
  }
}
setDesktopIfWide();
addEventListener('resize', setDesktopIfWide);

toggle.addEventListener('click', () => {
  const open = menu.style.display === 'flex';
  menu.style.display = open ? 'none' : 'flex';
  toggle.setAttribute('aria-expanded', String(!open));
}); */


/* //Variable: Es un espacio de memoria reservado para almacenar informacion importante del programa.
console.log("El script está funcionando correctamente!");

const titulo = document.getElementById("titulo");

let nombre;
let tituloprofesional;
let edad;

nombre = "Franco Bocanegra";
tituloprofesional="Programador full stack";
edad="31 años";

console.log(nombre);
console.log(tituloprofesional);
console.log(edad);

const DNI= 33333111;
let soltero = false;
let suma;

suma= 2*7+6+19*94;



if (suma > 20) {
  console.log("La suma es mayor que 20");
}

else {
  console.log("La suma es menor o igual a 20");
}


for (let i = -1; i < 5; i++) {
  console.log(i);
}


let i = 3;
while (i <= 5) {
  console.log(i);
  i++;
}

/* //te dice que tipo de dato es.
console.log(typeof nombre);

let num1= 3;
let num2=41;

console.log(num1 + num2);
console.log(num1 * num2);

let nombreUser= prompt("ingrese su nombre:");//se almacena dentro de la variable nombreUser
console.log(nombreUser);

alert("Hola Soy Franco");

let deseaContinuar = confirm("Desea Continuar?")
 */

/*tercera clase pagina contacto*//*4

const mensaje = document.getElementById('mensaje');
const password = "123";

let descuentoInicial;
// una ciera logica que pude modificar el descuentoInicial

const descuentoPredeterminado = 10;
let descuentoActual = descuentoInicial ?? descuentoPredeterminado; */

/* 
let passwordIngresado = prompt("ingrese su contraseña"); */

/*  while (passwordIngresado != password){
  let passwordIngresado = prompt("ingrese su contraseña");
}
  */
//clase 3 
/* let edadIngresada = parseInt(prompt("ingrese su edad"))

switch(edadIngresada){
  case 18:
  console.log('sos mayor de edad');
    break;
    case 70:
      console.log('deberias estar jubilado');
      break;
      default:
        console.log('no estas entre los dos codigos');
        break;
} */
/*ecommerce de compra de comida--------------------------------------------------clase 2 *****/
/* let total = 0;
let seleccion; 
let eliminar;
let promo;
let descuento;
do{
seleccion = prompt(
  "Bienvenido/a a la tienda, elija una comida: \n1. Hamburguesa\n2. Pizza\n3. Ensalada\n4. Quieres eliminar un producto \n5. Cupon de descuento.\n6. Finalizar compra."
);

switch(seleccion){
  case "1":
      total = total + 14000;
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "2":
      total = total + 16000;
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "3":
      total = total + 12000;
      console.log('Tu total hasta el momento es de: '+ total);
  break;
    case "4":
      do{
        eliminar = prompt(
          "Elija el menu que desea eliminar: \n le recuerdo el numero de cada uno de los productos. \n1. Hamburguesa\n2. Pizza\n3. Ensalada \n4 finalizar eliminacion."
        )
        switch(eliminar){
          case "1":
            total = total - 14000;
            console.log('Usted elimino la hamburguesa, su total es de: '+ total);
            break;
          case "2":
            total = total - 16000;
            console.log('Usted elimino la pizza, su total es de: '+ total);
            break
          case "3":
            total= total - 12000;
            console.log('Usted elimino la ensalada, su total es de: '+ total);
            break
          case "4":
            console.log('finalizo su eliminacion de productos, su total es de: '+ total);
            break;
          default:
          console.log('El valor que indico no existe, si desea finalizar la eliminacion presione 4 sino indique del 1 al 3, su total por el momento es de: '+ total);
          break;
        }
      }while(eliminar !== "4");
  break;
  case "5":
      do{
        promo = prompt (
          "Coloque el codigo del cupon de promo "
        )
        switch(promo){
          case "ahorropremier":
          descuento = total * 0.50;
          total = total - descuento;
          console.log("Su descuento Premiun es del 50% el total");
          break6
          case "ahorrosantander":
            descuento = total * 0.40;
            total = total - descuento;
            console.log("Su descuento Santander es del 40% el total");
          break
          case "ahorrocredicoop":
            descuento = total * 0.30;
            total = total - descuento;
            console.log("Su descuento Credicoop es del 30% el total");
          break;
          case "ahorromercadopago":
            descuento = total * 0.10;
            total = total - descuento;
            console.log ("Su descuento Mercado Pago es del 10% el total");
          break;
          case "8":
            console.log("El valor a abonar es: " + total);
          break;
          default:
            console.log("Usted indico un codigo incorrecto, su valor total sigue siendo de: " + total +" coloque otro codigo o precione 8 para finalizar") ;
          break
        }
      }while(promo == "8");
  break;
  case "6":
      total = total;
      console.log('Tu total es de :'+ total);
  break;
  default:
    console.log('tu seleccion es invalida, seleccione del 1 al 3 o el 4 para finalizar');
    break;
} 
} while (seleccion !== "6");
 */
/*clase 23/09-------------------------------------------------------------------------------------- */
/* function saludar(nombre){
  console.log("hola: " + nombre);
}

let nombreUser = prompt("Ingrese su nombre: ");
saludar(nombreUser); */

/* function sumar(num1, num2){
  console.log(num1 + num2);
}

sumar(5, 10); */
//funciones flecha

/* const sumar = (num1, num2) => {
  console.log(num1 + num2);
}

const restar = num1 =>  console.log(num1 - 8);

restar(10); */
/*clase 30/09/25 ------------------------------------------------------------------------------*/
//arrays crtl + space......................................................................
/* let nombre = ["Juan", "Ana", "Carlos"];// array de strings
let edades = [25, 60, 33];//array de números
let booleans = [true, false, true];//array booleano */
/* let mixto = ["hola", 34, true, null];//array mixto */

/*  console.log(nombre[1]);
console.log(edades[2]);
console.log(booleans[2]);

edades[0] = 26;

console.log(edades);

//recorre un array

for(let i = 0; i < nombre.length; i++){
  console.log(nombre[i]); */
/*} */
/* 
// push se utiliza para agregar elementos ej:
nombre.push("Esteban");
//unshift se utiliza para agregar un elemento al inicio ej:
nombre.unshift("Estela");
//pop se utiliza para quitar el ultimo elemento del array ej:
nombre.pop();
//shift se utiliza para quitar el primer elemento del array ej:
nombre.shift();
//Join se utiliza para generar un string con los elementos del array separados por el valor que pasamos en el parametro.
console.log(nombre.join(" "));
//indexOf nos devuelve el indice de un elemento en el array ej: * sirve para
console.log(nombre.indexOf("Carlos"));
//includes sirve para saber si el elemento que le mandamos por parametro esta o no. ej:
console.log(nombre.includes("Carlos"));
/* if (console.log(nombre.includes("Carlos"))){
  console.log("Esta Carlos en la lista");
} */
//sort ordena el array
//reverse lo ordena alrevez
// como hacer una copia de un array
/*const edadesCopia = [...edades];

console.log(edadesCopia.sort());
console.log(edades);
//sugar sintax
console.log(nombre); */

//objetos literales, Clave = nombre , Valor = Nicolas.......................................
/* let persona = {
  nombre: 'Nicolas',
  edad: 24,
  direccion: 'San Antonio',
  apellidos: ["Bocanegra","D'Angelo"]  
}
console.log(persona) */

/* let tapiz = { id:1 , nombre:'gatovolador', precio:15000}
let tapiz1 = { id:2 , nombre:'sapovolador', precio:12000}
let tapiz2 = { id:3 , nombre:'pavovolador', precio:13000}
let tapiz3 = { id:4 , nombre:'perrovolador', precio:16000}

let productos = [tapiz,tapiz1,tapiz2,tapiz3];

tapiz.precio = 20000;
productos.push(tapiz4={id:5, nombre:'paloma', precio:17000})

delete tapiz3.precio;

let carrito= [];

carrito.push(tapiz1.nombre);

for(const prod of productos){
  prod.precio = prod.precio * 1.21;
}

console.log(productos);

console.log(carrito); */

//clase 7/10--------------------------------------------------------------------------------------------------------------------------------------------------------------------<
//funcion constructora
/* function Persona(literal){
    this.nombre = literal.nombre;
    this.edad = literal.edad;
    this.calle = literal.calle;
}

const persona1 = new Persona({nombre:"homero",edad: 39, calle: "Av.Siempreviva 742"});


console.log(persona1);

//clase contructora: es lo mismo que la funcion constructora.
class PersonaLogin{
    constructor(literal){
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.calle = literal.calle;
    }
//metoodo o funcion que hace el objeto creado a travez de la classe persona en este caso. ej :
    presentarse (){
        console.log(`Hola me llamo ${this.nombre},tengo ${this.edad} años y vivo en ${this.calle}`);
    }
//template strings
}

const persona2 = new PersonaLogin({nombre: "bart", edad: 6, calle:"Av.Siempreviva 742"});
//tuUpperCase para todo en mayusculas chooLowerCase todo en minuscula, para los strings
persona2.presentarse(); */


//---------------------------------------------------------------------------------------*

//Storage o almacenamiento.
//localStorage es una memoria en en navegador que almacena info mientras no se elimine el cookies.
//sessionStorage se almacena en el navegador mientras no se cierre la ventana.

/* 
localStorage.setItem('nombre', 'Nicolas')
/* localStorage.setItem('edad', 25) */
/*console.log(localStorage.getItem("edad"));
//seleccion;
localStorage.removeItem("edad");
//eliminar items
localStorage.clear();
//eliminar todo.
//hashear transformar un password en un string muy largo para que no te roben la cuenta.

//sessionStorage.

sessionStorage.setItem('nombre', 'Nicolas') */
// JSON---------------------------------------------------------------------------------*
/* class PersonaLogin{
    constructor(literal){
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.calle = literal.calle;
    }
//metoodo o funcion que hace el objeto creado a travez de la classe persona en este caso. ej :
    presentarse (){
        console.log(`Hola me llamo ${this.nombre},tengo ${this.edad} años y vivo en ${this.calle}`);
    }
//template strings
}

const persona2 = new PersonaLogin({nombre: "bart", edad: 6, calle:"Av.Siempreviva 742"});
//tuUpperCase para todo en mayusculas chooLowerCase todo en minuscula, para los strings

// hay que transformar la persona en JSON para mostrar en Local Strorage
localStorage.setItem('persona', JSON.stringify(persona2));

console.log(JSON.parse(localStorage.getItem('persona'))); */

//Logica para almacenar e-commers----------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>
//consulta de carrito
/* let carrito 
if(localStorage.getItem(carrito)){
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = []
} */
//sugar sitex
/* let carrito = localStorage.getItem('carrito') ?JSON.stringify(localStorage.getItem('carrito')) : []  */
//sugar sintex2
/* let carrito = JSON.stringify(localStorage.getItem('carrito')) || []; 
carrito && cargarHTML(carrito)
console.log(carrito); */
/* let carrito = [
    {id:1,nombre :'remera', precio: 14000 },
    {id:2,nombre :'pantalon', precio: 24000 },
    {id:3,nombre :'zapatos', precio: 80000 },
    {id:4,nombre :'camisa', precio: 20000 },
] */

/* localStorage.setItem("carrito", JSON.stringify(carrito)); */

//
//clase 14/10--------------------------------------------------->>
/* 
function mayorQue(n){
  return(m) => m > n;
}

let mayorQueDiez = mayorQue(10);
/* 
console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8)); */

/* let numeros = [1,2,3,4,5]; */ 

/* const mostrar = (array, fn) => {
  for (let num of array){
    fn (num);
  }
}

mostrar(numeros,(m) => {
  console.log(m > 2);
}) */

/*   let productos = [
    {nombre:"camisa",precio: 12000},
    {nombre:"pantalon",precio: 13000},
    {nombre:"camiseta",precio: 10000},
    {nombre:"chomba",precio: 15000},
  ] */
/* //metodo forEach
  productos.forEach((prod)=>{console.log(prod);
  }) */
//metodo find ( busqueda *devuelve solo uno, el primero que encuentra)----------
/*  let prodEncontrado = productos.find((prod)=>{ return prod.precio < 15000 });

 console.log(prodEncontrado); */
 //metodo filter, filtra, busca todos los que sean seleccionados ...------------

/*  let prodEncontrado = productos.filter((prod)=>{
   return prod.precio < 15000 
  });

console.log(prodEncontrado) */

//metodo some , te devuelve true o false.----------------------------------------


/* console.log(productos.some(prod =>{return prod.nombre === "camisa"})) */
// metodo map, crea un nuevo array transformados segun la condicion dada.--------
/* 
let prodsModificados = productos.map(prod =>{
  return{...prod, precio: prod.precio * 1.21}
})

console.log(prodsModificados); */

//metodo reduce , se utiliza para acumular un valor en una variable-------------

/* let total = productos.reduce((acc,prod)=>{
  return acc + prod.precio;
},0)// se podria poner una variable por ej: precio de envio o un descuento.

console.log(total); */

//sort sirve para modificar de forma descendente o ascendente--------------------

//selecciono la variable, control d control d control d , contro v para pegar----seleccion rapida*
///* 
/*   const contenedorById = document.getElementById('contenedor'); */
/*
setTimeout(()=>{
contenedorById.innerHTML = "Chau";
},3000) */ //con este codigo se puedo modificar el html
/* const contenedorByClassName = document.getElementsByClassName("contenedor");
console.log(contenedorByClassName);
 */


/* const contenedorById = document.getElementById('contenedor'); */







/* 
 alert("Bienvenido a e-commers 1990.");//mensaje de bienvenida.
const nombreUsuario = prompt ("Diganos su nombre por favor...");//primera interaccion.
const talleUsuario = prompt("Indicanos tu talle de zapatillas :");//segunda interaccion.


function verificarCodigoPostal() {
  const codigopostalUsuario = prompt("Díganos su código postal por favor...");
  const codigo = Number(codigopostalUsuario);

  if (codigo >= 999 && codigo <= 9431) {
    alert("¡Estás dentro de Argentina! Tu envío es posible ");
    return true; // continúa
  } else {
    alert("Lo sentimos, aún no realizamos envíos a tu zona ");
    return false; // corta
  }
}//tercera interaccion.

// Creacion de Objetos/Productos.

const zapatilla1 = { id:2 , nombre:'Nike Rennovator', precio:110000}
const zapatilla2 = { id:3 , nombre:'Adidas Fly', precio:120000}
const zapatilla3 = { id:4 , nombre:'New Balance Enduro', precio:130000}
const zapatilla4 = { id:5 , nombre:'Dc Old Scohol', precio:160000}

let productos = [zapatilla1,zapatilla2,zapatilla3,zapatilla4];

productos.push(zapatilla5 = {id:6, nombre:'Alternativ Shoes Imperio', precio:100000});

for(const prod of productos){
  prod.precio = prod.precio * 1.21;
}1
//interaccion con el Usuario.
let seleccion; 
let eliminar;
let promo;
let descuento;
let total = 0;
if (verificarCodigoPostal()) {
do{
seleccion = prompt(
    "Bienvenido/a "+ nombreUsuario +" a la tienda, coloque el numero de la zapatilla que desea: \n" +
  "1. " + zapatilla1.nombre + "y su precio es "+ zapatilla1.precio + "\n" +
  "2. " + zapatilla2.nombre + "y su precio es "+ zapatilla2.precio + "\n" +
  "3. " + zapatilla3.nombre + "y su precio es "+ zapatilla3.precio + "\n" +
  "4. " + zapatilla4.nombre + "y su precio es "+ zapatilla4.precio + "\n" +
  "5. " + zapatilla5.nombre + "y su precio es "+ zapatilla5.precio + "\n" +
  "6. Eliminar articulo.\n" +
  "7. Cupon de descuento.\n" +
  "8. Finalizar compra. "
);

switch(seleccion){
  case "1":
      total = total + zapatilla1.precio;
      console.log('Usted selecciono '+zapatilla1.nombre+' de talle '+talleUsuario+' tu total hasta el momento es de: '+ total);
  break;
    case "2":
      total = total + zapatilla2.precio;
      console.log('Usted selecciono '+zapatilla2.nombre+' de talle '+talleUsuario+' tu total hasta el momento es de: '+ total);
  break;
    case "3":
      total = total + zapatilla3.precio;
      console.log('Usted selecciono '+zapatilla3.nombre+' de talle '+talleUsuario+' tu total hasta el momento es de: '+ total);
  break;
      case "4":
      total = total + zapatilla4.precio;
      console.log('Usted selecciono '+zapatilla4.nombre+' de talle '+talleUsuario+' tu total hasta el momento es de: '+ total);
  break;
    case "5":
      total = total + zapatilla5.precio;
      console.log('Usted selecciono '+zapatilla5.nombre+' de talle '+talleUsuario+' tu total hasta el momento es de: '+ total);
  break;
    case "6":
      do{
        eliminar = prompt(
          "Coloque el numero del producto que desea eliminar:  \n" +
        "1. " + zapatilla1.nombre + "y su precio es "+ zapatilla1.precio + "\n" +
        "2. " + zapatilla2.nombre + "y su precio es "+ zapatilla2.precio + "\n" +
        "3. " + zapatilla3.nombre + "y su precio es "+ zapatilla3.precio + "\n" +
        "4. " + zapatilla4.nombre + "y su precio es "+ zapatilla4.precio + "\n" +
        "5. " + zapatilla5.nombre + "y su precio es "+ zapatilla5.precio + "\n" +
        "6. Finalizar." 
        )
        switch(eliminar){
          case "1":
            total = total - zapatilla1.precio ;
            console.log('Usted elimino la '+zapatilla1.nombre+', su total es de: '+ total);
            break;
          case "2":
            total = total - zapatilla2.precio;
            console.log('Usted elimino la '+zapatilla2.nombre+', su total es de: '+ total);
            break
          case "3":
            total= total - zapatilla3.precio;
            console.log('Usted elimino la '+zapatilla3.nombre+', su total es de: '+ total);
            break
            case "4":
            total= total - zapatilla4.precio;
            console.log('Usted elimino la '+zapatilla4.nombre+', su total es de: '+ total);
            break
            case "5":
            total= total - zapatilla5.precio;
            console.log('Usted elimino la '+zapatilla5.nombre+', su total es de: '+ total)
            break
          case "6":
            console.log('finalizo su eliminacion de productos, su total es de: '+ total);
            break;
          default:
          console.log('El valor que indico no existe, si desea finalizar la eliminacion presione 6 sino indique del 1 al 5, su total por el momento es de: '+ total);
          break;
        }
      }while(eliminar !== "6");
  break;
  case "7":
      do{
        promo = prompt (
          "Coloque el codigo del cupon de promo "
        )
        switch(promo){
          case "santander":
          descuento = total * 0.40;
          total = total - descuento;
          console.log("Su descuento Santander es del 50% el total");
          break6
          case "galicia":
            descuento = total * 0.30;
            total = total - descuento;
            console.log("Su descuento Galicia es del 40% el total");
          break
          case "credicoop":
            descuento = total * 0.20;
            total = total - descuento;
            console.log("Su descuento Credicoop es del 30% el total");
          break;
          case "mercadopago":
            descuento = total * 0.10;
            total = total - descuento;
            console.log ("Su descuento Mercado Pago es del 10% el total");
          break;
          case "8":
            console.log("El valor a abonar es: " + total);
          break;
          default:
            console.log("Usted indico un codigo incorrecto, su valor total sigue siendo de: " + total +" coloque otro codigo o precione 8 para finalizar") ;
          break
        }
      }while(promo == "8");
  break;
  case "8":
      total = total;
      console.log('El valor total a abonar es : '+ total);
  break;
  default:
    console.log('tu seleccion es invalida, seleccione del 1 al 5 o el 8 para finalizar');
    break;
} 
} while (seleccion !== "8");

console.log("Muchas gracias por su compra " + nombreUsuario);
}   */