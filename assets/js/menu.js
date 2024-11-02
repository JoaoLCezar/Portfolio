document.addEventListener('DOMContentLoaded', function () {
    //Elementos de controle do menu
    const menuToggle = document.getElementById('meunToggle');
    const menuAberto = document.querySelector('.menu-aberto');

    //abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function (){
        if(menuToggle.checked) {
            menuAberto.classList.add('active');
        } else {
            menuAberto.classList.remove('active');
        }
    });
});