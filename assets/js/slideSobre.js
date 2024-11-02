document.addEventListener('DOMContentLoaded', function() {
    // Clona o elemento com o ID 'headline-scroll' para criar um efeito de rolagem contínua
    const headlineScrool = document.getElementById('headline-scroll');
    const clone = headlineScroll.cloneNode(true);
    headlineScrool.parentNode.appendChild(clone);

    //Define a largurr dos elementos com base na largura do conteudo
    const scrollWodth = headlineScroll.scrollWidth;
    headlineScroll.style.width = `${scrollWidth}px`;
    clone.style.width = `${scrollWidth}px`;
});

//Cria e adiciona um estilo CSS para a animação de rolagem
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100%{
        transform: translateX(-50%);
        }
}`;
document.head.appendChild(styleSheet);