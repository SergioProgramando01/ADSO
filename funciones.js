function verificarParImpar() {
    // Obtenemos el elemento de entrada donde el usuario ingresa el número
    const numeroInput = document.getElementById("esParImpar");
    
    // Obtenemos el valor ingresado y lo convertimos a un número entero
    const numero = parseInt(numeroInput.value);

    // Obtenemos el elemento donde mostraremos el resultado
    const resultado = document.getElementById("resultadoParImpar");

    // Verificamos si el valor ingresado es un número válido
    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
    } else {
        // Verificamos si el número es par o impar
        if (numero % 2 === 0) {
            resultado.textContent = `${numero} es par.`;
        } else {
            resultado.textContent = `${numero} es impar.`;
        }
    }
}

function verificarAprobado() {
    const calificacionInput = document.getElementById("calificacionAprobado");
    const calificacion = parseInt(calificacionInput.value);
    const resultado = document.getElementById("resultadoAprobado");

    const notaMinima = 60;

    if (isNaN(calificacion)) {
        resultado.textContent = "Por favor, ingrese una calificación válida.";
    } else if (calificacion >= notaMinima) {
        resultado.textContent = "¡Felicidades! Has aprobado el examen.";
    } else {
        resultado.textContent = "Lo sentimos, no has aprobado el examen.";
    }
}

function clasificarCalificacion() {
    const calificacionInput = document.getElementById("calificacionClasificador");
    const calificacion = parseInt(calificacionInput.value);
    const resultado = document.getElementById("resultadoClasificador");
  
    if (isNaN(calificacion) || calificacion < 1 || calificacion > 100) {
      resultado.textContent = "Por favor, ingresa una calificación válida entre 1 y 100.";
    } else {
      if (calificacion >= 90) {
        resultado.textContent = "A";
      } else if (calificacion >= 80) {
        resultado.textContent = "B";
      } else if (calificacion >= 70) {
        resultado.textContent = "C";
      } else if (calificacion >= 60) {
        resultado.textContent = "D";
      } else {
        resultado.textContent = "F";
      }
    }
  }

function determinarSigno() {
    const numeroInput = document.getElementById("numero");
    const numero = parseInt(numeroInput.value);
    const resultado = document.getElementById("resultadoSigno");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
    } else {
        if (numero > 0) {
            resultado.textContent = "El número es positivo.";
        } else if (numero < 0) {
            resultado.textContent = "El número es negativo.";
        } else {
            resultado.textContent = "El número es cero.";
        }
    }
}

function compararNumeros() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultadoComparacion");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Por favor, ingresa dos números válidos.";
    } else if (numero1 > numero2) {
        resultado.textContent = `El número ${numero1} es mayor que ${numero2}.`;
    } else if (numero1 < numero2) {
        resultado.textContent = `El número ${numero2} es mayor que ${numero1}.`;
    } else {
        resultado.textContent = "Los números son iguales.";
    }
}

function calcularPromedioDinero() {
    // Obtener el valor de N (cantidad de dinero de Juan) ingresado por el usuario
    const cantidadJuan = parseFloat(document.getElementById("cantidadJuan").value);
  
    // Validar si el valor ingresado es un número válido
    if (isNaN(cantidadJuan) || cantidadJuan <= 0) {
      alert("Por favor, ingresa una cantidad de dinero válida (número positivo).");
      return;
    }
  
    // Calcular las cantidades de David y José
    const cantidadDavid = cantidadJuan / 2;
    const cantidadJose = (cantidadJuan + cantidadDavid) / 2;
  
    // Calcular el promedio
    const promedio = (cantidadJuan + cantidadDavid + cantidadJose) / 3;
  
    // Mostrar el resultado
    document.getElementById("resultadoPromedio").textContent = `El promedio de dinero entre los tres es: $${promedio.toFixed(2)}`;
  }

  function calcularPromedioYComparar() {
    // Obtener los tres números ingresados por el usuario
    const numero1 = parseInt(document.getElementById("numero1Comparar").value);
    const numero2 = parseInt(document.getElementById("numero2Comparar").value);
    const numero3 = parseInt(document.getElementById("numero3Comparar").value);  
    // Calcular el promedio
    const promedio = (numero1 + numero2 + numero3) / 3;  
    document.getElementById("resultadoComparacionPromedio").textContent = promedio;
  }

  function calcularIMC() {
    // Obtener los datos del usuario
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    // Validar los datos
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
      alert("Por favor, ingresa un peso y una altura válidos (números positivos).");
      return;
    }
  
    // Calcular el IMC
    const imc = peso / (altura * altura);
  
    // Clasificar el IMC y mostrar el resultado
    let mensaje;
    if (imc < 18.5) {
      mensaje = "Bajo peso";
    } else if (imc < 25) {
      mensaje = "Peso normal";
    } else if (imc < 30) {
      mensaje = "Sobrepeso";
    } else {
      mensaje = "Obesidad";
    }
  
    document.getElementById("resultadoIMC").textContent = `Tu IMC es: ${imc.toFixed(2)}. Clasificación: ${mensaje}`;
  }

  function clasificarTriangulo() {
    // Obtener los lados del triángulo ingresados por el usuario
    const lado1 = parseFloat(document.getElementById("lado1").value);
    const lado2 = parseFloat(document.getElementById("lado2").value);
    const lado3 = parseFloat(document.getElementById("lado3").value);
  
    // Validar que los lados sean números positivos
    if (isNaN(lado1) || lado1 <= 0 || isNaN(lado2) || lado2 <= 0 || isNaN(lado3) || lado3 <= 0) {
      alert("Por favor, ingresa valores positivos para los lados del triángulo.");
      return;
    }
  
    // Verificar si se puede formar un triángulo
    if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado2 + lado3 <= lado1) {
      alert("Los lados ingresados no forman un triángulo válido.");
      return;
    }
  
    // Clasificar el triángulo
    let tipoTriangulo;
    if (lado1 === lado2 && lado2 === lado3) {
      tipoTriangulo = "equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
      tipoTriangulo = "isósceles";
    } else {
      tipoTriangulo = "escaleno";
    }
  
    // Mostrar el resultado
    document.getElementById("resultado").textContent = `El triángulo es: ${tipoTriangulo}`;
  }

  function calcularDescuento() {
    // Obtener el monto total de la compra ingresado por el usuario
    const montoCompra = parseFloat(document.getElementById("montoCompra").value);
  
    // Validar que el monto sea un número positivo
    if (isNaN(montoCompra) || montoCompra <= 0) {
      alert("Por favor, ingresa un monto de compra válido (número positivo).");
      return;
    }
  
    // Calcular el descuento y el monto final
    let descuento = 0;
    if (montoCompra >= 1000) {
      descuento = montoCompra * 0.1; // 10% de descuento
    } else if (montoCompra >= 500) {
      descuento = montoCompra * 0.05; // 5% de descuento
    }  
    const montoFinal = montoCompra - descuento;  
    // Mostrar el resultado
    document.getElementById("resultadoCalculadoraDescuento").textContent = `El monto total a pagar con descuento es: $${montoFinal.toFixed(2)}`;
  }

  function calcularDescuentoCantidad() {
    // Obtener el precio unitario y la cantidad comprada del usuario
    const precioUnitario = parseFloat(document.getElementById("precioUnitario").value);
    const cantidadComprada = parseInt(document.getElementById("cantidadComprada").value);
  
    // Validar que los datos sean válidos
    if (isNaN(precioUnitario) || precioUnitario <= 0 || isNaN(cantidadComprada) || cantidadComprada <= 0) {
      alert("Por favor, ingresa valores positivos para el precio unitario y la cantidad comprada.");
      return;
    }
  
    // Calcular el precio total sin descuento
    const precioTotalSinDescuento = precioUnitario * cantidadComprada;
  
    // Calcular el descuento y el precio total con descuento
    let descuento = 0;
    if (cantidadComprada >= 10) {
      descuento = precioTotalSinDescuento * 0.1; // 10% de descuento
    } else if (cantidadComprada >= 5) {
      descuento = precioTotalSinDescuento * 0.05; // 5% de descuento
    }
  
    const precioTotalConDescuento = precioTotalSinDescuento - descuento;
  
    // Mostrar el resultado
    document.getElementById("resultadoCalculadoraDescuentoCantidad").textContent = `El precio total a pagar con descuento es: $${precioTotalConDescuento.toFixed(2)}`;
  }

  function generarFactura() {
    // Obtener datos del formulario
    const nombreCliente = document.getElementById("nombreClienteFactura").value;
    const producto = document.getElementById("productoFactura").value;
    const cantidad = parseInt(document.getElementById("cantidadFactura").value);   

    const precioUnitario   
= parseFloat(document.getElementById("precioUnitarioFactura").value);
    const esEstudiante = document.getElementById("esEstudianteFactura").checked;
    const tipoCliente = document.getElementById("tipoClienteFactura").value;

    // Cálculos
    const subtotal = cantidad * precioUnitario;
    const impuesto = esEstudiante ? subtotal * 0.05 : subtotal * 0.13;
    const total = subtotal + impuesto;

    // Mostrar el resultado en el párrafo
    const resultado = document.getElementById("resultadoFactura");
    resultado.innerHTML = `
      <p>Nombre del cliente: ${nombreCliente}</p>
      <p>Producto: ${producto}</p>
      <p>Cantidad: ${cantidad}</p>
      <p>Precio unitario: $${precioUnitario}</p>
      <p>Subtotal: $${subtotal}</p>
      <p>Impuesto: $${impuesto}</p>
      <p>Total a pagar: $${total}</p>
    `;
  }

  function moverAscensor() {
    const pisoDestino = parseInt(document.getElementById("piso").value);
    const pisoMaximo = 10; // Puedes cambiar este valor para ajustar el número máximo de pisos

    if (pisoDestino >= 1 && pisoDestino <= pisoMaximo) {
      // Simular el movimiento del ascensor (puedes agregar animaciones o sonidos aquí)
      console.log("Moviendo el ascensor al piso", pisoDestino);
      document.getElementById("resultadoAscensor").textContent = `¡Llegaste al piso ${pisoDestino}!`;
    } else {
      document.getElementById("resultadoAscensor").textContent = "Piso inválido. Por favor, ingrese un número de piso entre 1 y " + pisoMaximo;
    }
  }


  function moverAscensor() {
    const pesoUsuario = parseFloat(document.getElementById("pesoUsuario").value);
    const pisoDestino = parseInt(document.getElementById("pisoDestino").value);
    const pesoMaximo = 100;

    if (pesoUsuario > pesoMaximo) {
        document.getElementById("resultadoAscensorPeso").textContent = "El ascensor está sobrecargado.";
    } else if (pesoUsuario <= pesoMaximo) { // Condición correcta para mover el ascensor
        document.getElementById("resultadoAscensorPeso").textContent = `Ascensor se mueve al piso ${pisoDestino}.`;
    }
}
  
  function verificarRangoTemperatura() {
    // Obtener la temperatura ingresada por el usuario
    const temperatura = document.getElementById("temperaturaInput").value;

    // Establecer el rango de temperatura aceptable
    const temperaturaMinima = 18;
    const temperaturaMaxima = 25;

    // Verificar si la temperatura está dentro del rango
    if (temperatura >= temperaturaMinima && temperatura <= temperaturaMaxima) {
      document.getElementById("resultadoRangoTemperatura").textContent = "La temperatura está dentro del rango aceptado";

    } else {
      document.getElementById("resultadoRangoTemperatura").textContent = "La temperatura está fuera del rango aceptado";
    }
  }

  function verificarRangoTemperaturaAlerta() {
    // Obtener la temperatura ingresada por el usuario
    const temperatura = parseFloat(document.getElementById("temperaturaAlertaInput").value);

    // Establecer el umbral de alerta (ajusta este valor según tus necesidades)
    const umbralAlerta = 25;

    // Verificar si la temperatura está por encima del umbral

    if (temperatura > umbralAlerta) {
        alert("¡Alerta! La temperatura está por encima del umbral.");
    } else {
        document.getElementById("resultadoTemperaturaAlerta").textContent = "La temperatura está dentro del rango normal.";
    }
}

  function moverAscensor() {
    const pisoDestino = parseInt(document.getElementById("pisoDestinoAscensor").value);
    const temperatura = parseInt(document.getElementById("temperaturaInputAscensor").value);

    const temperaturaMinima = 18;
    const temperaturaMaxima = 25;

    if (temperatura >= temperaturaMinima && temperatura <= temperaturaMaxima) {
        // Si la temperatura está dentro del rango, mover el ascensor
        document.getElementById("resultadoAscensorTemperatura").textContent = `El ascensor se mueve al piso ${pisoDestino}.`;
    } else {
        // Si la temperatura está fuera del rango, mostrar un mensaje de error
        document.getElementById("resultadoAscensorTemperatura").textContent = "La temperatura no es adecuada. No se puede mover el ascensor.";
    }
  }

  function calcularOperadorDosNumeros()   
  {
             const num1 = parseFloat(document.getElementById("num1Operador").value);
             const operador = document.getElementById("operadorDosNumeros").value;
             const num2 = parseFloat(document.getElementById("num2Operador").value);
             let resultado;
 
             switch (operador) {
                 case '+':
                     resultado = num1 + num2;
                     break;
                 case '-':
                     resultado = num1 - num2;
                     break;
                 case '*':
                     resultado = num1 * num2;
                     break;
                 case '/' :
                     if (num2 === 0) {
                         resultado = "No se puede dividir por cero";
                     } else {
                         resultado = num1 / num2;
                     }
                     break;   
 
                 default:
                     resultado = "Operador no válido";
             }
 
             document.getElementById("resultadoOperadorDosNumeros").textContent = resultado;
         }

         function determinarCategoria() {
          const edad = parseInt(document.getElementById("edadUsuario").value);
          let categoria;

          if (edad < 13) {
              categoria = "niño";
          } else if (edad < 18) {
              categoria = "adolescente";
          } else if (edad < 60) {
              categoria = "adulto";
          } else {
              categoria = "adulto mayor";
          }

          document.getElementById("resultadoCategoria").textContent = `Usted pertenece a la categoría: ${categoria}`;
      }

      function calcularCalificacionCalculadora() {

        const calificacion = parseInt(document.getElementById("calificacionCalculadora").value);
        let calificacionLetra;

        if (calificacion >= 90) {
            calificacionLetra = "A";
        } else if (calificacion >= 80) {
            calificacionLetra = "B";
        } else if (calificacion >= 70) {
            calificacionLetra = "C";
        } else if (calificacion >= 60) {
            calificacionLetra = "D";
        } else {
            calificacionLetra = "F";
        }

        document.getElementById("resultadoCalificacionCalculadora").textContent = `Tu calificación es: ${calificacionLetra}`;
    }

    function calcularCalculadoraCompras() {
      const tipoProducto = document.getElementById("tipoProductoCalculadoraCompras").value.toUpperCase();
      const cantidad = parseInt(document.getElementById("cantidadCalculadoraCompras").value);

      if (cantidad <= 0) {
          alert("La cantidad debe ser un número positivo.");
          return;
      }

      const preciosBase = {
          A: 10, // Ajusta los precios base según sea necesario
          V: 15,
          E: 20
      };

      const precioUnitario = preciosBase[tipoProducto];

      if (!precioUnitario) {
          alert("Tipo de producto inválido.");
          return;
      }

      let costoTotal = precioUnitario * cantidad;
      let descuento = 0;

      switch (tipoProducto) {
          case "A":
              descuento = 0.1; // 10% de descuento
              break;
          case "V":
              descuento = 0.05; // 5% de descuento
              break;
      }

      costoTotal -= costoTotal * descuento;

      document.getElementById("resultadoCalculadoraCompras").textContent = `
          Costo total con descuento: $${costoTotal.toFixed(2)}
          Costo total sin descuento: $${(precioUnitario * cantidad).toFixed(2)}
      `;
  }

  function calcularIMC() {
    const peso = parseFloat(document.getElementById("pesoIMC").value);
    const altura = parseFloat(document.getElementById("alturaIMC").value);

    const imc = peso / (altura * altura);
    let categoria;

    switch (true) {
        case imc < 18.5:
            categoria = "bajo peso";
            break;
        case imc < 24.9:
            categoria = "peso normal";
            break;
        case imc < 29.9:
            categoria = "sobrepeso";
            break;
        default:
            categoria = "obesidad";
    }

    document.getElementById("resultadoCalculadoraIMC").textContent = `Tu IMC es: ${imc.toFixed(2)}. Esto indica que tienes ${categoria}.`;
}

function recomendarPelicula() {
    const edad = parseInt(document.getElementById("edadAsistenteCine").value);
    let recomendacion;

    switch (true) {
        case edad < 7:
            recomendacion = "Te recomendamos películas animadas y educativas como 'Toy Story' o 'Coco'. ¡Disfruta de la magia del cine!";
            break;
        case edad < 18:
            recomendacion = "Para ti tenemos películas familiares y aventuras como 'Harry Potter' o 'Moana'. ¡Perfecto para compartir en familia!";
            break;
        case edad < 31:
            recomendacion = "Si te gusta la acción, el drama o la ciencia ficción, te sugerimos películas como 'Avengers' o 'Interstellar'. ¡Prepárate para la emoción!";
            break;
        default:
            recomendacion = "Para ti tenemos clásicos del cine y dramas conmovedores como 'El Padrino' o 'Casablanca'. ¡Disfruta de una buena historia!";
    }

    document.getElementById("resultadoAsistenteCine").textContent = recomendacion;
}

function registrarResultado() {
  // Obtener los valores de los inputs
  // Obtener los valores de los inputs
  const equipo1 = document.getElementById('equipo1').value;
  const equipo2 = document.getElementById('equipo2').value;
  const resultado = document.getElementById('resultadoPartido').value.toUpperCase();

  // Inicializar o actualizar un objeto para almacenar la clasificación
  let clasificacion = JSON.parse(localStorage.getItem('clasificacion')) || {};

  // Asignar puntos según el resultado utilizando switch case
  switch (resultado) {
    case 'G':
      clasificacion[equipo1] = (clasificacion[equipo1] || 0) + 3;
      break;
    case 'P':
      clasificacion[equipo2] = (clasificacion[equipo2] || 0) + 3;
      break;
    case 'E':
      clasificacion[equipo1] = (clasificacion[equipo1] || 0) + 1;
      clasificacion[equipo2] = (clasificacion[equipo2] || 0) + 1;
      break;
    default:
      alert('Resultado inválido. Por favor, ingrese G, P o E.');
      return;
  }

  // Almacenar la clasificación actualizada en localStorage
  localStorage.setItem('clasificacion', JSON.stringify(clasificacion));

  // Mostrar la clasificación en el párrafo
  let resultadoClasificacion = document.getElementById('resultadoSistemaClasificacion');
  resultadoClasificacion.textContent = 'Clasificación actual:';
  for (let equipo in clasificacion) {
    resultadoClasificacion.textContent += `\n${equipo}: ${clasificacion[equipo]} puntos`;
  }
}
