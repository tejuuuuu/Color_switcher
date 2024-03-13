console.log("welcome to color switcher website!!!!");

let body=document.querySelector("body");

let btn=document.querySelectorAll("button");
let para=document.querySelector("p");
let container=document.querySelector(".container");

const paraColor=()=>{
    para.style.color="white";
}

const disableVis=()=>{
container.style.display="none";
}

btn.forEach((b)=>{
b.addEventListener("click",(e)=>{
    if(e.target.id==="box1"){
        body.style.background="#fc4503";

    }else if(e.target.id==="box2"){
        body.style.background="#4f4a49";
        

    }else if(e.target.id==="box3"){
        body.style.background="#c2bdbc"; 
          

    }else if(e.target.id==="box4"){
        body.style.background="black"; 
          

    }else if(e.target.id==="box5"){
        body.style.background="#e8a2a2"; 
        

    }else if(e.target.id==="box6"){
        body.style.background="#ff3399";  
     
    }
    paraColor();
    disableVis();
})
})