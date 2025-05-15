function validarLogin() {
    const email = document.getElementById("Email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const most = document.getElementById("most");

    most.style.display = "block"; 
    most.style.color = "red"; 
    most.innerHTML = "";

    // Validação de campos vazios
    if (!email || !senha) {
        most.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    // Validação de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        most.innerHTML = "Por favor, insira um email válido.";
        return;
    }

   
    if (senha.length < 6) {
        most.innerHTML = "A senha deve ter pelo menos 6 caracteres.";
        return; 
    }

    setTimeout(() => {
        window.location.href = "../criar-evento.html";
    }, 1); 
}