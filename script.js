// pegar todas as teclas key
const keys = document.querySelectorAll('.key'); //  nodeList class key
// console.log(keys)
// tocar notas
function playNote(e){
    
    // pega KeyCode
    let audioKeyCode = getKeyCode(e);
    
    // pega tecla pressionada
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    // console.log(key);

    // essa tecla existe ?
    const cantFoundAnyKey = !key;
    if (cantFoundAnyKey) {
        return;
    }


    addPlayingClass(key);

    // tocar audio
    playAudio(audioKeyCode);
}

// get keyCode
function getKeyCode(e) {
    // 1:10:00
    let keyCode;
    const isKeyBoard = e.type === 'keydown';
    if (isKeyBoard) {
        // recebe o valor da tecla
        keyCode = e.keyCode;
    }else {
        // recebe valor do click
        keyCode = e.target.dataset.key 
    }

    // console.log(e.type) // tipo de evento ativado
    // console.log(keyCode) // codigo da tecla ativada
    // console.log(e.target.dataset.key) // só pega o clik 
    return keyCode;
};

// add classe playing
function addPlayingClass(key) {
    key.classList.toggle('playing');
    key.addEventListener('keyup', removePlayingClass)
};


function removePlayingClass(e) {
    e.target.classList.remove('playing');a
}

// play audio
function playAudio(audioKeyCode) {
    // guadar data-key do elemento audio acionado
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`);
    // audio inicia em zero
    audio.currentTime = 0;
    audio.play();
    console.log(audio)
}


function initPiano() {
    // click 
    keys.forEach( function(key) {
        // chama a mesma funcao
        key.addEventListener('click', playNote)
        key.addEventListener('transitionend', removePlayingClass)
    });
    
    // keyboard type
    window.addEventListener('keydown', playNote); // janela escuta keydown
}
window.addEventListener('load', initPiano);