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
        let count = 0;
        qwerty.addEventListener('click', (event) => {
            input = event.target.textContent;
            
            if(phrase.checkLetter(input)){
                phrase.showMatchedLetter(input);
            } else if(!phrase.checkLetter(input)){
                count += 1;
                this.removeLife();
                
                return this.missed = count;
            }
            
            this.checkForWin();
            this.gameOver();
        })
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
            return true;
        } else {  
            return false; 
        }
         
    }

/** 
    * Displays game over message 
    * @param {boolean} gameWon - Whether or not the user won the game */ 
    
    gameOver(){
        
        const gameOverMessage = document.querySelector('#game-over-message');
        if (this.checkForWin()){
            document.getElementById('overlay').className = 'win';
            document.getElementById('overlay').style.display = 'block';
            gameOverMessage.textContent = 'PHRASE HUNTED AND SLAIN! YOU WON';
        }
        
        else {
            document.getElementById('overlay').className = 'lose';
            document.getElementById('overlay').style.display = 'block';
            gameOverMessage.textContent = 'PHRASE HUNTED and lost YOUR LIVES!';
        }
         
    }
    

    
    //remove heart from life scoreboard
    /** 
    * Increases the value of the missed property 
    * Removes a life from the scoreboard 
    * Checks if player has remaining lives and ends game if player is out */ 
    removeLife() {
        console.log(this.missed);
        const tries = document.querySelectorAll('li.tries');
        let i = this.missed;
            if (this.missed === 4)  {
            tries[i].firstChild.src = "../Phrasehunter/images/lostHeart.png";
            this.gameOver();
            } else if(this.missed = i -1 && this.missed < 4 )  {
                tries[i].firstChild.src = "../Phrasehunter/images/lostHeart.png";
            } else if (this.missed = i && this.missed < 4)  {
                tries[i].firstChild.src = "../Phrasehunter/images/lostHeart.png";
            }
        

    };

    // `removeLife()`: This method removes a life from the scoreboard, by replacing one of the `liveHeart.png` images with a `lostHeart.png` image (found in the `images` folder) and increments the `missed` property. If the player has five missed guesses (i.e they're out of lives), then end the game by calling the `gameOver()` method. 

    

    // `gameOver()`: This method displays the original start screen overlay, and depending on the outcome of the game, updates the overlay `h1` element with a friendly win or loss message, and replaces the overlay’s `start` CSS class with either the `win` or `lose` CSS class. 


 }