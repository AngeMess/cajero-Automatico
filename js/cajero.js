function calcularRetiro() {
    const montoInput = document.getElementById('monto');
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Usted retiro: <br>`;
  
    const monto = parseInt(montoInput.value);
  
  
    const denominaciones = [100, 50, 20, 10, 5, 1];
    let cantidadBilletes = {};
  
    for (const denominacion of denominaciones) {
        const billetes = Math.floor(monto / denominacion);
        if (billetes > 0) {
            cantidadBilletes[denominacion] = billetes,
            monto % denominacion;
        }
    }
  
    for (const [denominacion, cantidad] of Object.entries(cantidadBilletes)) {
        resultadoDiv.innerHTML += `${cantidad} billetes de $${denominacion}<br>`;
    }
  }