

/* const productos = [
  {id: 1, nombre: "Cristales internos", precio: 35000, descripcion: "'El verdadero tesoro esta en uno.", img: "./assets/img/tapiz0b.png",categoria:"Mas Vendido",img2: "./assets/img/tapiz0c.png"},  
  {id: 2, nombre: "Iluminar Interior", precio: 28000, descripcion: "Mirar hacia el inverior es el primer paso para comenzar a ver.", img: "./assets/img/tapiz1b.png",categoria:"Mas Vendido",img2: "./assets/img/tapiz1c.png"},  
  {id: 3, nombre: "Chackra Lunar", precio: 19000, descripcion: "Las formas son solo la perspectiva de donde uno mira.", img: "./assets/img/tapiz2b.png",categoria:"Oferta",img2: "./assets/img/tapiz2c.png"},  
  {id: 4, nombre: "Reflejo Sombrio", precio: 180000, descripcion: "Las frecuencias son solo la perspectiva de donde uno es.", img: "./assets/img/tapiz3b.png",categoria:"Oferta",img2: "./assets/img/tapiz3c.png"},  
];

productos.push({id:5, nombre:'Ser Multiverso', precio:23000, descripcion: "Entre el cielo y el infierno habitan seres extraordinarios.", img: "./assets/img/tapiz4b.png",categoria:"Nuevo",img2: "./assets/img/tapiz4c.png"});
productos.push({id:6, nombre:'Meditacion', precio:25000, descripcion: "La iluminacion es solo un estado de claridad", img: "./assets/img/tapiz5b.png",categoria:"Nuevo",img2: "./assets/img/tapiz5c.png"});
productos.push({id:7, nombre:'Erupcion interna', precio:33000, descripcion: "Las formas son solo la perspectiva de donde uno mira.", img: "./assets/img/tapiz6b.png",categoria:"Nuevo",img2: "./assets/img/tapiz6c.png"});

 */

/* const cargarDom = () => {
  const titulo = document.getElementById("titulo");
  const prodsContainer = document.getElementById("contenedor");
  titulo.innerText = "Tapizarte Web E-Commerce";
  productos.forEach((producto)=> {   
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML=`
    <img src="${producto.img}" class="card-img-top" alt="imagenes del producto">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class = "badge text-bg-primary"> ${producto.categoria}</p>
    <p class="card-text">${producto.descripcion}</p>
    <p class="price">$ ${producto.precio},00 </p>
    <button data-id=${producto.id} class = "btnAgregar btn btn-outline-success">Agregar al carrito</button>
     </div> 
    `
    prodsContainer.appendChild(div);
    });
    
    let btnAgregar = document.querySelectorAll(".btnAgregar");
  btnAgregar.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      let tapizSeleccionado = productos.find((producto)=> producto.id == e.target.dataset.id);
      carrito.push(tapizSeleccionado);
      VerCarrito(); 
    })
    })
    };
    
const VerCarrito = () => {
  const carritoContainer = document.getElementById("vercarrito");
  carritoContainer.innerHTML = ""; 

  if (carrito.length === 0) {
    carritoContainer.innerHTML = `<p class="text-muted">El carrito está vacío</p>`;
    return;
    } else
      
  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "d-flex border-bottom py-2";
    item.innerHTML = `
      
    <span>${producto.nombre} x 1</span>
    <img class="img2" src="${producto.img2}">
    <strong class="precioCarrito">$${producto.precio}</strong>
      
    `;
    carritoContainer.appendChild(item);
    });
    
    const total = carrito.reduce((acc, p) => acc + p.precio, 0);
    const totalDiv = document.createElement("div");
    totalDiv.className = "mt-3 fw-bold text-end total";
    totalDiv.textContent = `Total: $${total}`;
    carritoContainer.appendChild(totalDiv);
};



console.log(carrito);

VerCarrito();
cargarDom();


 */

const contenedor = document.querySelector("#contenedor");
const divCarrito = document.querySelector("#carrito");
const cantidadCarrito = document.querySelector("#cantidadCarrito");

let carrito = [];

const llamadoAlServidor = async () => {
  let llamada = await fetch("../prods.json");
  let data = await llamada.json();

  data.forEach((producto) => {
    let div = document.createElement("div");    
    div.innerHTML = `      
    <img src="${producto.img}" class="card-img-top" alt="imagenes del producto">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class = "badge text-bg-primary"> ${producto.categoria}</p>
    <p class="card-text">${producto.descripcion}</p>
    <p class="price">$ ${producto.precio},00 </p>
    <button data-id=${producto.id} class = "btnAgregar btn btn-outline-success">Agregar al carrito</button>
     </div> 

    `
    contenedor.appendChild(div);
  });
  //Hasta aca se añadio la posibilidad de agregar un carrito al producto, utilizando los productos de json.........................................
  const btnAgregar = document.querySelectorAll(".btnAgregar");
  btnAgregar.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      const tapizSeleccionado = data.find((p) => String(p.id) === String(id));
      let tapizEnCarrito = carrito.find((p) => p.id === tapizSeleccionado.id);
      Swal.fire({
      theme: 'dark',
      position: "top-end",
      icon: "success",
      title: "Has agregado el producto",
      showConfirmButton: false,
      timer: 1111
      }); 
      if (!tapizEnCarrito) {
        tapizEnCarrito = { ...tapizSeleccionado, cantidad: 1 };
        carrito.push(tapizEnCarrito);

        const item = document.createElement("div");
        item.className = "d-flex justify-content-between align-items-center border-bottom py-2";
        item.setAttribute("data-id", tapizSeleccionado.id);

        item.innerHTML = `
          <div class="d-flex align-items-center gap-2">
            <img class="img2" src="${tapizSeleccionado.img2 || tapizSeleccionado.img}" style="width:48px;height:48px;object-fit:cover">
            <span>${tapizSeleccionado.nombre}</span>
            <span class="qty badge bg-secondary">1</span>
          </div>
          <strong class="precioCarrito">$${tapizSeleccionado.precio}</strong>
        `;
        divCarrito.appendChild(item);
      } else {      
        tapizEnCarrito.cantidad++;
        const item = divCarrito.querySelector(`[data-id="${tapizEnCarrito.id}"]`);
        const qtySpan = item?.querySelector(".qty");
        if (qtySpan) qtySpan.textContent = tapizEnCarrito.cantidad;
      }
      actualizarTotal();
    });
  });

  actualizarTotal();
};

llamadoAlServidor();