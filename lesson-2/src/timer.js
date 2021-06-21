import render from "./common.js";
import { Howl } from 'howler';
import audio from './audio/timer.mp3'
const stopBtn = document.querySelector('.form-timer-stop');

export function calcTime(time) {
    let timer = setInterval(()=> {
        if (time !== 0) {
            time--;
            render(time);
        } else {
            let sound = new Howl({
                src: audio
            });
            sound.once('load', function () {
                sound.play();
            });
            sound.on('end', function () {
                console.log('Finished!');
            });

            render('');
        }
    }, 1000);

    stopBtn.addEventListener('click', ()=>{
        clearInterval(timer);
    });

}



