import localStorage from './localStorage';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const ref = {
  controlSwithTheme: document.querySelector('input.js-switch-input'),
  body: document.body,
}
ref.controlSwithTheme.addEventListener('change', changeTheme);
const currentTheme = localStorage.load('Theme');
ref.body.classList.add(Theme.LIGHT);

if (currentTheme === Theme.DARK) {
  addDarkTheme()
  ref.controlSwithTheme.checked = true;
}
if (currentTheme === Theme.LIGHT) {
  addLigthTheme()
}

function changeTheme(event) {
  if (event.target.checked) {
    addDarkTheme()
  }
  if (!event.target.checked) { // or ref.controlSwithTheme.checked
    addLigthTheme()
  }
}

function addDarkTheme() {
  ref.body.classList.replace(Theme.LIGHT, Theme.DARK);
  localStorage.save('Theme', Theme.DARK)
}

function addLigthTheme() {
  ref.body.classList.replace(Theme.DARK, Theme.LIGHT);
  localStorage.save('Theme', Theme.LIGHT)
}
