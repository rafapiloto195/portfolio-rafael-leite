// Seleciona o formulário pelo ID
const formulario = document.getElementById("formContato");

// Escuta o evento de envio
formulario.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores digitados
    const nome = document.getElementById("nome").value.trim();

    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação dos campos vazios
    if(nome === "" || email === "" || mensagem === ""){

        alert("Por favor, preencha todos os campos.");

        return;
    }

    // Validação simples de e-mail
    if(!email.includes("@") || !email.includes(".")){

        alert("Digite um e-mail válido.");

        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa os campos
    formulario.reset();

});