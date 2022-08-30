// Estructura function arrow

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = x => x * 0.21;

let precioProducto = parseInt(prompt ("Ingresa el precio del Producto" ));
let descuento = parseInt(prompt ("Ingrese el descuento"));
let opcion = parseInt(prompt(`Ingresar con iva \n1-SI \n2-No`));
let nuevoPrecio = resta(suma(precioProducto , iva(precioProducto)), descuento);
let nuevoPrecioUno = resta(precioProducto,descuento);

// Respuestas

if (opcion == 1){
    alert( "Total a pagar/con iva " + nuevoPrecio)
} else if(opcion == 2){
    alert( "Total a pagar con descuento/sin iva " + nuevoPrecioUno)
} else{alert("Los datos ingresados son incorrectos, intenta nuevamente")}









