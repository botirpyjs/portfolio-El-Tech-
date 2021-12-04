let services = document.querySelector('#services'),
    servisBtn = document.querySelector('.serv');
let home = document.querySelector('.b'),
    homebtn = document.querySelector('.hom');
let about = document.querySelector('#about'),
    aboutbtn = document.querySelector('.about');
let testimonals = document.querySelector('#testimonals'),
    testimonalsbtn = document.querySelector('.testimo');
let portf = document.querySelector('#portfolio'),
    portfbtn = document.querySelector('.portf');
let cont = document.querySelector('#contact'),
    contbtn = document.querySelector('.cont');

home.style.display = 'block';
servisBtn.addEventListener('click', () => {
    home.style.display = 'none';
    services.style.display = 'inline';
    about.style.display = 'none';
    testimonals.style.display = 'none';
    portfolio.style.display = 'none';
})
homebtn.addEventListener('click', () => {
    home.style.display = 'inline';
    services.style.display = 'none';
    about.style.display = 'none';
    testimonals.style.display = 'none';
    portfolio.style.display = 'none';
    cont.style.display = 'none';
})
aboutbtn.addEventListener('click', () => {
    about.style.display = 'inline';
    services.style.display = 'none';
    home.style.display = 'none';
    testimonals.style.display = 'none';
    portfolio.style.display = 'none';
    cont.style.display = 'none';
})
testimonalsbtn.addEventListener('click', () => {
    about.style.display = 'none';
    services.style.display = 'none';
    home.style.display = 'none';
    testimonals.style.display = 'block';
    portfolio.style.display = 'none';
    cont.style.display = 'none';
})
portfbtn.addEventListener('click', () => {
    about.style.display = 'none';
    services.style.display = 'none';
    home.style.display = 'none';
    testimonals.style.display = 'none';
    portfolio.style.display = 'block';
    cont.style.display = 'none';
})
contbtn.addEventListener('click', () => {
    about.style.display = 'none';
    services.style.display = 'none';
    home.style.display = 'none';
    testimonals.style.display = 'none';
    portfolio.style.display = 'none';
    cont.style.display = 'block';
})