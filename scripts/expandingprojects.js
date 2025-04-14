let expandarrow = document.getElementById("expandarrow")
let projects = document.querySelectorAll(".projetframe")

function expand() {
    let projectcount = 0

    projects.forEach(el => {
        if(getComputedStyle(el).display == "flex")
            projectcount += 1
    });

    if(projectcount + 2 <= projects.length) {
        for(let i = 0; i < projectcount + 2; i++) {
            projects[i].style.display = "flex"
        }
        projectcount += 2
    }

    if(projectcount >= projects.length) {
        expandarrow.classList.add('off')
    }
}

expandarrow.addEventListener('click', expand)