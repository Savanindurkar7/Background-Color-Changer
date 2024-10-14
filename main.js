let hex = document.querySelector(".hex")
let body = document.querySelector("body");
let button = document.querySelector(".btn");

function ChangeBG() {
  let color = '#';
  let latters = '01234567890ABCDEF';
  for (var i = 0; i < 6; i++) {
    color += latters.charAt(Math.floor(Math.random()*16));
    
    body.style.backgroundColor = color
    hex.innerText = color
    
    // Tab to edit
  }
  return color
}

ChangeBG()

button.addEventListener("click",()=>{
  ChangeBG()
})