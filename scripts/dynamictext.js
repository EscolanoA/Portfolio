let ageplaceholder = document.getElementById("age")

function setAge(birthdate) {
    const today = new Date();
    const birth = new Date(2003, 4, 30);
    
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
  
    // If birth month hasn't occurred yet this year or it's the same month but birth day hasn't passed
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
  
    return age;
  }

  ageplaceholder.innerHTML = setAge()
