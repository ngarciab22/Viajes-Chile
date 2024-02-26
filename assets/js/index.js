const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]') /*Función Tooltips*/
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(document).ready(function(){
    $(".nav-link").on('click', function(event) { /*Efecto smooth scroll*/
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 'normal', function(){
                window.location.hash = hash;
            });}
    });
    $("#enviarcorreo").click(function(){ /*Función alert*/
        alert("¡Muchas gracias! Hemos recibido tu correo.")
    })
});

