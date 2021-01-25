const d = document;
let x=0,
      y=0;


export function shortcuts(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // RETORNAN TRUE O FALSE: 
    // console.log(e.ctrlKey);
    // console.log(e.altKey);

    if(e.key==="a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado");
    }

    if(e.key==="c" && e.altKey){
        confirm("Haz lanzado  una confirmacion con el teclado");
    }

}

export function moveBall(e,ball,stage){
    const $ball= d.querySelector(ball),
          $stage = d.querySelector(stage),
          $limitBall= $ball.getBoundingClientRect(),
          $limitStage=$stage.getBoundingClientRect();

        //   console.log($limitBall, $limitStage);

    /*
    COLISIONES- DETECTAR CUANDO DOS ELEMENTOS SE TOCAN:
        Todos los elementos del dom tienen un elemento que se llama  "getBoundingClientRect()"
        es un objeto con la altura, la anchura, la psoicion en y y en x, y tambien los margenes izquerdos derechos arriba y abajo.
        Esto lo podemos usar para limitar el movimiento de la pelota.

        El método Element.getBoundingClientRect() devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización (viewport).
    */
   
    switch(e.keyCode){
        case 37: //izq 
            if($limitBall.left>$limitStage.left){
                e.preventDefault(); 
                x--;
            }
            break;
        case 38: //arriba
            if($limitBall.top>$limitStage.top){
                e.preventDefault(); //para que se cancele la accion por defecto(mover el scroll)
                y--;
            }
            break;
        case 39: //der
            if($limitBall.right<$limitStage.right){
                e.preventDefault();
                x++;   
            }
            break;
        case 40: //abajo
            if($limitBall.bottom<$limitStage.bottom){
                e.preventDefault();
                y++;    
            }
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;

}