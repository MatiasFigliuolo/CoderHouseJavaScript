
class Game {
    constructor(nombre, precio, descripcion, tipo, id) {

        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.tipo = tipo;
        this.id = id;
    }
}



let listaJuegos = [];  //cuando sea agregado, al apretar en el tipo de la categoria de juegos, se filtara segun la desicion elegida
let carrito = JSON.parse(localStorage.getItem("games")) || [];
fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
        listaJuegos = data;
        addGamesToHTML("all");
    })
    .catch((error) => console.error("Error fetching data:", error));

function addGamesToHTML(filtro) //Agrega todos los juegos a formato html y tambien filtra
{
    let juegos = document.getElementById("allGames");
    juegos.innerHTML = "";  // Limpiar el contenido existente
    if (filtro === "all") {
        for (let i = 0; i < listaJuegos.length; i++) {
            juegos.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start estiloJuegos"> Title: ${listaJuegos[i].nombre}<br>Price: $${listaJuegos[i].precio}<br>Type: ${listaJuegos[i].tipo}<br>${listaJuegos[i].descripcion} <br> <button class="buttonFixer" onclick="agregarAlCarrito(${i})">Buy</button></div>`;
        }
    } else {
        for (let i = 0; i < listaJuegos.length; i++) {
            if (filtro === listaJuegos[i].tipo) {
                juegos.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start estiloJuegos"> Title: ${listaJuegos[i].nombre}<br>Price: $${listaJuegos[i].precio}<br>Type: ${listaJuegos[i].tipo}<br>${listaJuegos[i].descripcion} <br> <button class="buttonFixer" onclick="agregarAlCarrito(${i})">Buy</button></div>`;
            }
        }
    }
}

function agregarAlCarrito(index) {
    carrito.push(listaJuegos[index]);
    let timerInterval;
    Swal.fire({
        title: "Game added!",
        timer: 1000,
        timerProgressBar: true,
        icon: "success",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    });
    localStorage.setItem("games", JSON.stringify(carrito));
}


