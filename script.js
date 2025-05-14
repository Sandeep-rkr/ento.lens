
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
