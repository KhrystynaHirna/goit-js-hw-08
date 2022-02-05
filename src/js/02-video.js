import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');

    });
const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(0.0).then(function(seconds) {
})


// iframe.addEventListener('timeupdate', onPlay);
