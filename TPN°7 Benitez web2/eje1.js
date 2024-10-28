var persona = {
    nombre: 'Javier',
    edad: 25,
    profesion: 'Desarrollador',
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
  };
  
  // Llamada al método para imprimir el saludo
  persona.saludar();