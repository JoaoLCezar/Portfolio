document.addEventListener('DOMContentLoaded', function() {
    //Ajustar para garantir que o site comece carregar no topo
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    //Função para exibir ou esconder os botões ao rolar a página
    function toggleButtons(){
        const scrollPosition = window.scrollY;
        if (scrollPosition >100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
                backToTopButton.style.opacity = '1';
                whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
                backToTopButton.style.display = 'none';
                whatsappButton.style.display = 'none';
            }, 500);
        }
    }
    

    //Adiciona o evento de scroll para exibir ou esconder os botões
    document.addEventListener('scroll', toggleButtons);

    //Ação ao clicar no botão "voltar ao Topo"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top:0, behavior: 'smooth'});
    });
    //Ação ao clicar no botão do WhatsApp
    whatsappButton.addEventListener('click', function() {
        window.location.href = 'https://wa.me/5521991162419';
    });

    function scrollToContact() {
        const contactSection = document.getElementById('contato');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    //Ação ao clicar no botão "Contato"
    function sendEmail() {
        emailjs.sendForm('service_tpaecom', 'template_esllu1g', '#contactForm', '8PWfXOJuiCtmCMlKU')
            .then((response) => {
                alert('Mensagem enviada com sucesso!');
            }, (error) => {
                alert('Erro ao enviar mensagem. Tente novamente.');
            });
    }


});