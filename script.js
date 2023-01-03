window.onload = function() {
    // El Window.onload sirve para que asegurarnos que todos los elementos del DOM esten disponibles antes de ejecutar JS.
    const tablaDatos = document.querySelector(".tabla-de-masas table");
    const entradaUsuario = document.querySelector("#compuesto");
    const resultado = document.querySelector("#resultado");
  
    document.querySelector("button").addEventListener("click", buscarValor);  
    function buscarValor(event){
        event.preventDefault();
        const filas = tablaDatos.querySelectorAll("tr");
        for (const fila of filas){
            const simbolo = fila.querySelector("td").textContent;
            if (simbolo === entradaUsuario.value){
                const masaMolecular = fila.querySelector("td:last-child").textContent;
                resultado.textContent = `La masa molecular del elemento ${simbolo} es ${masaMolecular} g/mol`;
                return;
            }
        }
        resultado.textContent = `No se ha encontrado el elemento ${entradaUsuario.value} en la tabla`;
    }
  };
  