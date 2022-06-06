document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtnMenu = document.querySelector('#close-btn-mobile');
    const openBtnMenu = document.querySelector('#open-btn-mobile');

    openBtnMenu.addEventListener('click', (e) => {
        mobileMenu.classList.add('mobile-menu--active');
    });

    closeBtnMenu.addEventListener('click', (e) => {
        mobileMenu.classList.remove('mobile-menu--active');
    });
});