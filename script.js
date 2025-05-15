
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
}
document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const photos = document.querySelectorAll('.photo');
  photos.forEach(photo => {
    const name = photo.getAttribute('data-name').toLowerCase();
    photo.style.display = name.includes(query) ? 'block' : 'none';
  });
});
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('user').value;
  const comment = document.getElementById('comment').value;
  const feedback = JSON.parse(localStorage.getItem('feedback') || '[]');
  feedback.push({ user, comment });
  localStorage.setItem('feedback', JSON.stringify(feedback));
  alert('Thanks for your feedback!');
  this.reset();
});
