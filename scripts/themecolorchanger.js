let colorbuttonorange = document.getElementById("colorbuttonorange")
let colorbuttonblue = document.getElementById("colorbuttonblue")
let colorbuttongreen = document.getElementById("colorbuttongreen")
let colorbuttonpurple = document.getElementById("colorbuttonpurple")

function recolorelements() {
    let newColor = window.getComputedStyle(event.target).backgroundColor
    let targetColor = window.getComputedStyle(document.getElementById("animatedtext")).color
    const allElements = document.querySelectorAll('*');
  
    let newColorRgb = newColor.match(/\d+/g).join(', ');
  
    const flashlight = document.querySelector('.flashlight');
    
    if (flashlight) {
      flashlight.style.background = `radial-gradient(
        circle closest-side, 
        rgba(${newColorRgb}, 0.1) 0%,
        rgba(${newColorRgb}, 0.05) 60%,
        rgba(0, 0, 0, 0.6) 100%
      )`;
    }
  
    allElements.forEach(el => {
      const styles = window.getComputedStyle(el);
      const textShadow = styles.textShadow;
  
      if (textShadow.includes(targetColor)) {
        const newShadow = textShadow.replaceAll(targetColor, newColor);
        el.style.textShadow = newShadow;
      }
  
      if (styles.color === targetColor) {
        el.style.color = newColor;
      }

      if (styles.borderBottomColor === targetColor) {
        el.style.borderBottomColor = newColor;
      }
    });
}

colorbuttonorange.addEventListener('click',recolorelements)
colorbuttonblue.addEventListener('click',recolorelements)
colorbuttongreen.addEventListener('click',recolorelements)
colorbuttonpurple.addEventListener('click',recolorelements)