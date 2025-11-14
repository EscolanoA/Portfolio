function switchTextWithDelay(delay) {
        let texts = ["WELCOME ( 0_0)", "WELCOME ( ^_^)", "WELCOME ( ^_^) /", "WELCOME ( ^_^) |", "WELCOME ( ^_^) /", "WELCOME ( ^_^)", "WELCOME ( 0_0)"];
        let pcTextContainer = document.getElementById("pcEmoji")
        let mobileTextContainer = document.getElementById("mobileEmoji")

        pcTextContainer.innerHTML = "WELCOME ( 0_0)"
        mobileTextContainer.innerHTML = "WELCOME ( 0_0)"

        let index = 0;

        setInterval(() => {
            pcTextContainer.textContent = texts[index]
            mobileTextContainer.textContent = texts[index]
            index = (index + 1) % texts.length;
        }, delay);
    }
    /*let texts = ["BIENVENUE ( 0_0)", "BIENVENUE ( ^_^)", "BIENVENUE ( ^_^) /", "BIENVENUE ( ^_^) |", "BIENVENUE ( ^_^) /", "BIENVENUE ( ^_^)", "BIENVENUE ( 0_0)"];
    let pcTextContainer = document.getElementById("pcEmoji")
    let mobileTextContainer = document.getElementById("mobileEmoji")

    pcTextContainer.innerHTML = "BIENVENUE ( 0_0)"
    mobileTextContainer.innerHTML = "BIENVENUE ( 0_0)"

    let index = 0;

    setInterval(() => {
        pcTextContainer.textContent = texts[index]
        mobileTextContainer.textContent = texts[index]
        index = (index + 1) % texts.length;
    }, delay);*/

switchTextWithDelay(500);

let pcnavbar = document.getElementById("pcnavbar")
let mobilenavbar = document.getElementById("mobilenavbar")

window.addEventListener('scroll',() => {
    if (window.scrollY > 0) {
        pcnavbar.classList.add('scrolled')
        mobilenavbar.classList.add('scrolled')
    } else {
        pcnavbar.classList.remove('scrolled')
        mobilenavbar.classList.remove('scrolled')
    }
})

let menubutton = document.getElementById("menubutton")
let extendframe = document.getElementById("extendframe")
let extendframetop = document.getElementById("top")
let extendframecenter = document.getElementById("center")
let extendframebottom = document.getElementById("bottom")
menubutton.addEventListener('click', () => {
    if(mobilenavbar.classList.contains('extended')) {
        //On closing
        mobilenavbar.classList.remove('extended')

        menubutton.classList.remove("spinOpen")
        menubutton.classList.add("spinClose")

        menubutton.classList.add("open")
        menubutton.classList.remove("close")

        extendframe.classList.remove("extended")

        extendframecenter.classList.remove("show")
        extendframebottom.classList.remove("show")

        extendframetop.style.display ="none"
        extendframecenter.style.display ="none"
        extendframebottom.style.display ="none"
    } else {
        //On opening
        mobilenavbar.classList.add('extended')

        menubutton.classList.remove("spinClose")
        menubutton.classList.add("spinOpen")

        menubutton.classList.remove("open")
        menubutton.classList.add("close")

        extendframe.classList.add("extended")

        extendframetop.style.display ="unset"
        extendframecenter.style.display =""
        extendframecenter.classList.add("show")
        extendframebottom.style.display =""
        extendframebottom.classList.add("show")
    }
})

document.querySelectorAll('.mobilealink').forEach(el => {
    el.addEventListener('click', event => {
        mobilenavbar.classList.remove('extended')

        menubutton.classList.remove("spinOpen")
        menubutton.classList.add("spinClose")

        menubutton.classList.add("open")
        menubutton.classList.remove("close")

        extendframe.classList.remove("extended")

        extendframecenter.classList.remove("show")
        extendframebottom.classList.remove("show")

        extendframetop.style.display ="none"
        extendframecenter.style.display ="none"
        extendframebottom.style.display ="none"
    })
  })
