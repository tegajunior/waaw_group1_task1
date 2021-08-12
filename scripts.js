const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

const sidebar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show');
});