/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * Game class
    */
 class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }


    
    //handle interactions

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrase(){
        const phraseArr = [
            {phrase: 'Life is like a box of chocolates'},
            {phrase: 'There is no such thing as a free lunch'},
            {phrase: 'Cutting corners'},
            {phrase: 'Give someone the benefit of the doubt'},
            {phrase: 'Let someone off the hook'}
        ];
        return phraseArr;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let i = Math.floor(Math.random()* game.createPhrase().length);
        return game.createPhrase()[i];

    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        console.log(this.activePhrase);
        };
    

    //check for win
    
    //remove heart from life scoreboard

    //end game
 }
 