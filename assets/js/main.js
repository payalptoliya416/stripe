
const options = document.querySelectorAll(".option-list li");

options.forEach(option => {
  option.addEventListener("click", () => {
    // Remove active class from all
    options.forEach(o => {
      o.classList.remove("active");
      o.querySelector("input[type='radio']").checked = false;
    });

    // Add active class to clicked option
    option.classList.add("active");
    option.querySelector("input[type='radio']").checked = true;
  });
});
