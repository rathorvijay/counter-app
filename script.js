// const countervalue=document.getElementById(counter);
// const increment=()=>{
// let value = parseInt(countervalue.innerText);
// value=value+1;
// counter.innerHTML=value;
// }
// const decrement=()=>{
//     let value = parseInt(countervalue.innerText);
//     value=value-1;
//     counter.innerHTML=value;
// }

// var data = 0;

// //printing default value of data that is 0 in h2 tag
// let value=document.getElementById("counter");
// value.innerHTML=data;
  
// //creation of increment function
// function increment() {
//     console.log(data);
//     data = data + 1;
//     value.innerHTML= data;
// }
// //creation of decrement function
// function decrement() {
//     console.log(data);
//     data = data - 1;
//     value.innerHTML=data;
// }
 
let counter=document.querySelector("#counter");
let dec=document.querySelector("#dec");
let inc=document.querySelector("#inc");
let allert=document.querySelector(".allert");
let value=0;
counter.innerHTML=value;
dec.addEventListener("click",(number)=>{
    if(value>0)
    {
    value=value-1;
    counter.innerHTML=value;
    }
    else
    {
        allert.innerHTML="value is less than zero";  
        setTimeout(function(){
          allert.innerHTML=" ";  
        },2000)
    }
})
inc.addEventListener("click",(number)=>{
    value=value+1;
    counter.innerHTML=value;
})