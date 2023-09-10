const bar = document.getElementById('bar');
const navBar = document.getElementsByClassName('list-item');

if(bar){
    bar.addEventListener('click', () => {
        navBar.classList.add("active");
    })
}