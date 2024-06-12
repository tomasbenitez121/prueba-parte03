const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    ride: true,
    interval: 1000,
    pause: false
})


const miVentenaEmergente = document.getElementById('ventanaEmergente')


miVentenaEmergente.addEventListener('show.bs.modal', function(event){
    console.log('se esta abriendo el modal');

    let boton = event.relatedTarget

    let mensaje = boton.getAttribute('data-titulo')

    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerHTML = contenido

})

miVentenaEmergente.addEventListener('shown.bs.modal', function(){
    console.log('se esta abierto el modal');
})

miVentenaEmergente.addEventListener('hide.bs.modal', function(){
    console.log('se esta cerrando el modal');
})

miVentenaEmergente.addEventListener('hidden.bs.modal', function(){
    console.log('esta cerrado el modal');
})