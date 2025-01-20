const themeSelector = document.querySelector('select');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
  const body = document.body;
  const logo = document.querySelector('.logo'); 
  const selectedTheme = themeSelector.value;

  if (selectedTheme === 'dark') {
    body.classList.add('dark');
    logo.src = "byui-logo_white.png";
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'; 
  }
}

themeSelector.addEventListener('change', changeTheme);
