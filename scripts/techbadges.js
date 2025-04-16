const badges = document.querySelectorAll(".techbadge");

badges.forEach((badge) => {
  badge.addEventListener("click", function () {
    document.querySelectorAll(".techtext, .techexpertise, .techbadge").forEach((el) => {
      el.classList.remove("animate");

      void el.offsetWidth;
    });

    const techFrame = badge.closest(".techframe");
    const text = techFrame.querySelector(".techtext");
    const expertise = techFrame.querySelector(".techexpertise");

    text.classList.add("animate");
    expertise.classList.add("animate");
    badge.classList.add("animate");
  });
});