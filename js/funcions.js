function confirmaRegistre() {
    // 2. Mostrar una alerta
    alert("Registrant estudiant");

    // 3. Mostrar un missatge a la consola
    console.log("Registrant estudiant");

    // 4. Modificar el contingut del div per mostrar el paràgraf
    const div = document.getElementById("formulari");  // Assegura't que el formulari està dins un div amb id="formulari"
    div.innerHTML = '<p class="important">T’has registrat amb èxit</p>';

    // 6. Retornar false per evitar la recàrrega de la pàgina
    return false;s
}
