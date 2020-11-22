const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || // user clicks on mask
        e.target.className === 'close' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

// When adding the mouseout event handler, also add one for keydown
setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 1_000);



const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        
        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};


function downloadCounter() {
    tempo = Date.now().toString()
    document.getElementById('download-counter').innerText = `${tempo.substr(6, 3)} pessoas já fizeram o download hoje!`
}

downloadCounter()