// Interatividade para seleção de opções
document.querySelectorAll(".option-item:not(.locked)").forEach((item) => {
  item.addEventListener("click", function () {
    // Remove seleção anterior do mesmo painel
    const panel = this.closest(".customization-panel");
    panel.querySelectorAll(".option-item.selected").forEach((selected) => {
      selected.classList.remove("selected");
    });

    // Adiciona seleção ao item clicado
    this.classList.add("selected");

    // Atualiza stats baseado na seleção (simulação)
    updateStats();
  });
});

// Interatividade para cores
document.querySelectorAll(".color-option").forEach((color) => {
  color.addEventListener("click", function () {
    document.querySelectorAll(".color-option.selected").forEach((selected) => {
      selected.classList.remove("selected");
    });
    this.classList.add("selected");

    // Simula mudança de cor do personagem
    const avatar = document.querySelector(".character-avatar");
    const colorValue = this.style.background;
    avatar.style.color = colorValue;
    avatar.style.textShadow = `0 0 20px ${colorValue}`;
  });
});

// Função para atualizar stats
function updateStats() {
  const stats = document.querySelectorAll(".stat-value");
  stats.forEach((stat) => {
    const currentValue = parseInt(stat.textContent);
    const variation = Math.floor(Math.random() * 20) - 10; // -10 a +10
    const newValue = Math.max(0, Math.min(100, currentValue + variation));
    stat.textContent = newValue;
  });
}

// Animação de hover nos slots de equipamento
document.querySelectorAll(".loadout-slot").forEach((slot) => {
  slot.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(10px)";
  });

  slot.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0)";
  });
});

// Efeitos sonoros simulados (visual feedback)
document.querySelectorAll(".action-button").forEach((button) => {
  button.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 100);

    if (this.textContent === "CONFIRMAR") {
      alert("Configurações salvas!");
    }
  });
});

// Efeito de glitch ocasional no título
setInterval(() => {
  const title = document.querySelector(".page-title");
  if (Math.random() < 0.1) {
    // 10% de chance
    title.style.transform = `translateX(${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
      title.style.transform = "translateX(0)";
    }, 100);
  }
}, 2000);

addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    document.querySelector(".action-buttons a").click();
  }
});
