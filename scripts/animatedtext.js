let animatedtext = document.getElementById("animatedtext");

const words = [
  "un ninja du JavaScript",
  "un pro du CSS",
  "un grand fan de PHP...!",
  "un athlete de compétition",
  "un manique du C#",
  "un musicien auto-didacte",
  "un developpeur back-end",
  "un developpeur front-end",
  "un developpeur fullstack"
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

writedeleteRandomWord(words, 150);

