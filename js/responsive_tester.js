const d=document;

export default function ResponsiveTester(id){
    const $form=d.getElementById(id);
    let tester;

    d.addEventListener("submit",e=>{ 
        if(e.target===$form)
        {
            e.preventDefault();
            tester = window.open($form.direccion.value,
                    "Tester",
                    `innerWidth=${$form.ancho.value},innerHeight=${$form.largo.value};` 
                    );
        }
    });

    d.addEventListener("click",e=>{
        if(e.target===$form.cerrar)
        {
            tester.close();
        }  
    });
}