/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//testing game logic
 const game = new Game();
 const phrase = new Phrase();



game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase}`);



 /**
  * Game class. Hold event listeners to interact with the DOM
  */

        //addEventListener for the start button
    document.getElementById('btn__reset').addEventListener( 'click', () => {console.log(`it's ok`)} );
    
    
    
    
    //addEvenlistener for the onscreen keyboard buttons

