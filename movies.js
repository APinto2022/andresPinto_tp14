//2. Crear una estructura para almacenar un conjunto de películas,
let peliculas=["Turno de día","30 noches con mi ex", "Bestia", "El monte", "Top gun maverick","Elvis","Thor: amor y trueno"];


/*
Extra el tech leader, te solicita que crees una función, la cual recibirá por parámetro la película indicada 
y deberá retornar la misma pero en mayúscula.
*/
function pasarAMayusculas(pelicula){
    return pelicula.toUpperCase();
}

/*el tech leader, te solicita que crees
una función, la cual recibirá por parámetro la película indicada y deberá retornar la
misma pero en mayúscula
*/
function moverAlInicio(catalogo, pelicula) {

    const index = catalogo.indexOf(pelicula);
    // Si el elemento existe en el arreglo
    if (index !== -1) {
         // cambia la pelicula del arreglo
         let variableAuxiliar=catalogo[index];
         catalogo.splice(index, 1);
         //pasarAMayusculas(variableAuxiliar)
        catalogo.unshift(variableAuxiliar.toUpperCase());
        return catalogo;
    }

    return catalogo;
}

/*
console.log(peliculas);
moverAlInicio(peliculas,peliculas[6]);
console.log(peliculas);

4. Una vez terminada la actividad, nos indican que debemos crear una cadena de
texto para las siguientes películas próximas a estrenar:
Nos piden crear una estructura parecida a la trabajada en el punto 2, teniendo en
cuenta que cada elemento debe estar separado por una coma.
*/
let proximosEstrenos=[ "Counter-Strike","NOP","Vértigo","Nick", "Avatar"];


/*
Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
ambas estructuras creadas y debe devolver un nueva nueva estructura con todas
las películas,
*/
function fusionarCatalogos(catalogo1, catalogo2){
    return catalogo1.concat(catalogo2);
}



/*
pruebo fusionar ambos catalogos 
console.log(fusionarCatalogos(proximosEstrenos,peliculas));
*/

