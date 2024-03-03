// Responsive Navbar and Header on Scroll

window.addEventListener('scroll',function(){
    var header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
 });
 
 function toggleMenu(){
  const toggleMenu = document.querySelector('.toggleMenu');
  const nav= document.querySelector('.nav');
  toggleMenu.classList.toggle('active')
  nav.classList.toggle('active')
 }

// Scroll Animations

 window.addEventListener('scroll', function(){
  var anime = document.querySelectorAll('.animeX');
  for(var s =0; anime.length; s++){
     var windowheight= window.innerHeight;
     var animetop = anime[s].getBoundingClientRect().top;
     var animepoint = 150;

     if(animetop < windowheight - animepoint){
        anime[s].classList.add('active');
     }
     else{
        anime[s].classList.remove('active');
     }
  }
 })

// Filtering Products

 let list = document.querySelectorAll('.product-list');
 let card = document.querySelectorAll('.card'); 

 for(let i=0; i <list.length; i++){
     list[i].addEventListener('click', function(){
         for(let j=0; j<list.length; j++){
             list[j].classList.remove('active')
         }
         this.classList.add('active');

         let dataFilter = this.getAttribute('data-filter');

         for(let k=0; k<card.length; k++){
             card[k].classList.remove('active');
             card[k].classList.add('hide');

             if(card[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                 card[k].classList.remove('hide');
                 card[k].classList.add('active');
             }
         }
     })
 }