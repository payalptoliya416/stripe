document.querySelectorAll(".option-list").forEach(list => {
  const options = list.querySelectorAll("li");

  options.forEach(option => {
    // If option is correct or wrong, mark as active and disable all other radios
    if (option.classList.contains("correct") || option.classList.contains("wrong")) {
      option.classList.add("active"); // highlight
      const radio = option.querySelector("input[type='radio']");
      if (radio) radio.checked = true;

      // Disable all radios except this one
      options.forEach(o => {
        const r = o.querySelector("input[type='radio']");
        if (r && o !== option) r.disabled = true;
      });
    } 
  });

  // Normal click behavior only for lists without pre-defined correct/wrong
  let hasCorrectOrWrong = Array.from(options).some(o => o.classList.contains("correct") || o.classList.contains("wrong"));
  if (!hasCorrectOrWrong) {
    options.forEach(option => {
      option.addEventListener("click", () => {
        // Remove active from all
        options.forEach(o => {
          o.classList.remove("active");
          const r = o.querySelector("input[type='radio']");
          if (r) r.checked = false;
        });

        // Mark clicked option active
        option.classList.add("active");
        const r = option.querySelector("input[type='radio']");
        if (r) r.checked = true;
      });
    });
  }
});
