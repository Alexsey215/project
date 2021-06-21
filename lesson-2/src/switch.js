const datebtn = document.querySelector('#dateBtn');
const timerbtn = document.querySelector('#timerBtn');
const datePage = document.querySelector('.calc');
const timerPage = document.querySelector('.timer');
export default function switchPage() {
    datebtn.addEventListener('click', ()=> {
        timerPage.classList.add('vision');
        datePage.classList.remove('vision');
    });
    timerbtn.addEventListener('click', ()=> {
        datePage.classList.add('vision');
        timerPage.classList.remove('vision');
    });
}
