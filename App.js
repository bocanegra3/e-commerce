
const contenedor = document.querySelector("#contenedor");
const divCarrito = document.querySelector("#carrito");
const cantidadCarrito = document.querySelector("#cantidadCarrito");

let carrito = [];

const linkCarrito = document.querySelector("#linkCarrito");

const actualizarCantidadGlobal = () => {
  const totalUnidades = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  linkCarrito.textContent = `🛒 (${totalUnidades})`;
};


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
      actualizarCantidadGlobal();
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
             <button class="btnEliminar btn btn-danger btn-sm" data-id="${tapizSeleccionado.id}">X</button>    
          <strong class="precioCarrito">$${tapizSeleccionado.precio}</strong>
        `;
        divCarrito.appendChild(item);
      } else {      
        tapizEnCarrito.cantidad++;
        const item = divCarrito.querySelector(`[data-id="${tapizEnCarrito.id}"]`);
        const qtySpan = item?.querySelector(".qty");
        if (qtySpan) qtySpan.textContent = tapizEnCarrito.cantidad;        
      }
      actualizarCantidadGlobal();
      actualizarTotal();
    });
  });
  divCarrito.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnEliminar")) {
    const id = e.target.dataset.id;

    carrito = carrito.filter((producto) => producto.id != id);
    const item = divCarrito.querySelector(`[data-id="${id}"]`);
    if (item) item.remove();

    actualizarTotal();
    actualizarCantidadGlobal();
  }
  });


  actualizarTotal();

  

};

llamadoAlServidor();