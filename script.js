const form = document.querySelector('form');

const login = (username, password) => {
  if (username === 'admin' && password === 'admin') {
    console.log('hello world');
  } else {
    alert('Incorrect sign-in details');
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username1').value;
  const password = document.getElementById('password1').value;
  console.log(username, password);
  login(username, password);
});