const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Ativar Modo Escuro';
    } else {
        themeToggle.textContent = 'Ativar Modo Claro';
    }
});