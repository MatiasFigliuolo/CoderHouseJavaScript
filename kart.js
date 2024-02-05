kart();          //funcion que muestra el carrito y da opcion de borrarlo
function kart() {
    let kart = JSON.parse(localStorage.getItem("games"));
    let div = document.getElementById("kartDiv");
    div.classList.add("kart");

    div.innerHTML = kart && kart.length > 0 ? "<p>Items in the cart:</p>" : "<p>¡Carrito Vacío!</p>";
    if (kart && kart.length > 0) {
        let total = 0;

        kart.forEach((item, index) => {
            div.innerHTML += `<p class="itemsInKart">${index + 1}. <span>${item.name}</span> - $${item.price.toFixed(2)}</p>`;
            total += item.price;
        });
        div.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
    }
    div.innerHTML+=`<button onclick="deleatKart()" class="deleatButton">Deleat</button>`
    document.body.appendChild(div);
}

function deleatKart()  //funcion de borrado del carrito si recibe doble confirmacion del usuario
{
    let kart = JSON.parse(localStorage.getItem("games"));
    if (kart && kart.length > 0){
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
          kart=[];
          localStorage.setItem("games", JSON.stringify(kart));
          setTimeout(() => {
            location.reload();
        }, 2000);
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