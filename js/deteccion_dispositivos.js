const d=document,
      n=navigator,
      ua=n.userAgent;

export default function userDeviceInfo(id){
    const $id= d.getElementById(id),
          isMobile={
            //  propiedades
            android:()=>ua.match(/android/i), //la i para que no tenga en cuenta mayus y minus 
            ios:()=>ua.match(/iphone|ipad|ipod/i),
            windows:()=> ua.match(/windows phone/i),
            // metodo para usar cuando no me importa el dispositivo en especifico, sino unicamente que sea mobile
            any:function(){
                return this.android()||this.ios()||this.windows();
            }
          },

          isDesktop={
              linux:()=>ua.match(/linux/i),
              mac:()=>ua.match(/mac os/i),
              window:()=>ua.match(/window nt/i),
              any:function(){
                return this.linux()||this.mac()||this.window();
            }
          },

          isBrowser={
            chrome:()=>ua.match(/chrome/i),
            safari:()=>ua.match(/safari/i),
            opera:()=>ua.match(/opera|opera mini/i),
            firefox:()=>ua.match(/firefox/i),
            ie:()=>ua.match(/msie|iemobile/i),
            edge:()=>ua.match(/edge/i),
           
            any:function(){
              return(
                this.chrome()||
                this.safari()||
                this.opera()||
                this.firefox()||
                this.ie()||
                this.edge()
              );
              
            }
          }; 

    // console.log(ua);
    // console.log(isMovile.android()); //si la encuentra devuelve arreglo y sino null
    // console.log(isMovile.ios());
    // console.log(isMovile.any()); //metodo para usar cuando no me importa el dispositivo en especifico, sino unicamente que sea mobile

    $id.innerHTML=`
          <ul>
            <li>User Agent: <b>${ua}</b></li></br>
            <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li></br>
            <li>Navegador:<b>${isBrowser.any()}</b></li></br>
          </ul>
        `

        // contenido exclusivo

        if(isBrowser.chrome()){
            $id.innerHTML+=`<p><mark>Este contenido solo se ve en Chrome</mark><p>`
        }

        // Reedirecciones
        // if(isMobile.android())
        // {
        //     window.location.href="https://www.koyaweb.com.ar";
        // }
};