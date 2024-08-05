// Função para abrir e fechar o menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('open');
    menuIcon.classList.toggle('open');
}

// Função para abrir e fechar o vídeo
function toggleVideo() {
    const videoContainer = document.querySelector('.video-container');
    const video = document.querySelector('iframe');
    videoContainer.classList.toggle('open');
    video.classList.toggle('open');
}

// Função
