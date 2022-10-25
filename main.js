addEventListener("DOMContentLoaded", (e) => {

    let form = document.querySelector('#form');
    let res = document.querySelector("#resultado");
    let sum = 0, desc;
    let info = document.querySelector("#info");

    document.querySelector("#dato").readOnly = false;
    document.querySelector("#boton").disabled = false;

    let habilitar = () => {
        info.style.display = "inline-block";
        document.querySelector("#dato").readOnly = true;
        document.querySelector("#boton").disabled = true;
    }
    let descuento = () => {
        if (sum > 10000) {
            desc = sum - (sum * 0.10);
            res.insertAdjacentHTML("beforeend", `<h3> 10% de descuento, Total a pagar: $${desc}<h3/>`);
        }
        else {
            res.insertAdjacentHTML("beforeend", `<h3>Total a pagar: $${sum}<h3/>`);
        }

    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let precio = parseInt(document.querySelector("#dato").value);
        form.reset();

        if (precio > 0) {
            sum += precio;
        }
        else {
            alert('Dale al botón de "Aceptar" 🡖');
            habilitar();
            descuento();
        }
    })

})