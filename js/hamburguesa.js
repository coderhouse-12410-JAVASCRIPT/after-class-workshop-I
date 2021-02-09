// Construir hamburguesa
// tenemos que seleccionar ingredientes
// primero el pan <- 1
// luego carne <- 1 por ahora
// agregados <- varios
// aderezos <- varios
// debe saber cuanto vale segun el total del costo de sus ingredenties

function Hamburguesa() {

    this.pan = ""
    this.carne = ""
    this.agregados = []
    this.aderezos = []

    this.agregarPan = function(pan) {
        this.pan = pan
    }

    this.agregarCarne = function(carne) {
        this.carne = carne
    }

    this.agregarAderezos = function(aderezo) {
        this.aderezos.push(aderezo);
    }

    this.valorTotal = function() {

        var sumaTotal = 0;
        sumaTotal += this.pan.precio;


        return sumaTotal;
    }
}


// Tests para construir hamburguesas
var pan1 = new Pan('clasico', 15);
var pan2 = new Pan('rustico', 20);
var pan3 = new Pan('brioche', 24);

var miHamburguesa = new Hamburguesa();

miHamburguesa.agregarPan(pan3);
miHamburguesa.agregarCarne("carne1");
miHamburguesa.agregarAderezos("Mostaza");
miHamburguesa.agregarAderezos("Mayonesa");

console.log(miHamburguesa.valorTotal());