

let electrodomesticos=["plancha", "microondas", "lavarropas", "heladera", "televisor", "licuadora"];
console.log(electrodomesticos)

//a. Acceder de manera arbitraria a diferentes elementos del array. Recuerda
//mostrar por la consola los resultados.


console.log(electrodomesticos[0])
console.log(electrodomesticos[1])
console.log(electrodomesticos[2])
console.log(electrodomesticos[3])
console.log(electrodomesticos[4])
console.log(electrodomesticos[5])


//b. Extraer el primer elemento del array y agregarlo al final del mismo.
electrodomesticos.push(electrodomesticos.shift())
console.log(electrodomesticos)

//c. Agregar al final del array dos (2) nuevos productos.
electrodomesticos.push("ventilador","cafetera");
console.log(electrodomesticos)

//d. Mostrar por la consola la cantidad de elementos que contiene el array.
console.log("El arreglo tiene " +electrodomesticos.length ," items")

//e. Buscar un elemento del array y crear una condición responsable de
//establecer si existe o no el producto dentro del array. De existir, se le debe
//mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar el
//mensaje “El producto buscado no existe”.
let elementosaBuscar="aspiradora";
let acumBooleanEncontrado=false;
    for(let i=0; i<electrodomesticos.length;i++){
        acumBooleanEncontrado=(acumBooleanEncontrado  || (electrodomesticos[i]===elementosaBuscar));
    }
(acumBooleanEncontrado)? console.log("Producto encontrado"): console.log("El producto buscado no existe")

//f. Unificar todos los elementos del array en una cadena de texto (string),
//separando los elementos por espacios en blanco.
let unificar=electrodomesticos.join(" ");
console.log(unificar);


//g. Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log("El elemento obtenido tiene "+unificar.length ," elementos.")

//h. Cambiar el nombre de algún producto de la cadena de texto por otro,valiéndose de la función adecuada para ello.
//splice(pos, deleteCount, ...items) – desde el índice pos borra deleteCount elementos e inserta items.
//Con la cadena de texto obtenida generar un nuevo array con cada una de
//las palabras de la cadena de texto. Tener en cuenta que los elementos
//deben estar separados por una coma.
