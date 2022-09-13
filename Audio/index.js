let play = (key) => {
    let audio = new Audio('./sounds/'+key+'_sound.wav');
    audio.play();
}

const buttons = document.querySelectorAll('td button').length;
for(let i=0; i<buttons; i++){
    document.querySelectorAll('td button')[i].addEventListener('click', (e) => {
        play(e.target.innerHTML.trim())
        buttonAnimation(this);
    });
}

document.addEventListener("keypress", (e) => {
    play(e.key)
    buttonAnimation(e)
})