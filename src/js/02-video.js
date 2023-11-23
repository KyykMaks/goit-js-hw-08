import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const itemFrame = document.querySelector(".iframe");
const player = new Player('your-video-player-id');

const onPlay