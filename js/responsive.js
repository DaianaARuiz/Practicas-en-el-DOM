const d= document,
      w=window;

export default function ResponsiveMedia(id,mq,mobileContent,deskoptContent){
    let breakpoint= w.matchMedia(mq);

    const resposive =(e)=>{
        if(e.matches)
        {
            d.getElementById(id).innerHTML=deskoptContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }
    }
    
    breakpoint.addEventListener("change",(e)=>{
        resposive(e);
    });

    resposive(breakpoint);
}