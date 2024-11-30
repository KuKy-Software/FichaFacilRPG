    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        window.location.href = "../sistema/sistema.html"; // Redireciona para o sistema
    });
