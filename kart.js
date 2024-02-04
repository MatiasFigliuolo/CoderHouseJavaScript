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
    div.innerHTML+=`<button onclick="deleatKart()" class="deleatButton">Deleat</button>`
    document.body.appendChild(div);
}

function deleatKart()
{
    let carrito = JSON.parse(localStorage.getItem("games"));
    if (carrito && carrito.length > 0){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          carrito=[];
          localStorage.setItem("games", JSON.stringify(carrito));
          setTimeout(() => {
            location.reload();
        }, 5000);
        }
      });
     
    }else
    {
        Swal.fire({
            title: "!Kart already empty!",
            icon: "warring"
          });
    }
}