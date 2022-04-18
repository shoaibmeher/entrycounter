function increment() {
    alert("The button was clicked")
    
}
let cont=0
let counts=document.getElementById("count-el")
function count() {
 cont += 1 
    
    counts.innerText=cont
}
let saveel= document.getElementById("save-el")
function save() {
   saveel.textContent += cont +" - "
   counts.innerText= "0"
   cont=0
}
