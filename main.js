
class Game {
    constructor(name, price, descripcion, type, id) {

        this.name = name;
        this.price = price;
        this.descripcion = descripcion;
        this.type = type;
        this.id = id;
    }
}



let gameList = [];  //cuando sea agregado, al apretar en el type de la categoria de games, se filtara segun la desicion elegida
let kart = JSON.parse(localStorage.getItem("games")) || [];
fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
        gameList = data;
        addGamesToHTML("all");
    })
    .catch((error) => console.error("Error fetching data:", error));

function addGamesToHTML(filter) //Agrega todos los games a formato html y tambien filtra
{
    let games = document.getElementById("allGames");
    games.innerHTML = "";  // Limpiar el contenido existente
    if (filter === "all") {
        for (let i = 0; i < gameList.length; i++) {
            games.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start gameStyles"> Title: ${gameList[i].name}<br>Price: $${gameList[i].price}<br>Type: ${gameList[i].type}<br>${gameList[i].descripcion} <br> <button class="buttonFixer" onclick="addToKart(${i})">Buy</button></div>`;
        }
    } else {
        for (let i = 0; i < gameList.length; i++) {
            if (filter === gameList[i].type) {
                games.innerHTML += `<div class="col-xl-12 col-md-12 col-sm-12 text-start gameStyles"> Title: ${gameList[i].name}<br>Price: $${gameList[i].price}<br>Type: ${gameList[i].type}<br>${gameList[i].descripcion} <br> <button class="buttonFixer" onclick="addToKart(${i})">Buy</button></div>`;
            }
        }
    }
}

function addToKart(index) {  //funcion que una vez llamado de la funcion addGamesToHTML agrega al carrito el juego seleccionado
    kart.push(gameList[index]);
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
    localStorage.setItem("games", JSON.stringify(kart));
}


