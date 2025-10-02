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
}