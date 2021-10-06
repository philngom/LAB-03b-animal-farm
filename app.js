// import functions

// reference needed DOM elements


// set event listeners
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)

const dogImage = document.getElementById('dog-image');
const catImage = document.getElementById('cat-image');
const horseImage = document.getElementById('horse-image');
const dogAudio = document.getElementById('dog-audio');
const catAudio = document.getElementById('cat-audio');
const horseAudio = document.getElementById('horse-audio');

let timesDogSoundHasBeenPlayed = 0;
dogImage.addEventListener('click', () => {
    timesDogSoundHasBeenPlayed++;
    document.getElementById('dog-count').innerHTML = `The dog sound has been played ${timesDogSoundHasBeenPlayed} times.`;
    dogImage.classList.add('animate');
    dogAudio.play();
});

let timesCatSoundHasBeenPlayed = 0;
catImage.addEventListener('click', () => {
    timesCatSoundHasBeenPlayed++;
    document.getElementById('cat-count').innerHTML = `The cat sound has been played ${timesCatSoundHasBeenPlayed} times.`;
    catImage.classList.add('animate');
    catAudio.play();
});

let timesHorseSoundHasBeenPlayed = 0;
horseImage.addEventListener('click', () => {
    timesHorseSoundHasBeenPlayed++;
    document.getElementById('horse-count').innerHTML = `The horse sound has been played ${timesHorseSoundHasBeenPlayed} times.`;
    horseImage.classList.add('animate');
    horseAudio.play();
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'c') {
        catAudio.play();
    } else if (event.key === 'd'){
        dogAudio.play();
    } else if (event.key === 'h'){
        horseAudio.play();
    }
});
