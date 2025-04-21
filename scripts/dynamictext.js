function setAge() {
  const today = new Date();
  const birth = new Date(2003, 4, 30);

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

let ageplaceholders = document.querySelectorAll(".age")

ageplaceholders.forEach((placeholder) => {
  placeholder.textContent = setAge();
})