let productos = [
]

class Productos {
    constructor(id_producto, nombre_producto, precio_producto, cantidad_producto){
        this.ingresarProducto({id_producto, nombre_producto, precio_producto, cantidad_producto})
    }
    
    set ingresarProducto({id_producto, nombre_producto, precio_producto, cantidad_producto}){
        this.id_producto = id_producto
        this.nombre_producto = nombre_producto 
        this.precio_producto = precio_producto 
        this.cantidad_producto = cantidad_producto
    }
}

let ingresarProducto = () => {
    
}


//hola, este es un comentario
function comprar(carrito) {
    if (carrito.lenght === 0) {
        alert("El carrito esta vacio")
    }
}

function verProductos(){
    if(productos.length === 0){
        alert("No hay producto registrados")
    }else{
        let mostrar = "Productos:" +productos.join ("\n")
        alert(mostrar)
    }
}




class Carrito {
    constructor(){
        this.productos= []
    }
    agregarProducto(producto){
        this.productos.push(producto)
    }
}

let calcularTotal = () => {
    let total= 0
    for(let producto of this.productos){
        total += producto.precio
    }
    return total
}

let carrito= new Carrito()

carrito.agregarProducto(producto1)
carrito.agregarProducto(producto2)

alert("Total a pagar: $"+ carrito.calcularTotal())






















function menu(){
let opcion
    do{
        opcion = Number(prompt("\n1 Ver productos \n2 Agregar productos al carrito \n3 Ver total \n4 Confirmar compra \n5 Salir"))
        
        if(opcion < 1 || opcion > 5){
            alert("Opcion incorrecta")
            continue
        }
        
        switch(opcion){
            case 1:

                break
            case 2:

                break
            case 3:

                break
            case 4:
                
                break
            case 5:
                alert("Regresando al lobby")
                window.location.href = "index.html" 
                break
        }
    }while(!opcion == 5)
}

menu()