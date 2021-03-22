// global constants
const clueHoldTime = 500; //how long to hold each clue's light/sound
const cluePauseTime = 250; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;

//console output
console.log("play single clue: 2 in 1000ms");

//code for start button 

function startGame(){
  
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("image").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("gameButtonArea").classList.remove("hidden");
    
    playClueSequence();
    
}

//code for stop button

function stopGame(){
    //initialize game variables
    gamePlaying = false;
  
    // swap the Start and Stop buttons
    document.getElementById("stopBtn").classList.add("hidden");
    document.getElementById("gameButtonArea").classList.add("hidden");
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("image").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 250,
  2: 300,
  3: 350,
  4: 400
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}



//Dialogue box for victory

function winGame(){
  stopGame();
  alert("Yay! You won. Your memory muscles must be working out in the gym. 10 points to you!");
}

//Dialouge box for loss

function loseGame(){
  stopGame();
  alert("Oh no! You lost. Its okay, better luck next time!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // Game logic
  
  if(btn == pattern[guessCounter])
    {
      //correct guess
      if(guessCounter == progress)
        {
          //game over : win
          if(progress == pattern[(pattern.length) -1])
            {
              winGame();
            }
          //increase game progress, play next clue
          else
            {
              progress++;
              playClueSequence();
            }
        }
      //increment guessCounter
      else
        {
          ++guessCounter;
        }
    }
  else
    {
      //wrong guess
      loseGame();
    }
}

//slide show
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}