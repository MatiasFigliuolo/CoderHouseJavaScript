class Producto {
    constructor(nombre, precio, proveedor) {

        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

}

const listaProductos = [];
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

function sumar(listaProductos){

    let sumatoria=0;
    let mensaje = "Lista de productos:\n";
    for(let i=0 ; i<listaProductos.length;i++)
    {
        mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}\n`;
        sumatoria+= listaProductos[i].precio;
    }
    mensaje += `\nTotal: ${sumatoria}`;
    alert(mensaje);
}