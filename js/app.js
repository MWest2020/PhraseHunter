/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//testing game logic
let game;
let letter;
const phrase = new Phrase();

 

/**
  * Game class. Hold event listeners to interact with the DOM
  */

//addEventListener for the start button
document.getElementById('btn__reset').addEventListener('click', () => {
    
  game = new Game();
  game.startGame();
  game.handleInteraction();
  
  });
  
  
  
  
  //addEvenlistener for the onscreen keyboard buttons



  