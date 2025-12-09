// Gerenciamento do Tema Claro/Escuro
// Aplicar tema imediatamente para evitar flash de conteúdo
(function() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.body.classList.add('light-theme');
    }
})();

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.icon = this.themeToggle.querySelector('i');
        this.storageKey = 'portfolio-theme';
        
        this.init();
    }

    init() {
        // Atualizar ícone baseado no tema atual
        if (this.body.classList.contains('light-theme')) {
            this.icon.className = 'bi bi-moon-fill';
        } else {
            this.icon.className = 'bi bi-sun-fill';
        }

        // Event listener para o botão
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Detectar mudanças na preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.storageKey)) {
                e.matches ? this.setDarkTheme() : this.setLightTheme();
            }
        });
    }

    toggleTheme() {
        if (this.body.classList.contains('light-theme')) {
            this.setDarkTheme();
            localStorage.setItem(this.storageKey, 'dark');
        } else {
            this.setLightTheme();
            localStorage.setItem(this.storageKey, 'light');
        }
    }

    setLightTheme() {
        this.body.classList.add('light-theme');
        this.icon.className = 'bi bi-moon-fill';
        this.updateMetaThemeColor('#f6f6f6');
    }

    setDarkTheme() {
        this.body.classList.remove('light-theme');
        this.icon.className = 'bi bi-sun-fill';
        this.updateMetaThemeColor('#000000');
    }

    updateMetaThemeColor(color) {
        // Atualizar a cor da barra de endereço em mobile
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }
        metaThemeColor.content = color;
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});
