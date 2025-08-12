const techtipIcon = document.getElementById('techtipicon');
const autrestipIcon = document.getElementById('autrestipicon');
const img1 = 'url("./assets/img/mouseicon.png")';
const img2 = 'url("./assets/img/clickicon.png")';

let toggle = false;

setInterval(() => {
    techtipIcon.style.backgroundImage = toggle ? img1 : img2;
    autrestipIcon.style.backgroundImage = toggle ? img1 : img2;
    toggle = !toggle;
}, 1000);