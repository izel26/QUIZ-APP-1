let currentCategory = null;
    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz(category) {
      currentCategory = category;
      currentQuestionIndex = 0;
      score = 0;

      document.getElementById("category").classList.add("hidden");
      document.getElementById("quiz").classList.remove("hidden");

      showQuestion();
    }

    function showQuestion() {
      const currentQuestion = questions[currentCategory][currentQuestionIndex];
      document.getElementById("question").textContent = currentQuestion.question;

      const optionsContainer = document.getElementById("options");
      optionsContainer.innerHTML = "";

      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
      });
    }

    function checkAnswer(selected) {
      const currentQuestion = questions[currentCategory][currentQuestionIndex];
      if (selected === currentQuestion.answer) {
        score++;
      }

      document.getElementById("next").classList.remove("hidden");
      Array.from(document.getElementById("options").children).forEach((btn) =>
        btn.setAttribute("disabled", true)
      );
    }

    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
        document.getElementById("next").classList.add("hidden");
      } else {
        endQuiz();
      }
    }

    function endQuiz() {
      document.getElementById("quiz").classList.add("hidden");
      document.getElementById("result").classList.remove("hidden");
      document.getElementById("score").textContent = `${score} / ${questions[currentCategory].length}`;
    }

    function restartQuiz() {
      document.getElementById("result").classList.add("hidden");
      document.getElementById("category").classList.remove("hidden");
    }