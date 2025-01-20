//Importaciones

document.addEventListener("DOMContentLoaded", init);

function init() {
  carrucel();
  // obtenerProductosCategoria();
  generarCategoriaLista();
  generarTarjetas();

  // carrucel
}

function carrucel() {
  new Splide(".splide", {
    type: "loop",
    height: "auto",
    width: "30rem",
    focus: "center",
    autoWidth: true,
  }).mount();
}

/* function obtenerProductosCategoria() {
   axios.get('https://fakestoreapi.com/products/categories')
        .then(r => console.log(r))
} */

function generarCategoriaLista() {
  axios.get("https://fakestoreapi.com/products/categories").then((r) => {
    let res = JSON.stringify(r);

    for (res = 0; res < 6; res++) {
      // console.log(r.data[res]);
      const categorias = document.querySelector("ul.categoria--lista");
      const li = document.createElement("li");
      li.textContent = r.data[res];
      categorias.appendChild(li);
    }
  });
}
function generarTarjetas() {
  for (let i = 0; i < 6; i++) {
    // console.log(r.data[res]);

    const divTarjetas = document.querySelector("div .productos--seccion");

    const productoTarjeta = document.createElement("div");
    productoTarjeta.classList.add("producto-tarjeta");

    const imagenProducto = document.createElement("img");
    imagenProducto.classList.add("imagen-producto");
    imagenProducto.src = `https://picsum.photos/800/800?random=${Math.random(
      1,
      2
    )}`;
    productoTarjeta.appendChild(imagenProducto);

    const titulo = document.createElement("h2");
    titulo.textContent = "Lorem";
    productoTarjeta.appendChild(titulo);

    const descripcion = document.createElement("p");
    descripcion.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit turpis neque, id feugiat augue gravida at.";
    productoTarjeta.appendChild(descripcion);

    divTarjetas.appendChild(productoTarjeta);
  }
}

function navegacionFija() {
  console.log('se llama corectamente')
  const barra = document.querySelector(".header");
  const sobreFestival = document.querySelector(".main--contenedor");
  const body = document.querySelector("body");
  const nav = document.querySelector('nav.nav-bar');
  
  window.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().top < 0) {
      barra.classList.add("fijo");
      body.classList.add("body-scroll");
      nav.classList.add("esconder-nav")
    } else {
      barra.classList.remove("fijo");
      body.classList.remove("body-scroll");
      nav.classList.remove("esconder-nav")
    }
  });
}
navegacionFija();
