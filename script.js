// 1. Encontra o botão e o body no HTML
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 2. Adiciona um "ouvinte" que espera pelo clique no botão
themeToggle.addEventListener('click', function() {
    
    // 3. A mágica: Adiciona ou remove a classe 'light-mode' do <body>
    body.classList.toggle('light-mode');

    // 4. (Bônus de Acessibilidade) Atualiza o texto do botão
    if (body.classList.contains('light-mode')) {
        // Se ESTÁ no modo claro
        themeToggle.textContent = 'Ativar Modo Escuro';
    } else {
        // Se VOLTOU para o modo escuro
        themeToggle.textContent = 'Ativar Modo Claro';
    }
});