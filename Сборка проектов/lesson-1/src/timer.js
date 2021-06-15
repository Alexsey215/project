import render from "./common.js";

const stopBtn = document.querySelector('.form-timer-stop');

export function calcTime(time) {
    let timer = setInterval(()=> {
        if (time !== 0) {
            time--;
            render(time);
        } else {
            let sound = new Howl({
                src: ['./audio/timer.mp3']
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



