document.getElementById('goToRegister').addEventListener('click', () => {
    document.querySelector('.imagen-form').style.transform = 'translateX(-100%)';
});

document.getElementById('goToLogin').addEventListener('click', () => {
    document.querySelector('.imagen-form').style.transform = 'translateX(0%)';
});
