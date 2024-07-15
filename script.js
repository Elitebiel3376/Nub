document.addEventListener('DOMContentLoaded', function() {
    const m3uForm = document.getElementById('m3uForm');
    const m3uInput = document.getElementById('m3u');
    const usernameInput = document.getElementById('username');

    // Evento para enviar o link M3U
    m3uForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const m3uUrl = m3uInput.value.trim();
        const username = usernameInput.value.trim();

        if (m3uUrl && username) {
            // Redirecionar para a tela principal após processamento do link M3U
            window.location.href = 'tela.html';
        }
    });
});