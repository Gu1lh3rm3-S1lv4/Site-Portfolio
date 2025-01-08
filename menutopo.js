/*menu topo*/

// Função para mostrar o conteúdo de acordo com o menu clicado
function showContent(sectionId) {
  // Primeiro, ocultamos todas as seções
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Em seguida, mostramos a seção correspondente
  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

/* Função para mostrar o menu mobile
document.getElementById("btn").addEventListener("click", function() {
  document.getElementById("menu-mobile").style.display = "block";
});

//Função para fechar o menu mobile
document.getElementById("btn-fechar").addEventListener("click", function() {
  document.getElementById("menu-mobile").style.display = "none";
});*/
