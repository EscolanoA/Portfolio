let animatedtext = document.getElementById("animatedtext");

const words = [
  "un ninja du JavaScript.",
  "un pro du CSS.",
  "un grand fan de PHP...!",
  "un athlete de compétition.",
  "un maniaque du C#.",
  "un musicien auto-didacte.",
  "un developpeur back-end.",
  "un developpeur front-end.",
  "un developpeur fullstack."
];

const engwords = [
  "a javascript ninja.",
  "a CSS pro !",
  "a big PHP fan...!",
  "a professional athlete.",
  "a C# maniac.",
  "a self-taught musician.",
  "a back-end developper.",
  "a front end developper.",
  "a fullstack developper."
];

function writedeleteRandomWord(wordList, speed) {
    const word = wordList[Math.floor(Math.random() * wordList.length)];
    let i = 0;
    let writing = true;

    function typeLoop() {
        if (writing) {
            if (i <= word.length) {
                animatedtext.textContent = word.slice(0, i);
                i++;
                setTimeout(typeLoop, speed);
            } else {
                writing = false;
                i = word.length - 1;
                setTimeout(typeLoop, 1000);
            }
        } else {
            if (i >= 0) {
                animatedtext.textContent = word.slice(0, i);
                i--;
                setTimeout(typeLoop, speed / 2);
            } else {
                animatedtext.textContent = "";
                writing = true;
                i = 0;
                setTimeout(() => writedeleteRandomWord(wordList, speed), 500);
            }
        }
    }

    typeLoop();
}

if (window.location.href.includes("index.html")) {
    writedeleteRandomWord(words, 150);
} else {
    writedeleteRandomWord(engwords, 150);
}

