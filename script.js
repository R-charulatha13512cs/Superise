document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let result = document.getElementById("result");

    if (!q1 || !q2) {
        result.innerHTML = "Please answer all questions 😊";
        return;
    }

    if (q1.value === "yes" || q2.value === "yes") {
        result.innerHTML = "Aww… Here’s a warm hug for you 🤗💖";
    } else {
        result.innerHTML = "Great! Stay happy 😊✨";
    }
});