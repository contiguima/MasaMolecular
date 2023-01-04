var elementos = {
    "H": 1.00794,
    "He": 4.002602,
    "Li": 6.941,
    "Be": 9.012182,
    "B": 10.811,
    "C": 12.0107,
    "N": 14.00674,
    "O": 15.999,
    "F": 18.9984032,
    "Ne": 20.1797,
    "Na": 22.98977,
    "Mg": 24.305,
    "Al": 26.981538,
    "Si": 28.0855,
    "P": 30.973761,
    "S": 32.066,
    "Cl": 35.4527,
    "Ar": 39.948,
    "K": 39.0983,
    "Ca": 40.078,
    "Sc": 44.955910,
    "Ti": 47.867,
    "V": 50.9415,
    "Cr": 51.9961,
    "Mn": 54.938049,
    "Fe": 55.845,
    "Co": 58.933200,
    "Ni": 58.6934,
    "Cu": 63.546,
    "Zn": 65.38,
    "Ga": 69.723,
    "Ge": 72.63,
    "As": 74.92160,
    "Se": 78.96,
    "Br": 79.904,
    "Kr": 83.798,
    "Rb": 85.4678,
    "Sr": 87.62,
    "Y": 88.90585,
    "Zr": 91.224,
    "Nb": 92.90638,
    "Mo": 95.94,
    "Tc": 98.0,
    "Ru": 101.1,
    "Rh": 102.90550,
    "Pd": 106.42,
    "Ag": 107.8682,
    "Cd": 112.411,
    "In": 114.818,
    "Sn": 118.710,
    "Sb": 121.760,
    "Te": 127.60,
    "I": 126.90447,
    "Xe": 131.293
  };

  function calcularMasaMolecular() {
    // Obtener el valor del compuesto químico ingresado por el usuario
    var compuesto = document.getElementById("compuesto").value;
    // Inicializar la masa molecular a 0
    var masaMolecular = 0;
    // Separar el compuesto en elementos y cantidades
    var elementosCompuesto = compuesto.match(/[A-Z][a-z]*\d*/g);
    // Recorrer los elementos y sumar sus masas moleculares
    if(elementosCompuesto != null) {
    for (var i = 0; i < elementosCompuesto.length; i++) {
      // Obtener el elemento y la cantidad
      var elemento = elementosCompuesto[i].match(/[A-Z][a-z]*/)[0];
      var cantidad = elementosCompuesto[i].match(/\d+/);
      if (cantidad == null) {
        cantidad = 1;
      } else {
        cantidad = parseInt(cantidad[0]);
      }
      // Sumar la masa molecular del elemento al total
      masaMolecular += cantidad * elementos[elemento];
      
    }
    // Mostrar el resultado en la página web

    document.getElementById("resultado").innerHTML = "Masa molecular: " + masaMolecular + " g/mol";
  }
  else {
    document.getElementById("resultado").innerHTML = "Ups... este compuesto no está en nuestra base de datos o no existe.";

  }
}

  //Para mostrar la tabla

var tabla = document.getElementById("tabla");
//Recorro el JSON y crear filas y celdas en la tabla
for (var elemento in elementos){
    var fila= document.createElement("tr");
    var celdaElemento = document.createElement("td");
    celdaElemento.innerHTML = elemento;
    var celdaMasaMolecular = document.createElement("td");
    celdaMasaMolecular.innerHTML = elementos[elemento];
    //Agregar las celdas a la fila
    fila.appendChild(celdaElemento);
    fila.appendChild(celdaMasaMolecular);
    //Agregar fila a la tabla
    tabla.appendChild(fila);
}