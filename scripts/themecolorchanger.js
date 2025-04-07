let colorbuttonorange = document.getElementById("colorbuttonorange")
let colorbuttonblue = document.getElementById("colorbuttonblue")
let colorbuttongreen = document.getElementById("colorbuttongreen")
let colorbuttonpurple = document.getElementById("colorbuttonpurple")

function recolorelements() {
    let newColor = window.getComputedStyle(event.target).backgroundColor
    let targetColor = window.getComputedStyle(document.getElementById("animatedtext")).color
    const allElements = document.querySelectorAll('*');
  
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
    });
}

colorbuttonorange.addEventListener('click',recolorelements)
colorbuttonblue.addEventListener('click',recolorelements)
colorbuttongreen.addEventListener('click',recolorelements)
colorbuttonpurple.addEventListener('click',recolorelements)