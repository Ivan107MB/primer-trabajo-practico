// Definición del objeto 'empleado'
let empleado = {
    nombre: "Ana Pérez",
    edad: 35,
    puesto: "Desarrolladora de software",
    salario: 50000,
  
    // Método para mostrar la información del empleado
    mostrarInfo: function() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Puesto: ${this.puesto}`);
      console.log(`Salario: $${this.salario}`);
    },
  
    // Método para aumentar el salario del empleado
    aumentarSalario: function(porcentaje) {
      let aumento = this.salario * (porcentaje / 100);
      this.salario += aumento;
      console.log(`El salario ha sido aumentado en un ${porcentaje}%. El nuevo salario es: $${this.salario}`);
    }
  };
  
  // Ejemplo de uso
  empleado.mostrarInfo();             // Muestra la información completa del empleado
  empleado.aumentarSalario(10);       // Aumenta el salario en un 10% y muestra el nuevo salario
  

  
