// Que datos
// Que sabe de mismo?
// Que responsabilidad tiene <- Saber su precio
function Pan (tipo, precio) {
   this.tipoDePan = tipo;
   this.precio = precio
}

// TESTs
// construyo 3 tipos de panes
var pan1 = new Pan('clasico', 15);
var pan2 = new Pan('rustico', 20);
var pan3 = new Pan('brioche', 24);

