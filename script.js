// app.js
const chatBox = document.getElementById('chatBox');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

// Simulate two users locally (replace this logic with real-time backend)
let isUser = true;

messageForm.addEventListener('submit', e => {
  e.preventDefault();
  const msg = messageInput.value.trim();
  if (!msg) return;

  const msgEl = document.createElement('div');
  msgEl.classList.add('message', isUser ? 'user' : 'other');
  msgEl.textContent = msg;
  chatBox.appendChild(msgEl);

  chatBox.scrollTop = chatBox.scrollHeight;
  messageInput.value = '';
  isUser = !isUser;
});
