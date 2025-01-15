document.addEventListener('astro:page-load', function() {
    const menuButton = document.querySelector('#menu-button');
    const nav = document.querySelector('#mySidenav');
    const main = document.querySelector('#main');
    const body = document.querySelector('body');
    menuButton?.addEventListener('click', () => {
        console.log('click');
        nav.style.width = '100%';
        main.style.marginRights = '250px';
        body.style.backgroundColor = 'black';
    });

    document.querySelector('.closebtn').addEventListener('click', () => {
        console.log('cierra menu');
        nav.style.width = '0';
        main.style.margin = '0';
        body.style.backgroundColor = 'black';
    });
});