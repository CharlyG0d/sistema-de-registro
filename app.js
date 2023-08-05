//Imprime un mensaje de bienvenida en la consola
console.log("Sistema de regristo EBAC");

// Se define un arreglo de registro con datos de alumnos
var registro = [
    //Se muestra la lista de alumnos por medio de objetos
    { nombre: "Carlos Bautista", zonaResidencia: "Guadalajara", edad: "25", nombrePrograma: "TI", email: "carlosbautistatala@gmail.com"},
    { nombre: "Ivan Torres", zonaResidencia: "Guadalajara", edad: "24", nombrePrograma: "Agronomo", email: "ivantorres@gmail.com"},
    { nombre: "Juvel Gonzalez", zonaResidencia: "Guadalajara", edad: "23", nombrePrograma: "Administracion", email: "juvelgonzalez@gmail.com"},
    { nombre: "Roberto Jimenez", zonaResidencia: "Guadalajara", edad: "25", nombrePrograma: "Abogado", email: "joseroberto@gmail.com"},
    { nombre: "Yamilet Rosas", zonaResidencia: "CDMX", edad: "23", nombrePrograma: "Quimica", email: "yamirosas@gmail.com"},
    ];

    // 1: Se agrego la funcion agregar/incluir un nuevo alumno al registro.
function agregarAlumno(){
    
    //Se solicita informacion al usuario para el registro de un nuevo alumno
    var nombre = prompt("Ingresa el nombre del nuevo alumno");
    var zonaResidencia = prompt("Ingrese la zona de residencia del alumno");
    var edad = prompt("Ingresa la edad del alumno");
    var nombrePrograma = prompt("Ingresa el programa a estudiar del alumno");
    var email = prompt("Ingresa el correo electronico del alumno");

    //Crea un objeto que se llama nuevoAlumno con los datos ingresados
    var nuevoAlumno  = {nombre:  nombre, zonaResidencia:  zonaResidencia, edad:  edad, nombrePrograma:  nombrePrograma, email:  email};
   
    //Agrega la informacion nuevoAlumno al arreglo
    registro.push(nuevoAlumno);

}
// Se agrego la funcion consultar los registros ya guardados con anteriodidad
function consultarRegistros(){

    //Este ciclo for itera sobre cada uno de los registros del arreglo
    for(var i = 0; i < registro.length; i++){

    //Esta lista de console.log permite ver al usuario el registro en la consola
    console.log("Nombre:  " + registro[i].nombre);
    console.log("Edad:  " + registro[i].edad);
    console.log("Zona de residencia:  " + registro[i].zonaResidencia);
    console.log("Nombre del programa:  " + registro[i].nombrePrograma);
    console.log("Correo electronico:  " + registro[i].email);
    };
};

//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function eliminarAlumno(){

    //Solicita al usuario el nombre del alumno a eliminar
    var nombreAeliminar = prompt ("Ingrese el nombre del alumno a eliminar");

    //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
}


//ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
do{

    //Variable que toma la eleccion del usuario para ejecutar la funcion indicada
var opcion = prompt("Seleccionar una opcion: \n1. Agregar registro. \n2. Consultar registro de alumnos. \n3 Eliminar registro \n4 Salir");

//Se declara este if para dar a elegir al usuario la opcion que quiera
if(opcion === "1"){
    agregarAlumno();
} else if (opcion === "2"){
    consultarRegistros();
} else if (opcion === "3"){
    eliminarAlumno();
} else if ("Salida"){
    alert("Salir del sistema");
}else{
    alert("Opcion invalida, Elegir otra");
}

//Esta variable nos permite elegir si hacemos otra accion o cerramos el ciclo
var continuar = prompt("¿Desea hacer otra acción?(S/N)");

//While que se encarga de cerrar el ciclo
} while(continuar === "s");

