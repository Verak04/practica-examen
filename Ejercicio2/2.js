/*Realice un programa en Javascript donde el usuario
tenga que ingresar 90 legajos, el cual se pedirà
como dato el numero de legajo, el nombre, el apellido y el
sueldo percibido.Una vez finalizado el ingreso
devolverá:
1-Todos los datos de la persona con menor sueldo.
2-Cantidad de empleados con sueldo mayor a $ 29000.
3-Promedio del sueldo en la empresa*/

let legajo, nomb, apell;
let sueldo=0;
let suelM=parseInt(29000);
let contS=0, contP=0, sumaS=0;
let sueldoM=parseInt(1000000)
let legajoM, nombM, apellM;

for(let i=0; i<90; i++){
    legajo=prompt("Ingresar nº de legajo:");
    nomb=prompt("Ingresar nombre:");
    apell=prompt("Ingresar apellido:");
    sueldo=parseInt(prompt("Sueldo:"));
    if(sueldo<sueldoM){
      sueldoM=sueldo;
      legajoM=legajo;
      nombM=nomb;
      apellM=apell;  
    }
    if(sueldo>suelM){
        contS++;
    }
    contP++;
    sumaS=sumaS+sueldo;
}
alert("El que percive el menor sueldo es: legajo nº "+ legajoM+ " Nombre: "+nombM+" Apellido: "+apellM+ " Sueldo: "+sueldoM);
alert("La cantidad de empleados que ganan mas de $29000 son de "+contS);
alert("El promedio de los sueldos es de $"+sumaS/contP);
