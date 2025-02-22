// Switching between Login and Signup forms
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

switchToSignup.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

switchToLogin.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Handle signup and login form submissions
document.getElementById('signup').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  
  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Signup successful! You can now log in.');
});

document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    alert('Login successful!');
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});
