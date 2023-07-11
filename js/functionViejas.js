//EVENTO DE FORMULARIO de la pagina contacto
let formContact = document.getElementById("formContact")
formContact.addEventListener("submit", (event) => {
    event.preventDefault();
    setTimeout(() => {
       console.log(`Hemos recibido correctamemte tu consulta,en breve nos comunicaremos contigo`);
        // Redirigir al usuario al index.html
        window.location.href = "index.html";
    },5000)
})




function filtrarPorCategoria(tiendaCompleta) {
    let categoriaI = prompt("Ingrese la categoria que desea encontrar: MUJER,HOMBRE,NIÑOS O ACCESORIOS")
    let buscar = tiendaCompleta.filter((producto) => { return producto.categoria >= categoriaI })

    console.log("Estos son los productos encontrados en esa categoría:");
    for (let producto of buscar) {
        console.log(`- ID: ${producto.id}, Producto: ${producto.producto}, Categoría: ${producto.categoria}, Precio: ${producto.precio}`);
    }
};

function filtrarPorPrecio(tiendaCompleta) {
    let precioIngresado = parseInt(prompt("Ingrese el precio máximo que puede pagar"))
    let busq = tiendaCompleta.filter((producto) => { return producto.precio >= precioIngresado })

    console.log("Estos son los productos encontradps en ese rango de precios");
    for (let producto of busq) {
        console.log(`- ID:"${producto.id},Producto: ${producto.producto},Categoria: ${producto.categoria},Precio:${producto.precio}`)
    }

}
