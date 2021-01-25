const d= document;
export function digitalClock(clock,btnPlay, btnStop){
    let clocktime;

    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay))
        {
            clocktime= setInterval(()=>{
                let clockHour=new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML= `<h3> ${clockHour} </h3>` ;
            },1000);

            e.target.disabled=true; //que el boton aparazca como deshabilitado
        }

        if(e.target.matches(btnStop))
        {
            clearInterval(clocktime);
            d.querySelector(clock).innerHTML= null ;
            d.querySelector(btnPlay).disabled=false;
        }
    });
}

export function alarm(sound,btnPlay,btnStop){
    let alarmTempo;
    const $alarm = d.createElement("audio");

    $alarm.src=sound;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay))
        {
            alarmTempo = setTimeout( ()=>{
                $alarm.play(); 
            },2000);

            e.target.disabled=true;
        }

        if(e.target.matches(btnStop))
        {
            clearTimeout(alarmTempo);

            // Para deterner el sonido usamos los metodos que nos da LA API DE AUDIO
            $alarm.pause(); //PAUSA EL SONIDO
            $alarm.currentTime = 0; //PARA RESETEAR, REGRESAR AL INICIO
            d.querySelector(btnPlay).disabled=false;
        }
    })
}