//Efecto Sticky Navigation Bar On Scroll
window.addEventListener("scroll",function(){
       mostrarScroll();
       var sticky = document.querySelector('.sticky-menu');
       var menu = document.querySelector('.menu');
       let scrollTop = document.documentElement.scrollTop;//detecta el scroll
       sticky.classList.toggle("navbar-fixed", window.scrollY>10);

       if(scrollTop> 300){
           menu.className = "menu   blue lighten-2 z-depth-1";
       }else{
            menu.className = "menu transparent z-depth-0";
       }
});

// Core Slider Automatico de librería Materialize Css
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
        interval: 3000
    });
  });

       

//   Función del efecto al hacer scroll, se apoya  del listener previo para esconder o aparecer el menu
let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop =document.documentElement.scrollTop;// Cantidad de scroll que se realiza mientras uno baja
    for(var i=0; i<animado.length; i++){
        let alturaAnimado=animado[i].offsetTop;
            if(alturaAnimado - 400 <scrollTop){ //Se le genera una resta para que se aplique la transición
                animado[i].style.opacity=1; //Se agrega el cambio de opacidad 
                animado[i].classList.add("mostrarArriba"); //Se agrega la clase de la animación
            }
     
    }
}




// window.addEventListener('scroll',mostrarScroll);  //Se agrega el listener cuando se realice el scroll se genera la función mostrarScroll