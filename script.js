<<<<<<< HEAD
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    message.textContent = '✨ Ты нажал на кнопку! Это сюрприз! ✨';
    message.classList.remove('hidden');
    message.classList.add('show');
