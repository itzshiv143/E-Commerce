const bar = document.getElementById('bar');
const navBar = document.getElementsByClassName('navbar');

if(bar){
    bar.addEventListener('click', () => {
        navBar.classList.add("active");
    })
}