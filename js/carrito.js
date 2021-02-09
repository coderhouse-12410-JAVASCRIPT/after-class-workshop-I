// Que responsabilidades tiene el carrito?
// El sabe cuantos items tiene
// Puede el total del valor de los items adentro
// Tiene cual es el ultimo elemento.
function Carrito(){
    this.items = []

    this.agregarItem = function (item) {
        this.items.push(item);
    }

    this.dameElUltimoElemento = function () {
        return this.items[this.items.length - 1];
    }

    this.valorTotal = function() {
        var sumaTotal = 0;
        for( let i=0; i< this.items.length; i++){
            var unaHamburguesa = this.items[i];
            var valorHamburguesa = unaHamburguesa.valorTotal();
            sumaTotal += valorHamburguesa
        }
        return sumaTotal;
    }
}

///////////////////////////////////
// Pruebas
var miCarrito = new Carrito();

var pan1 = new Pan('clasico', 15);
var pan2 = new Pan('rustico', 20);
var pan3 = new Pan('brioche', 24);
///////////////////////////////////////
var miHamburguesa = new Hamburguesa()
miHamburguesa.agregarPan(pan3);
miHamburguesa.agregarCarne("carne1");
miHamburguesa.agregarAderezos("Mostaza");
miHamburguesa.agregarAderezos("Mayonesa");
///////////////////////////////////////
var miHamburguesa2 = new Hamburguesa()
miHamburguesa2.agregarPan(pan2);
miHamburguesa2.agregarCarne("carne1");
miHamburguesa2.agregarAderezos("Mostaza");
miHamburguesa2.agregarAderezos("Mayonesa");
///////////////////////////////////////
var miHamburguesa3 = new Hamburguesa()
miHamburguesa3.agregarPan(pan2);
miHamburguesa3.agregarCarne("carne1");
miHamburguesa3.agregarAderezos("Mostaza");
miHamburguesa3.agregarAderezos("Mayonesa");
///////////////////////////////////////

miCarrito.agregarItem(miHamburguesa);
miCarrito.agregarItem(miHamburguesa2);
miCarrito.agregarItem(miHamburguesa3);

var miUltimoElemento = miCarrito.dameElUltimoElemento();

console.log(miUltimoElemento);

console.log(miCarrito.valorTotal());