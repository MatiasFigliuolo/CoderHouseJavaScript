kart();
function kart() {
    let carrito = JSON.parse(localStorage.getItem("games"));
    let div = document.getElementById("kartDiv");
    div.classList.add("kart");

    div.innerHTML = carrito && carrito.length > 0 ? "<p>Items in the cart:</p>" : "<p>¡Carrito Vacío!</p>";
    if (carrito && carrito.length > 0) {
        let total = 0;

        carrito.forEach((item, index) => {
            div.innerHTML += `<p class="itemsInKart">${index + 1}. <span>${item.nombre}</span> - $${item.precio.toFixed(2)}</p>`;
            total += item.precio;
        });
        div.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    }
    document.body.appendChild(div);
}

function deleatKart()
{
    let carrito=[];
    localStorage.setItem("games", JSON.stringify(carrito));
}