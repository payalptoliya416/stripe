const options = document.querySelectorAll(".option-list li");
let answered = false; // ✅ prevent further clicks

options.forEach(option => {
    option.addEventListener("click", () => {

        if (answered) return; // ✅ already answered → stop further clicks

        // Remove previous active
        options.forEach(o => o.classList.remove("active"));

        option.classList.add("active");

        // ✅ check answer (example logic)
        if (option.dataset.answer === "correct") {
            option.classList.add("correct");
        } else {
            option.classList.add("wrong");
        }

        answered = true; // ✅ lock further clicks
    });
});
