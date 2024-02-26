# Prueba Viajes Chile
## Recursos utilizados
+ HTML 5
+ CSS
+ JS
+ Bootstrap v5.3
+ jQuery 3.x
+ Font Awesome
+ Google Fonts

## Estructura

La estructura base de la página se divide en:
+ `head`
+ `body`:
    + `header`: La etiqueta incluye la barra de navegación (**nav**) y un carrusel de imágenes.
    + `main`: 
        + `section id: "presentacion"`: Corresponde al "¿Quiénes somos?" del main. Contiene 3 íconos y 3 párrafos.
        + `section id: "destacados"`: Corresponde a una galería de 4 cards con imágenes y texto.
        + `section id: "formulario"`: Corresponde al formulario de contacto del main, y contiene un botón de enviar.
    + `footer`: La etiqueta incluye un **h2** que desaparece en cualquier formato distinto a lg y 4 íconos de redes sociales con sus correspondientes links asociados. 

## Tipografía/Íconos/Colores

La **tipografía** corresponde a la ***Raleway***, extraída desde Google Fonts mediante el import: `@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');`

Los **íconos** fueron extraídos desde Font Awesome y corresponden a los siguientes:
+ `section id: "presentacion"`: 
    + fa-solid fa-plane 
    + fa-solid fa-mountain
    + fa-solid fa-route
+ `footer`: 
    + fa-brands fa-github
    + fa-brands fa-linkedin-in
    + fa-brands fa-twitter
    + fa-brands fa-facebook-f

Los **colores** utilizados fueron ***text-info*** o ***bg-info***, aplicado como clase de Bootstrap para texto o background, respectivamente. También se utilizó blanco (***#ffffff***) y negro (***#000000***).

## Componentes de Bootstrap

+ **Navbar**: La barra de navegación con botón de hamburguesa se extrajo desde Bootstrap. Fue modificada para que quedará similar a la maqueta y se vincularon los nav-items a secciones del main, posteriormente se añadió el efecto **smooth scroll**.
+ **Card**: Se extrajo el código de una card desde Bootstrap, que se reprodujo 4 veces en la `section id: "destacados"`
+ **Form**: El formulario de contacto fue extraído desde Bootstrap, se modificó y se añadió un **button** de enviar.

## Componentes Bootstrap + JS

+ **Carrusel**: Se implementó un carrusel en el header de la página, que consta de 3 imágenes y botones de movimiento.
+ **Tooltips**: Se implementaron tooltips a los íconos de redes sociales ubicados en el footer.
+ **Alert**: Se implementó un alert que se activa al presionar el botón enviar de la `section id: "formulario"`.
