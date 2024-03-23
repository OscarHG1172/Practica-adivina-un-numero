function adivinarNumero() {
    // Pedir al usuario que ingrese un número del 1 al 100
    let numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 100:"));

    // Validar que el número esté dentro del rango permitido
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert("Por favor ingresa un número válido del 1 al 100.");
        return;
    }

    let numeroAleatorio;
    let confirmacion;

    do {
        // Generar un número aleatorio entre 1 y 100
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;

        // Pedir al usuario que confirme si el número mostrado aleatoriamente es correcto
        confirmacion = confirm("¿Es este tu número? " + numeroAleatorio);

        // Si el usuario confirma que el número es correcto, imprimir el mensaje y salir del bucle
        if (confirmacion) {
            alert("Tu número es el " + numeroAleatorio);
            console.log("Tu número es el " + numeroAleatorio);
           
            return;
          
        }

        // Si el usuario dice que el número no es correcto, repetir el proceso
    } while (!confirmacion);
}

// Llamar a la función para iniciar el juego
adivinarNumero();
