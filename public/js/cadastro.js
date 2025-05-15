function atualizarLabelDocumento() {
    const tipo = document.getElementById("tipo_documento").value;
    const label = document.getElementById("label_documento");
    label.innerText = tipo === "cnpj" ? "CNPJ:" : tipo === "cpf" ? "CPF:" : "Documento:";
}

function enviar_cadastro() {
    const tipo = document.getElementById("tipo_documento").value;
    const documento = document.getElementById("documento").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;
    const mensagem = document.getElementById("most");

    const exibirErro = (mensagemErro) => {
        mensagem.innerHTML = mensagemErro;
    };

    
    if (!tipo || !documento || !nome || !email || !telefone || !senha || !confirmarSenha) {
        exibirErro("Preencha todos os campos obrigatórios.");
        return;
    }

    if (tipo === "cnpj" && !local) {
        exibirErro("O campo 'Local' é obrigatório para CNPJ.");
        return;
    }

    if (nome.length < 3) {
        exibirErro("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    if (!/^[A-Z][a-záéíóúãõâêîôûç]+ [A-Z][a-záéíóúãõâêîôûç]+$/.test(nome)) {
        exibirErro("Digite um nome e sobrenome válidos, com letras maiúsculas no início.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        exibirErro("E-mail inválido.");
        return;
    }

    if (tipo === "cnpj" && (!/^\d{14}$/.test(documento))) {
        exibirErro("CNPJ deve conter exatamente 14 números.");
        return;
    }

    if (tipo === "cpf" && (!/^\d{11}$/.test(documento))) {
        exibirErro("CPF deve conter exatamente 11 números.");
        return;
    }

    if (!/^\d{10,}$/.test(telefone)) {
        exibirErro("Telefone inválido. Deve conter pelo menos 10 números.");
        return;
    }

    if (senha.length < 6) {
        exibirErro("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    if (senha !== confirmarSenha) {
        exibirErro("As senhas não coincidem.");
        return;
    }

    setTimeout(() => {
        window.location.href = "../js/../criar-evento.html";
    }, 1); 
}
