
let count=0;
let countnumber= document.querySelector(`#countnumber`);
window.addEventListener("DOMContentLoaded", () => {

let tl = gsap.timeline();


tl.from(`.loaderline h1`,{

    y:150,
    duration: 0.6,
    
    stagger:0.2,
    



})

tl.from(`#downtext`, {

   opacity: 0,
   duration: 0.5,

})

tl.to( `#loader`,{
    
    opacity:0,
    duration:0.2,
    delay:3,
    oncomplete: function(){

      let loader= document.querySelector(`#loader`).classList.add(`hidden`);
      let main= document.querySelector(`#main`).classList.remove(`hidden`);



    }
   
    

})

tl.from(`#page1`,{
  y:1600,
  duration: 0.8,
  delay: 0.2,
  
  
})

let interval = setInterval(function(){
  if( count <= 100){
    countnumber.textContent = count++;
  } else{
    countnumber.textContent =100;
    clearInterval(interval);

  }
    

 },35)











});
// loader done
