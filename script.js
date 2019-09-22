function playSound (e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//  console.log(audio);
//^This was to check that we were selecting the audio correctly
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  //console.log(key);
  //^This was to make sure we were selecting the key classes correctly
  key.classList.add('playing');
}

  window.addEventListener("keydown",playSound);

  function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skup it if it's not a transform
    this.classList.remove('playing');
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend',removeTransition))
