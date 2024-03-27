// Almacenar dentro de la variable canvas y obtener la referencia del lienzo con fabric.Canvas()


//Define el ancho y el alto inicial de los bloques con block_image_... en 30. 


//Define el inicio de las coordenadas X y Y del jugador con player_... en 10
 

// Define la variable player_object como vácía para almacenar la imagen del jugador


// Agrega una función llamada player_update() para agregar la imagen del jugador 

{
//Agregar la Biblioteca, indicar que subimos una imágen, nombre de la imágen
_____._____.fromURL(__________, function(Img) {
	player_object = Img;
    //150 de ancho para la imágen
	player_object.scaleToWidth(___);
    //140 de alto para la imágen
	player_object.scaleToHeight(___);
    //agregar palabra clave para ESTABLECER cordenadas
	player_object.___({top:player_y, left:player_x});
	canvas.add(player_object);
	});
}
// Agrega una función llamada new_image() para agregar las diferentes imágenes al presionar teclas específicas.
// Añadir lavariable get_image dentro de la función que contiene la imagen del bloquecorrespondientea lateclaque se oprime.

function __________(______)
{
    // Agregar palabra clave para poner la función que utilizamos para subir la imagen al lienzo.
	fabric.Image.fromURL(get_image, _________(____) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
    //Palabra clave para cordenadas y(arriba) y x(izquierda)
	block_image_object.set({____:player_y, ____:player_x});
    //función para AÑADIR algo al lienzo
	canvas.____(block_image_object);
	});

}
