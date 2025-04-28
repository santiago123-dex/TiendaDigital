//-------------- Array de productos ----------------//
let productos = [
    { id_producto: 0, nombre_producto: "Pan", precio_producto: 2000, cantidad_producto: 5 },
    { id_producto: 1, nombre_producto: "Leche", precio_producto: 4000, cantidad_producto: 2 }
]


//--------------- Clase Productos, ingreso de productos y ver productos ---------------------------------------
class Productos {
    constructor(id_producto, nombre_producto, precio_producto, cantidad_producto) {
        this.ingresarProducto({ id_producto, nombre_producto, precio_producto, cantidad_producto })
    } 1

    ingresarProducto({ id_producto, nombre_producto, precio_producto, cantidad_producto }) {
        this.id_producto = id_producto
        this.nombre_producto = nombre_producto
        this.precio_producto = precio_producto
        this.cantidad_producto = cantidad_producto
    }
}

let ingresarProducto = (id_producto, nombre_producto, precio_producto, cantidad_producto) => {
    let objeto = new Productos(id_producto, nombre_producto, precio_producto, cantidad_producto)
    productos.push(objeto)
}

function verProductos() {
    if (productos.length === 0) {
        alert("No hay producto registrados")
    } else {
        let mensaje = "Productos: \n"
        for (let i = 0; i < productos.length; i++) {
            mensaje += `ID: ${productos[i].id_producto} / Nombre: ${productos[i].nombre_producto} / Precio: ${productos[i].precio_producto} / Cantidad: ${productos[i].cantidad_producto} \n`
        }
        alert(mensaje)
    }
}


// ---------------------- Funcionalidad de comprar con carrito (En proceso)---------------------------------

function comprar(carrito) {
    if (carrito.lenght === 0) {
        alert("El carrito esta vacio")
    }else{
        let total = 0
        for (let i = 0; i < productos.length; i++) {
            total += productos[i].precio_producto  * productos[i].cantidad_producto
        }
        total = total.toLocaleString()
        alert(total)
    }
}




//----------------------- Caca en estado puro ------------------------------------------

// class Carrito {
//     constructor() {
//         this.productos = []
//     }
//     agregarProducto(producto) {
//         this.productos.push(producto)
//     }
// }

// let calcularTotal = () => {
//     let total = 0
//     for (let producto of this.productos) {
//         total += producto.precio
//     }
//     return total
// }

// let carrito = new Carrito()






//----------------------- Parte de los while de la página y declaraciones de sus variables -----------------

let id_producto //Estas variables tienen que estar declaradas aquí
let nombre_producto
let precio_producto
let cantidad_producto

while (true) {
    let option = Number(prompt("\n1 Ver productos \n2 Ingresar nuevo producto \n3 Agregar productos al carrito \n4 Ver total \n5 Confirmar compra \n6 Salir"))

    if (isNaN(option) || option < 1 || option > 6) {//Comprueba que no introduzcan no deseados
        alert("seleccione una opcion valida")
    } else if (option === 1) {
        verProductos()
    } else if (option === 2) {
        while (true) { //Todos estos while verifican que la info introducida sea válida
            id_producto = Number(prompt("Ingrese el id del producto"))
            if (isNaN(id_producto)) {
                alert("ingrese un id valido")
            } else {
                break;
            }
        }
        while (true) {
            nombre_producto = prompt("Ingrese el nombre del producto")
            if (nombre_producto === "") {
                alert("ingrese un nombre valido")
            } else {
                break;
            }
        }

        while (true) {
            precio_producto = Number(prompt("Ingrese el precio del producto"))
            if (isNaN(precio_producto) || precio_producto < 1) {
                alert("ingrese un precio valido")
            } else {
                break;
            }
        }

        while (true) {
            cantidad_producto = Number(prompt("Ingrese la cantidad del producto"))
            if (isNaN(cantidad_producto) || cantidad_producto < 1) {
                alert("ingrese una cantidad valida")
            } else {
                break;
            }
        }
        ingresarProducto(id_producto, nombre_producto, precio_producto, cantidad_producto)//Llama a una funcion para que esta cree un nuevo objeto
    } else if (option === 3) {
    } else if (option === 4) {
        comprar("Hola")//Compra con carrito, en proceso
    } else if (option === 5) {

    } else if (option === 6) {//Termina con el while
        break
    }

}