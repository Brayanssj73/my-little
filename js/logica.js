function redirigir(){
    //obten el elemento select
    var seleccionar = document.getElementById("Musica");

    //obtener el valor seleccionado
    var selectvalue = seleccionar.value;

    //update the form action
    window.location.href = selectvalue;
}