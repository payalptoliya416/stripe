
document.querySelectorAll(".option-list").forEach(list => {
  const options = list.querySelectorAll("li");
  let answered = false; 

  options.forEach(o => {
    if (o.classList.contains("correct") || o.classList.contains("wrong")) {
      answered = true; 
      o.querySelector("input[type='radio']").checked = true; 
    }
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      if (answered) return;

      options.forEach(o => {
        o.classList.remove("active");
        o.querySelector("input[type='radio']").checked = false;
      });

      option.classList.add("active");
      option.querySelector("input[type='radio']").checked = true;

      answered = true;
    });
  });
});
