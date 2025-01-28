// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = []

function agregarAmigo() {
    const amigoAgregar = document.getElementById("amigo")
    const listaDeAmigos = document.getElementById("listaAmigos")
    const nombre = amigoAgregar.value.trim()

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.")
        return
    }

    //Opcional ya que puede tener dos amigos con el mismo nombre
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        amigoAgregar.value = "";
        return;
    }

    amigos.push(nombre)

    const li = document.createElement("li")
    li.textContent = nombre
    li.className = "name-item" 
    listaDeAmigos.appendChild(li)

    // Limpiar el campo de entrada
    amigoAgregar.value = ""
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    const resultado = document.getElementById("resultado")

    // Limpiar la lista de resultados anterior
    resultado.innerHTML = ""

    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.")
        return
    }

    // Seleccionar un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length)
    const amigoSorteado = amigos[indiceAleatorio]

    // Mostrar el resultado
    const li = document.createElement("li")
    li.textContent = `¡El amigo secreto es: ${amigoSorteado}!`
    li.className = "result-item"
    resultado.appendChild(li)
}

