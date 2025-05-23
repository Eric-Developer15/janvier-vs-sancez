const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('error-msg');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  if (email === 'admin@example.com' && password === '123456') {
    alert('Login successful!');
    errorMsg.textContent = '';
  } else {
    errorMsg.textContent = 'Invalid email or password!';
  }
});
