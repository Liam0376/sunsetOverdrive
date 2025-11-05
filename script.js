
const imagenPersonaje = document.getElementById('personaje');


const imgDefault = 'img/john.webp';
const fondoDefault = "url('img/Sunset_Overdrive_cover.jpg')";

function cambiarArma(arma) {
    

    switch (arma) {
        
        case 'tnteddy':
            imagenPersonaje.src = 'img/fondo_tnteddy.webp';
            document.body.style.backgroundImage = "url('img/Teddy_ingrdients.jpg')";
            break;
            
        case 'hairspray':
            imagenPersonaje.src = 'img/fondo_hairspray.jpeg';
            document.body.style.backgroundImage = "url('img/BOOMSunsetOverdrive.JPG')";
            break;
            
        case 'compensator':
            imagenPersonaje.src = 'img/fondo_compensator.png';
            document.body.style.backgroundImage = "url('img/compensator_fondo.jpg')";
            break;
            
        case 'overcharge':
            imagenPersonaje.src = 'img/fondo_overcharge.webp';
            document.body.style.backgroundImage = "url('img/overcharge_fondo.webp')";
            break;
    }
}


function resetear() {
    imagenPersonaje.src = imgDefault;
    document.body.style.backgroundImage = fondoDefault;
}