let colorbuttonorange = document.getElementById("colorbuttonorange")
let colorbuttonblue = document.getElementById("colorbuttonblue")
let colorbuttongreen = document.getElementById("colorbuttongreen")
let colorbuttonpurple = document.getElementById("colorbuttonpurple")

function recolorelements() {
    let newColor = window.getComputedStyle(event.target).backgroundColor

    document.querySelector(".pcnavbar").style.borderBottomColor = newColor
    document.querySelector(".mobilenavbar").style.borderBottomColor = newColor
    document.querySelector(".animatedtext").style.color = newColor
    document.querySelector(".animatedtext").style.textShadow = `
    0 0 5px ${newColor},
    0 0 10px ${newColor},
    0 0 20px ${newColor},
    0 0 40px ${newColor},
    0 0 80px ${newColor}
    `;
    document.querySelectorAll(".apropostitleseparator").forEach((el) => {
      el.style.backgroundColor = newColor
    })
    document.querySelectorAll(".projetstitleseparator").forEach((el) => {
      el.style.backgroundColor = newColor
    })
}

colorbuttonorange.addEventListener('click',recolorelements)
colorbuttonblue.addEventListener('click',recolorelements)
colorbuttongreen.addEventListener('click',recolorelements)
colorbuttonpurple.addEventListener('click',recolorelements)