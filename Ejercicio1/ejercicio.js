/*Realice un programa en Javascript donde el usuario
tenga que ingresar 35 legajos, el cual se pedira el nombre
el apellido, la edad y el sexo. Una vez finalizado el ingreso
devolverá:
1-El promedio etario de la población ingresada(promedio de edad)
2-Cantidad de mujeres menores de 30 años.
3-Cantidad de usuarios con el nombre ’Juan’*/

let nombre=0;
let apellido=0;
let edad=0;
let contE=0;
let numE=0;
let contF=0;
let contN=0;
for(let i=0; i<35; i++){
    nombre=prompt("Ingresar nombre:").toUpperCase();
    apellido=prompt("Ingresar apellido:");
    edad=parseInt(prompt("Edad:"));
    sexo=prompt("Sexo F/M:").toUpperCase();
    contE++;
    numE=numE+edad;
    if(sexo=="F" && edad<30){
    contF++;
    }
    if(nombre=="JUAN"){
    contN++;
    }
}
alert("La edad promedio es de "+ numE/contE);
alert("La cantidad de mujeres menores de 30 es de "+ contF);
alert("La cantidad de usuarios que se llaman JUAN son de " + contN + " usuarios");

