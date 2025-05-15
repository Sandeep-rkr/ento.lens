
document.addEventListener("DOMContentLoaded", () => {
  const feedback = JSON.parse(localStorage.getItem("feedback") || "[]");
  const list = document.getElementById("feedbackList");
  list.innerHTML = feedback.map(f => 
    `<li><strong>${f.user}:</strong> ${f.comment}</li>`
  ).join('');
});
