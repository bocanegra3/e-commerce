let carrito = [];

const productos = [
  {id: 1, nombre: "Cristales internos", precio: 35000, descripcion: "'El verdadero tesoro esta en uno.", img: "./assets/img/tapiz0b.png",categoria:"Mas Vendido"},  
  {id: 2, nombre: "Iluminar Interior", precio: 28000, descripcion: "Mirar hacia el inverior es el primer paso para comenzar a ver.", img: "./assets/img/tapiz1b.png",categoria:"Mas Vendido"},  
  {id: 3, nombre: "Chackra Lunar", precio: 19000, descripcion: "Las formas son solo la perspectiva de donde uno mira.", img: "./assets/img/tapiz2b.png",categoria:"Oferta"},  
  {id: 4, nombre: "Reflejo Sombrio", precio: 180000, descripcion: "Las frecuencias son solo la perspectiva de donde uno es.", img: "./assets/img/tapiz3b.png",categoria:"Oferta"},  
];

productos.push({id:5, nombre:'Ser Multiverso', precio:23000, descripcion: "Entre el cielo y el infierno habitan seres extraordinarios.", img: "./assets/img/tapiz4b.png",categoria:"Nuevo"});
productos.push({id:6, nombre:'Meditacion', precio:25000, descripcion: "La iluminacion es solo un estado de claridad", img: "./assets/img/tapiz5b.png",categoria:"Nuevo"});
productos.push({id:7, nombre:'Erupcion interna', precio:33000, descripcion: "Las formas son solo la perspectiva de donde uno mira.", img: "./assets/img/tapiz6b.png",categoria:"Nuevo"});


const cargarDom = () => {
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
      <p>$ ${producto.precio},00 </p>
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
      cargarCarrito(); 
    })
  })
};

const cargarCarrito = () => {
  const carritoContainer = document.getElementById("carrito");
  carritoContainer.innerHTML = ""; 

  if (carrito.length === 0) {
    carritoContainer.innerHTML = `<p class="text-muted">El carrito está vacío</p>`;
    return;
  } else

  carrito.forEach((producto) => {
    const item = document.createElement("div");
    item.className = "d-flex justify-content-between border-bottom py-2";
    item.innerHTML = `
      <span>${producto.nombre}</span>
      <strong>$${producto.precio}</strong>
    `;
    carritoContainer.appendChild(item);
  });
  
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  const totalDiv = document.createElement("div");
  totalDiv.className = "mt-3 fw-bold text-end";
  totalDiv.textContent = `Total: $${total}`;
  carritoContainer.appendChild(totalDiv);
};

console.log(carrito);

cargarCarrito();
cargarDom();


