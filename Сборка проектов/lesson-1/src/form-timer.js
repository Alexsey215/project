import render from './common.js';
import { calcTime } from './timer.js';
const form = document.getElementById('form-timer');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const time = event.target.elements.setTime.value;

    if (!time){
        render('Введите значение');
        return;
    }
    render('');
    calcTime(time);

});
