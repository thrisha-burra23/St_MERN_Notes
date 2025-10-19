const div=document.getElementById("d");
const clickBtn=document.getElementById("clickBtn");

console.log("click");

clickBtn.addEventListener("click",()=>{
    console.log("click");
    let p=document.createElement("p");
    p.textContent="Thrisha";
    div.appendChild(p);

    clickBtn.textContent="Clicked"
    clickBtn.disabled=true;
})