function setAge() {
  const today = new Date();
  const birth = new Date(2003, 4, 30); // May 30, 2003

  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

// Wait until DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  const ageplaceholder = document.getElementById('age');
  ageplaceholder.textContent = setAge();
})