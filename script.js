document.getElementById('goToRegister').addEventListener('click', () => {
    document.querySelector('.form-content').style.transform = 'translateX(-50%)';
});

document.getElementById('goToLogin').addEventListener('click', () => {
    document.querySelector('.form-content').style.transform = 'translateX(0%)';
});
