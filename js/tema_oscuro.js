export default function darkTheme(btn,classDark){
    const $themeBtn=document.querySelector(btn),
          $selectors= document.querySelectorAll("[data-dark]");

        //   console.log($selectors);

    let moon="🌙",
        sun="☀️";

    // funciones 
    const lightMode=() => {
            $selectors.forEach(el=>el.classList.remove(classDark));
            $themeBtn.textContent=moon;
            localStorage.setItem("theme","light");
            },
            darkMode=()=> {
                $selectors.forEach(el=>el.classList.add(classDark));
                $themeBtn.textContent=sun;
                localStorage.setItem("theme","dark");
            };


    document.addEventListener("click", e=>{
        // console.log($themeBtn.textContent);
        if(e.target.matches(btn))
        {
            if($themeBtn.textContent===moon)
            {
                darkMode();
            }else if($themeBtn.textContent===sun){
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded",(e)=>{
        
        if(localStorage.getItem("theme")=== null){ localStorage.setItem("theme","light"); }
        if(localStorage.getItem("theme")==="light"){  lightMode(); }
        if(localStorage.getItem("theme")==="dark"){darkMode();}
    });
}