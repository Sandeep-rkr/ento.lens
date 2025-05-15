if (localStorage.getItem("isAdmin") !== "true") {
  alert("Access denied.");
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Chart: visitor count
  let count = parseInt(localStorage.getItem("visitCount") || "0");
  const ctx = document.getElementById('visitorChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Visits"],
      datasets: [{
        label: 'Number of Visits',
        data: [count],
        backgroundColor: ['rgba(54, 162, 235, 0.7)'],
      }]
    }
  });

  // Photo manager
  let photos = JSON.parse(localStorage.getItem("photos") || "[]");
  const list = document.getElementById("photoList");
  const render = () => {
    list.innerHTML = "";
    photos.forEach((img, idx) => {
      const li = document.createElement("li");
      li.textContent = img;
      const btn = document.createElement("button");
      btn.textContent = "Remove";
      btn.onclick = () => {
        photos.splice(idx, 1);
        localStorage.setItem("photos", JSON.stringify(photos));
        render();
      };
      li.appendChild(btn);
      list.appendChild(li);
    });
  };
  window.addPhoto = () => {
    const input = document.getElementById("photoName");
    if (input.value) {
      photos.push(input.value);
      localStorage.setItem("photos", JSON.stringify(photos));
      render();
      input.value = "";
    }
  };
  render();

  // Feedback viewer
  const feedback = JSON.parse(localStorage.getItem("feedback") || "[]");
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = feedback.map(f => 
    `<li><strong>${f.user}:</strong> ${f.comment}</li>`
  ).join('');
});
