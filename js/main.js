import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js";
import {shortcuts,moveBall} from "./teclado.js";
import countDown from "./cuentaregresiva.js";
import scrollTopButton from "./btn_scroll.js";
import darkTheme from "./tema_oscuro.js";
import ResponsiveMedia from "./responsive.js";
import ResponsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_Red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFiler from "./filtro_busquedas.js";
import draw from "./sorteo.js";

const d=document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarm-clock.mp3", "#activar-alarma","#desactivar-alarma");
    countDown("countdown","Dec 14,2021 12:00:00","🎊🎊Feliz cumple Daiana🎊🎊");
    scrollTopButton(".scroll-to-btn");
    ResponsiveMedia(
        "youtube",
        "(min-width:1024px)",
        `<a href="https://www.youtube.com/embed/oolpPmuK2I8  target="__blank">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/oolpPmuK2I8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );

    ResponsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        `<a href="https://goo.gl/maps/5ch1QNyYig48hk4q9 target="__blank" >Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.698335649788!2d-0.1833791!3d51.5370926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a9f655050a7%3A0xad68731942cabda1!2sAbbey%20Rd%2C%20London%2C%20Reino%20Unido!5e0!3m2!1ses!2sar!4v1610051738200!5m2!1ses!2sar" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
    );

    ResponsiveTester("responsive-tester");

    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFiler(".card-filter",".card");
    draw("#winner-btn",".player");
});

d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();