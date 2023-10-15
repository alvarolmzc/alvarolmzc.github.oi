document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("darkmode");
    const content = document.getElementById("content");

    darkModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.header.classList.toggle("dark-mode");
        document.section.classList.toggle("dark-mode");
        document.main.classList.toggle("dark-mode");
        darkModeButton.innerHTML = "Modo Escuro Ativado";
    });
});

function formatPhoneNumber(event) {
    const phoneInput = event.target;
    const phoneNumber = phoneInput.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (phoneNumber.length >= 2) {
        // Verifica se há pelo menos dois dígitos
        const formattedNumber = `(${phoneNumber.slice(0, 2)})${phoneNumber.slice(2)}`;
        phoneInput.value = formattedNumber;
    }
}

// Adicionar um ouvinte de eventos ao textarea
const phoneInput = document.getElementById('phoneInput');
phoneInput.addEventListener('input', formatPhoneNumber);