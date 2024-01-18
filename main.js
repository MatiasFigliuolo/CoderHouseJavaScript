class Game {
    constructor(nombre, precio, descripcion, tipo, id) {

        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.id = id;
        //this.imagen = imagen;
    }
}


function demoAdding(listaJuegos)  //Funcion demo para la carga de juegos en la pagina
{
    let game = new Game("God of War", 2500, "Is a war game", "Accion", 0);
    let game1 = new Game("Rachet and Clank", 1500, "Rachet Adventure game", "Adventure", 1);
    let game2 = new Game("Assasins Creed", 500, "Follow the stroy of Ezio", "stealth", 2);
    let game3 = new Game("Rocket Leage", 0, "!This is Rocket Leage!", "Sports", 3);
    let game4 = new Game("Call of Duty", 5500, "Experience WW3", "Shooter", 4);

    listaJuegos.push(game);
    listaJuegos.push(game1);
    listaJuegos.push(game2);
    listaJuegos.push(game3);
    listaJuegos.push(game4);
}

const listaJuegos = [];
let buscador = "all";  //cuando sea agregado, al apretar en el tipo de la categoria de juegos, se filtara segun la desicion elegida
let carrito = [];
demoAdding(listaJuegos);
addGamesToHTML(buscador);



function addGamesToHTML(buscador) //Agrega los juegos a formato html y puede filtrar por su tipo
{
    let juegos = document.getElementById("allGames");
    if (buscador === "all") {
        for (let i = 0; i < listaJuegos.length; i++) {
            juegos.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start estiloJuegos"> Title: ${listaJuegos[i].nombre}<br>Price: $${listaJuegos[i].precio}<br>Type: ${listaJuegos[i].tipo}<br>${listaJuegos[i].descripcion} <br> <button class="buttonFixer" onclick="agregarAlCarrito(${i})">Buy</button></div>`;
        }
    } else {
        for (let i = 0; i < listaJuegos.length; i++) {
            if (buscador === listaJuegos[i].tipo) {
                juegos.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start estiloJuegos"> Title: ${listaJuegos[i].nombre}<br>Price: $${listaJuegos[i].precio}<br>Type: ${listaJuegos[i].tipo}<br>${listaJuegos[i].descripcion} <br> <button class="buttonFixer" onclick="agregarAlCarrito(${i})">Buy</button></div>`;
            }
        }
    }
}

function agregarAlCarrito(index) {
    carrito.push(listaJuegos[index]);
    alert(`! ${listaJuegos[index].nombre} added to cart successfully!`);
    localStorage.setItem("games", JSON.stringify(carrito));
}

function mostarCarrito() {
    carrito = JSON.parse(localStorage.getItem("games"));

    if (carrito && carrito.length > 0) {
        let mensaje = "Items in the cart:\n";
        let total = 0;
        carrito.forEach((item, index) => {
            mensaje += `${index + 1}. ${item.nombre} - $${item.precio}\n`;
            total += item.precio;
        });

        mensaje += `\nTotal: $${total.toFixed(2)}`;

        Swal.fire({
            text: mensaje,
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "The cart is empty!",
        });
    }
}


/*
let respuesta = 0;

while (respuesta != -1) {
    respuesta = Number(prompt("Eliga una opcion: 1-Agregar producto // 2-Mostrar productos // 3-Sumar // 4-Salir: "));
    switch (respuesta) {
        case 1: listaProductos.push(agregar());
            break;
        case 2: mostrar(listaProductos);
            break;
        case 3: sumar(listaProductos);
            break;
        case 4: respuesta = -1;
            break;
        default:
            alert("Opción no válida. Introduce un número válido.");

    }
}

function agregar() {

    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = Number(prompt("Ingrese su precio: "));
    let proveedor = prompt("ingrese el nombre del proveedor: ");

    const producto = new Producto(nombre, precio, proveedor);

    return producto;
}

function mostrar(listaProductos) {

    for (let i = 0; i < listaProductos.length; i++) {

        alert("Producto: " + listaProductos[i].nombre +
            "\nPrecio: $" + listaProductos[i].precio +
            "\nProveedor: " + listaProductos[i].proveedor);
    }

}

function sumar(listaProductos) {

    let sumatoria = 0;
    let mensaje = "Lista de productos:\n";
    for (let i = 0; i < listaProductos.length; i++) {
        mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}\n`;
        sumatoria += listaProductos[i].precio;
    }
    mensaje += `\nTotal: ${sumatoria}`;
    alert(mensaje);
}
*/

