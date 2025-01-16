/*menu topo*/
document.addEventListener("DOMContentLoaded", function() {
    // Selecionando os links de navegação
    const navLinks = document.querySelectorAll(' .nav-menu a, .menu-mobile a, menu-desktop');
    
    // Adicionando evento de clique para cada link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Obtendo o alvo (a seção) do link
            const targetId = link.getAttribute('href').substring(1); // Obtém o id da seção

            // Selecionando a seção correspondente
            const targetSection = document.getElementById(targetId);

            // Rolando suavemente até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
