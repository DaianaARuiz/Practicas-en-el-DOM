const d=document,
      w=window,
      n=navigator;

export default function networkStatus(){
    const isOnLine =()=>{
        const $div=d.createElement("div");
        // console.log(n.onLine);
        if(n.onLine){
           $div.textContent="Conexion Reestablecida";
           $div.classList.remove("offline");
           $div.classList.add("online");
        }else{
            $div.textContent="Conexion Perdida";
            $div.classList.remove("online");
            $div.classList.add("offline");
        }

        d.body.insertAdjacentElement("afterbegin",$div);

        setTimeout(()=> d.body.removeChild($div),1000);
    };
    w.addEventListener("online",(e)=>isOnLine());
    w.addEventListener("offline",(e)=>isOnLine());
}