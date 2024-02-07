document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Adicione aqui sua lógica de validação, se necessário
  
    // Exemplo de validação simples (substitua por sua lógica de validação real):
    var isValid = true; // Supondo que o formulário é válido
  
    if (isValid) {
      // Exibir o modal de sucesso
      document.getElementById("modal").style.display = "block";
    }
  });
  
  // Fechar o modal ao clicar no botão de fechar
  document.querySelector(".fechar").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
  });
  