 "use script"

// let section = document.querySelector(".container");
// let parag = document.querySelectorAll(".status .spn");
// // let parag = document.querySelector(".spn");
// let start = false;

// window.onscroll = function(){
//   if(window.scrollY >= section.offFunc){
//    if(start){
//     parag.forEach((parag) => startCount(parag));
//    } 
//    start=true;
//   }
// }


// function startCount(el){
//   let max = el.dataSet.max;
//   let count = setInterval(() =>{
//     el.textContent++;
//     if(el.textContent == max){
//      clearInterval(count) 
//     }
//   }, 2000 / parag);  
// }

// ${`.counter`}.containerUp({
//   delay: 10,
//   time:1000
// });





const counter = document.querySelectorAll(".spn");

counter.forEach((counter)=>{
  counter.innerText = '0';


const updateCounter = ()=>{
  const max = +counter.getAttribute("data-max");
 const c = + counter.innerText;

 const incresent = max /250;
  
 if (c < max){
  counter.innerText = `${Math.ceil(c + incresent)}`
 setTimeout(updateCounter , 1)
} else{
  counter.innerText = max;
}
};
updateCounter()
});