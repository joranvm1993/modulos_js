import { alumno, Moto } from './module_1'

const funcion = ()=>{

    let moto = new Moto('Ducati', 'Multistrada v4', 'rojo', 2023, 1158);

    return `La moto de marca ${moto.marca} y modelo ${moto.modelo} de color ${moto.color} es del alumo de nombre${alumno.nombre} y apellido ${alumno.apellido}`

}

funcion();