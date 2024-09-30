let menuVisible = false;

function toggleMenu() {
    const imageMenu = document.getElementById('imageMenu');
    const toggleButton = document.getElementById('toggleMenuBtn');

    // Alterna a visibilidade do menu de miniaturas
    if (menuVisible) {
        imageMenu.classList.add('hidden');
        toggleButton.textContent = "Mostrar Miniaturas";
    } else {
        imageMenu.classList.remove('hidden');
        toggleButton.textContent = "Esconder Miniaturas";
    }

    menuVisible = !menuVisible;
}

function selectImage(imageElement) {
    const mainImage = document.getElementById('mainImage');
    const imageMenu = document.getElementById('imageMenu');
    const toggleButton = document.getElementById('toggleMenuBtn');

    // Atualiza a imagem principal usando o 'src' da imagem clicada
    mainImage.src = imageElement.src;

    // Esconde o menu de miniaturas após selecionar uma imagem
    imageMenu.classList.add('hidden');
    toggleButton.textContent = "Mostrar Miniaturas";
    menuVisible = false;
}
