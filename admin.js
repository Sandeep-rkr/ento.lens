
document.addEventListener("DOMContentLoaded", function () {
  let count = localStorage.getItem("visitCount") || 0;
  count++;
  localStorage.setItem("visitCount", count);
  document.getElementById("visitCount").textContent = count;

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
    const input = document.getElementById("newImage");
    if (input.value) {
      photos.push(input.value);
      localStorage.setItem("photos", JSON.stringify(photos));
      render();
      input.value = "";
    }
  };
  render();
});
