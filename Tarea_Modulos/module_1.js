export const alumno = {
    nombre: 'Andres',
    apellido: 'Vasquez',
    edad: 29,
    contacto:{
        direccion: 'calle 20',
        telefono: 321583,
        ciudad: 'Medellin',
        correo: 'joranvm93@gmail.com'
    },
    
    mostrarNombreAlumno: function(){
        return console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}`)
    },

    mostrarContacto: function(){
        return `Direccion: ${this.contacto.direccion}, Telefono: ${this.contacto.telefono}, Correo: ${this.contacto.correo}`
    }
}


export class Vehiculo {
    constructor(modelo, marca, color, anio){
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.anio = anio;
    }
}

export class Moto extends Vehiculo{
    constructor(marca, modelo, color, anio, cilindraje){
        super(modelo, marca, color, anio)
        this.cilindraje = cilindraje;
    }

    mostrarMoto(){
        return `Datos de la moto: Marca:${this.marca}, Modelo:${this.modelo}, Color: ${this.color}, Año: ${this.anio}, Cilindraje: ${this.cilindraje}`
    }
};