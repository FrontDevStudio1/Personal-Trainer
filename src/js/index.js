// Função para abrir o modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
  document.body.style.overflow = "hidden"; // Desabilita a rolagem
}

// Função para fechar o modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
  document.body.style.overflow = ""; // Reabilita a rolagem
}

// Adiciona event listeners para todos os botões de abrir modal
document.querySelectorAll(".ButtonForm").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = button.getAttribute("id").replace("openModalBtn", "modal");
    openModal(modalId);
  });
});

// Adiciona event listeners para todos os botões de fechar modal
document.querySelectorAll(".close").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = button.getAttribute("id").replace("closeModalBtn", "modal");
    closeModal(modalId);
  });
});

// Adiciona event listener para fechar modal ao clicar fora do conteúdo
window.addEventListener("click", function (event) {
  document.querySelectorAll(".modal").forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Reabilita a rolagem
    }
  });
});

// Tratamento de envio do formulário
document.getElementById("treinoForm1").onsubmit = function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const semana = document.getElementById("diaSemana").value;
  const horario = document.getElementById("horario").value;

  const whatsappMessage = `Olá, eu me chamo ${nome}.
     Moro na cidade de: ${endereco}. 
     Desejo o plano de: ${semana}. 
     Treinar pelo horario ${horario}.
     Com foco no ganho de massa magra`;

  const phoneNumber = "5588921487525";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};

// Tratamento de envio do formulário
document.getElementById("treinoForm2").onsubmit = function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome2").value;
  const endereco = document.getElementById("endereco2").value;
  const semana = document.getElementById("diaSemana2").value;
  const horario = document.getElementById("horario2").value;

  const whatsappMessage = `Olá, eu me chamo ${nome}.
    Moro na cidade de: ${endereco}. 
    Desejo o plano de: ${semana}. 
    Treinar pelo horario ${horario}.
    Com foco em perca de gordura`;

  const phoneNumber = "5588921487525";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappURL, "_blank");
};
