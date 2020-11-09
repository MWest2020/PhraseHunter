/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//testing game logic
 
//  const phrase = new Phrase();
//  game.activePhrase.checkLetter('a');
 

/**
  * Game class. Hold event listeners to interact with the DOM
  */

//addEventListener for the start button
document.getElementById('btn__reset').addEventListener('click', () => {
    
    game = new Game();
    game.startGame();
    });
    
    
    
    
    //addEvenlistener for the onscreen keyboard buttons

