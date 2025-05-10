var micon=document.querySelector(".micon");
var nav=document.querySelector("nav")
micon.addEventListener("click",()=>{ 

  nav.classList.toggle('showMenu');
  micon.classList.toggle('fa-bars');
  micon.classList.toggle('fa-xmark');
})