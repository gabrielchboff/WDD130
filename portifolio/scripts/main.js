
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

document.addEventListener('DOMContentLoaded', function() {
  if (selectedTheme) {
    if (selectedTheme !== 'dark') {
      document.body.classList.add(darkTheme);
      themeButton.classList.add(iconTheme);
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
    }
  }
});

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

};
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());

});


const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,

});
sr.reveal(`.profile__border`);
sr.reveal(`.profile__name`, {
  delay: 500

});
sr.reveal(`.profile__profession`, {
  delay: 600

});
sr.reveal(`.profile__social`, {
  delay: 700

});
sr.reveal(`.profile__info-group`, {
  interval: 100,
  delay: 700

});
sr.reveal(`.profile__buttons`, {
  delay: 800

});
sr.reveal(`.filters__content`, {
  delay: 900

});
sr.reveal(`.filters`, {
  delay: 1000

});
