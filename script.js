const elementos = {
  "H":1.01, 
  "He":4.00, 
  "Li":6.94, 
  "Be":9.01, 
  "B":10.81, 
  "C":12.01, 
  "N":14.01, 
  "O":16.00, 
  "F":19.00, 
  "Ne":20.18, 
  "Na":22.99, 
  "Mg":24.31, 
  "Al":26.98, 
  "Si":28.09, 
  "P":30.97, 
  "S":32.07, 
  "Cl":35.45, 
  "Ar":39.95, 
  "K":39.10, 
  "Ca":40.08, 
  "Sc":44.96,
  "Ti":47.87, 
  "V":50.94, 
  "Cr":52.00, 
  "Mn":54.94, 
  "Fe":55.85, 
  "Co":58.93, 
  "Ni":58.69, 
  "Cu":63.55, 
  "Zn":65.38, 
  "Ga":69.72, 
  "Ge":72.63, 
  "As":74.92, 
  "Se":78.96, 
  "Br":79.90, 
  "Kr":83.80, 
  "Rb":85.47, 
  "Sr":87.62, 
  "Y":88.91, 
  "Zr":91.22, 
  "Nb":92.91, 
  "Mo":95.94, 
  "Tc":98.00, 
  "Ru":101.07, 
  "Rh":102.91, 
  "Pd":106.42, 
  "Ag":107.87, 
  "Cd":112.41, 
  "In":114.82, 
  "Sn":118.71, 
  "Sb":121.76, 
  "Te":127.60, 
  "I":126.90, 
  "Xe":131.29, 
  "Cs":132.91, 
  "Ba":137.33, 
  "La":138.91, 
  "Ce":140.12, 
  "Pr":140.91, 
  "Nd":144.24, 
  "Pm":145.00, 
  "Sm":150.36, 
  "Eu":151.96, 
  "Gd":157.25, 
  "Tb":158.93, 
  "Dy":162.50, 
  "Ho":164.93, 
  "Er":167.26, 
  "Tm":168.93, 
  "Yb":173.05, 
  "Lu":174.97, 
  "Hf":178.49, 
  "Ta":180.95, 
  "W":183.84, 
  "Re":186.21, 
  "Os":190.23, 
  "Ir":192.22, 
  "Pt":195.08, 
  "Au":196.97, 
  "Hg":200.59, 
  "Tl":204.38, 
  "Pb":207.2, 
  "Bi":208.98, 
  "Po":209.00, 
  "At":210.00, 
  "Rn":222.00, 
  "Fr":223.00, 
  "Ra":226.03, 
  "Ac":227.03, 
  "Th":232.04, 
  "Pa":231.04, 
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