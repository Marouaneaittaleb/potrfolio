let iconHamb = document.querySelector(".hamborgere");

iconHamb.addEventListener('click',(eo)=>{
   iconHamb.classList.toggle("sho-nav")
    
})

window.addEventListener("resize",()=>{
  if (window.innerWidth > 768) {
    iconHamb.classList.remove("sho-nav")
   
  }
   
})

