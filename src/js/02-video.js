import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const curTimeKey = "videoplayer-current-time";

player.on('timeupdate', throttle(function({seconds}) {
    console.log(1000);
    localStorage.setItem(curTimeKey, seconds);
}, 1000));

// test
function initCurTime() {
    let secondsStr = localStorage.getItem(curTimeKey);
    let seconds = Number(secondsStr);

    player.setCurrentTime(seconds).then();
}

initCurTime();
