const d=document;

export default function draw(btn,selector){
    // const $btn=d.getElementById(btn);
    const getWinner=(selector)=>{
        const $players= d.querySelectorAll(selector),
            random= Math.floor(Math.random()*$players.length),
            winner=$players[random];
        return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            let result=getWinner(selector);
            alert(result);
        }  
    });
} 
/*La funcion puede ser reutilizada en redes para obtener un comentario ganador
lo unico que hay que hacer es copiarla en el inspector y agregarle un selector valido
*/
