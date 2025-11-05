/* setTimeout(()=>{
    console.log('me ejecuto')
},2000);

let intervaloMolesto = setInterval(()=>{
    console('tic');

    
},1000);

setTimeout(()=>{
    clearInterval(intervaloMolesto);
},2000); */
/* try catch y finally ............................................................................ 
function pedirDatosRemotos(){
    console.log("pedir datos al servidor");
}

function mostrarDatosEnDom(datosRemotos){
    return console.log("escribir datos en el documento HTML");
}

function mostrarErrorEnDom(){
    console.log("no pude listar los productos :(");
}


let verEnDOM = "";
let datosRemotos = [1, 2, 3];

try{
    pedirDatosRemotos();
    verEnDOM= mostrarDatosEnDom(datosRemotos);
 } catch(error){
    verEnDOM = mostrarErrorEnDom();
 }finally{
    console.log("Se ejecuta siempre");
    
 }//sirve para atajar el error y que no se rompa la app va en todas las las funciones de la app */
 
 //promesas....................................................................................................
 //una promesa es un objeto que nos promete o nos dice que se va a resolver en el futuro,nos va a dar un resultado exitoso o de error ( por ej: servicios externos)
/*  const miPromesa = () => {
  new Promise((resolve, reject)=>{
     let exito = true;
     if (exito){
         resolve("la promesa se cumplio con exito");//si es true se ejecuta el codigo
     } else{
         reject ("la promesa falló");//si es false se ejecuta el mensaje.
     }
  });
}; */
//fetch...........................................................................................................

/* fetch("https://jsonplaceholder.typicode.com/")
.then((res)=> res.json())
.then((data)=> console.log(data)) */

//async..........................................................................................................

/* const llamada = async ()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/");

    let datosJson = await data.json();
    console.log(datosJson);
};

llamada(); */

