function switchTextWithDelay(delay) {
    const texts = ["BIENVENUE ( 0_0)", "BIENVENUE ( ^_^)", "BIENVENUE ( ^_^) /", "BIENVENUE ( ^_^) |", "BIENVENUE ( ^_^) /", "BIENVENUE ( ^_^)", "BIENVENUE ( 0_0)"];
    const textContainer = document.getElementById("emoji")

    textContainer.innerHTML = "BIENVENUE ( 0_0)"

    let index = 0;

    setInterval(() => {
        textContainer.textContent = texts[index];
        index = (index + 1) % texts.length;
    }, delay);
}

switchTextWithDelay(500);

let pcnavbar = document.getElementById("pcnavbar")

window.addEventListener('scroll',() => {
    if (window.scrollY > 0) {
        pcnavbar.classList.add('scrolled')
    } else {
        pcnavbar.classList.remove('scrolled')
    }
})