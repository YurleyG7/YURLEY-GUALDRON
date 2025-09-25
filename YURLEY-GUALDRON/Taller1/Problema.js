// Importamos la librería prompt-sync para pedir datos por consola
const prompt = require("prompt-sync")();

// Esta función se encarga de calcular el valor a pagar en el parqueadero de motos
function parqueaderoMotos() {
     // Mostramos el título del parqueadero al inicio
    console.log("=================================");
    console.log("     PARQUEADERO DE MOTOS YURLEY 🏍️     ");
    console.log("   Tarifas: 1h=$2000, 2h=$3500, 3h+=$5000  ");
    console.log("=================================");

  // Variable que controla si seguimos atendiendo clientes
  let otroCliente = "si";

  // Usamos un bucle while para repetir mientras haya más clientes
  while (otroCliente === "si") {
    // Inicializamos el total a pagar en 0
    let total = 0;

    // Pedimos cuántas motos trae el cliente
    let numMotos = parseInt(prompt("¿Cuántas motos vas a estacionar? "));

    // Usamos un bucle for para registrar cada moto
    for (let i = 1; i <= numMotos; i++) {
      // Solicitamos las horas de parqueo para la moto actual
      let horas = parseInt(prompt(`Cuántas horas vas a estacionar ${i}: `));

      // Usamos switch para asignar precio según las horas
      switch (horas) {
        case 1:
          total += 2000; // 1 hora cuesta $2000
          break;
        case 2:
          total += 3500; // 2 horas cuestan $3500
          break;
        default:
          total += 5000; // 3 o más horas cuestan $5000
      }
    }

    // Usamos if/else para aplicar un descuento si trae más de 3 motos (amigos)
    if (numMotos > 3) {
      console.log("¡Tienes un 10% de descuento por traer varias motos!");
      total *= 0.9; // Aplicamos el 10% de descuento
    }

    // Mostramos el total a pagar en consola
    console.log("El total a pagar es: $" + total);

    // Preguntamos si hay otro cliente y actualizamos la condición del while
    otroCliente = prompt("¿Atenderas otro cliente? (si/no): ").toLowerCase();
  }

  // Mensaje final cuando ya no hay más clientes
  console.log("Gracias por visitar el parqueadero de Yurley 🏍️");
}

// Llamamos la función para iniciar el programa
parqueaderoMotos();
