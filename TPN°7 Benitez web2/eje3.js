
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,
    genero: "Realismo mágico",
    disponible: true,
  
    
    mostrarInfo: function() {
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Año de Publicación: ${this.añoPublicacion}`);
      console.log(`Género: ${this.genero}`);
      console.log(`Disponible para préstamo: ${this.disponible ? "Sí" : "No"}`);
    },
  

    prestar: function() {
      if (this.disponible) {
        this.disponible = false;
        console.log(`El libro "${this.titulo}" ha sido prestado.`);
      } else {
        console.log(`El libro "${this.titulo}" no está disponible para préstamo.`);
      }
    },
  
    
    devolver: function() {
      if (!this.disponible) {
        this.disponible = true;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
      } else {
        console.log(`El libro "${this.titulo}" ya está disponible.`);
      }
    }
  };
  
  // Ejemplo de uso
  libro.mostrarInfo(); // Muestra la información completa del libro
  libro.prestar();     // Cambia el estado a 'false' y muestra un mensaje
  libro.devolver();    // Cambia el estado a 'true' y muestra un mensaje