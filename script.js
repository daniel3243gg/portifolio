document.addEventListener('DOMContentLoaded', function() {
    // Animação suave de scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
// FDDXGDG
    // Animação dos números na seção de estatísticas
    const stats = document.querySelectorAll('.stat .number');
    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let count = 0;
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60 FPS

            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    stat.textContent = Math.round(count);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };

            updateCount();
        });
    };

    // Executar animação quando a seção estiver visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(document.querySelector('#home .stats'));
});

document.getElementById('copyButton').addEventListener('click', function() {
    // Seleciona o conteúdo do input
    const input = document.getElementById('textToCopy');
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');

    // Alerta ou notificação para o usuário
    alert('Conteúdo copiado: ' + input.value);
});

document.getElementById('copyButton2').addEventListener('click', function() {
    // Seleciona o conteúdo do input
    const input = document.getElementById('textToCopy2');
    input.select();
    input.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o conteúdo para a área de transferência
    document.execCommand('copy');

    // Alerta ou notificação para o usuário
    alert('Conteúdo copiado: ' + input.value);
});