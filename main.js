addEventListener("DOMContentLoaded", (e) => {

    let form = document.querySelector('#form');
    let sum = 0;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let dato = parseInt(document.querySelector('#dato').value);

        if (dato > 0) {
            sum += dato;
        }
        else {
            alert('Dale al botón de "Aceptar" 🡖');
            document.querySelector('#resultado').insertAdjacentHTML("beforeend", sum);
        }
        form.reset();
    })

})