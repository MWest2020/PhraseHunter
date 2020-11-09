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
    handleInteraction(){
        const qwerty = document.getElementById('qwerty');
        let input;
        qwerty.addEventListener('click', (event) => {
            input = event.target.textContent;
            console.log(input);
            if(phrase.checkLetter(input)){
                phrase.showMatchedLetter(input);
            }
            

        })
        
        
        
        
        this.checkForWin();
        

    }





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
        // let i = Math.floor(Math.random()* this.phrases.length);
        // return this.phrases[i];
        return this.phrases[2];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        
        phrase.addPhraseToDisplay();
        };
    

    //check for win

    /** 
    * Checks for winning move 
    * @return {boolean} True if game has been won, false if game wasn't won 
    */ 
    checkForWin() {
         
        if (!document.querySelector(`#phrase > ul`).innerHTML.includes('hide')) {
            console.log('game is won');
        } else { return false }
         
    };

    
    //remove heart from life scoreboard
    /** 
    * Increases the value of the missed property 
    * Removes a life from the scoreboard 
    * Checks if player has remaining lives and ends game if player is out */ 
    removeLife() {
        
        const tries = document.querySelectorAll('li.tries');
        
        for(let i = this.missed; i < 5; i++) {
            if(this.missed = i){tries[i].firstChild.src = "../Phrasehunter/images/lostHeart.png"}
            else if(this.missed === 5){
                tries[i].firstChild.src = "../Phrasehunter/images/lostHeart.png";
            gameOver();
        }

        }

    };

    // `removeLife()`: This method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images` folder) and increments the `missed` property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method. 





    //end game
 }