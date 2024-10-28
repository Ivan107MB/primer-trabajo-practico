var coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    
    // Método para imprimir la información del coche
    mostrarInfo: function() {
      console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    },
    
    // Método para actualizar las propiedades del coche
    actualizarCoche: function(nuevaMarca, nuevoModelo, nuevoAño) {
      this.marca = nuevaMarca;
      this.modelo = nuevoModelo;
      this.año = nuevoAño;
    }
  };
  
  // Llamada al método para imprimir la información del coche
  coche.mostrarInfo();
  
  // Actualización de las propiedades del coche
  coche.actualizarCoche('Honda', 'Civic', 2022);
  
  // Imprimir nuevamente la información del coche después de actualizar
  coche.mostrarInfo();