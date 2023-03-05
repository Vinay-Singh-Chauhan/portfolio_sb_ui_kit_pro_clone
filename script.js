const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


let loadtheme=(color,val)=>{
    document.documentElement.style.setProperty(color,val);
}
let loadthemecolor=(e)=>{

  let v=e.value;
  // console.log(`para${e.id}`)
  str=`${e.id}`;
  str=str.charAt(0).toUpperCase() + str.slice(1);
  let div=document.getElementById(`para${e.id}`)
  div.innerHTML=`${str} ${v}`
  loadtheme(`--${e.id}`,v)
}

function randomise(){
  let r=Math.random()*255;
  let g=Math.random()*255;
  let b=Math.random()*255;
  return `rgb(${r},${g},${b})`;
}

function randomtheme(){
  colors=[
    "--primary","--secondary","--success","--warning","--danger","--info"
  ]
  colors.forEach(color => {

    document.documentElement.style.setProperty(color,randomise());
  });
    

}

let themes={
    default:"#0061f2",
    seafoam:"#06794f",
  subtle:"#506c6a",
  sunset:"#ff793f",
  flat:"#0fa28b",
}

let a=document.getElementById("default");
a.addEventListener('click',()=>{loadtheme("--primary",themes["default"])})
let b=document.getElementById("flat");
b.addEventListener('click',()=>{loadtheme("--primary",themes["flat"])})
let c=document.getElementById("sunset");
c.addEventListener('click',()=>{loadtheme("--primary",themes["sunset"])})
let d=document.getElementById("subtle");
d.addEventListener('click',()=>{loadtheme("--primary",themes["subtle"])})
let e=document.getElementById("seafoam");
e.addEventListener('click',()=>{loadtheme("--primary",themes["seafoam"])})
    
let f=document.getElementById("primary");
let g=document.getElementById("secondary");
let h=document.getElementById("success");
let i=document.getElementById("danger");
let j=document.getElementById("warning");
let k=document.getElementById("info");

f.addEventListener('input',(e)=>{
  loadthemecolor(e.target);
})
g.addEventListener("input",(e)=>{
  loadthemecolor(e.target);
})
h.addEventListener("input",(e)=>{
  loadthemecolor(e.target);
})
i.addEventListener("input",(e)=>{
  loadthemecolor(e.target);
})
j.addEventListener("input",(e)=>{
  loadthemecolor(e.target);
})
k.addEventListener("input",(e)=>{
  loadthemecolor(e.target);
})

let randomisebutton=document.getElementById("random");
randomisebutton.addEventListener("click",()=>{randomtheme()})