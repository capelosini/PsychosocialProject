function doAbilityAnimation(element, cooldown) {
    if (element.classList.contains("cooldown")) {
        return
    }
    element.classList.remove("ready")
    element.classList.add("cooldown")
    setTimeout(() => {
        element.classList.remove("cooldown")
        element.classList.add("ready")
    }, cooldown)
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        const pauseMenu = document.getElementById('pauseMenu');
        pauseMenu.classList.toggle('active');
    }

    // abilities
    let cooldown = 800
    elements = document.querySelectorAll('.ability');
    switch (event.key.toLowerCase()) {
        case 'q':
            doAbilityAnimation(elements[0], cooldown)
            break;
        case 'e':
            doAbilityAnimation(elements[1], cooldown)
            break;
        case 'r':
            doAbilityAnimation(elements[2], cooldown)
            break;
        case 't':
            doAbilityAnimation(elements[3], cooldown)
            break;
        case 'm':
            toggleImageOverlay();
            break;
    }
});

function closePauseMenu() {
    const pauseMenu = document.getElementById('pauseMenu');
    pauseMenu.classList.remove('active');
}

function returnToMainMenu() {
    window.location.href = 'mainMenu.html';
}

function toggleImageOverlay() {
    const imageOverlay = document.getElementById('imageOverlay');
    imageOverlay.classList.toggle('active');
}