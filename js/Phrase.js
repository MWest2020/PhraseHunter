/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * 
  */

 class Phrase{
    //handle creation of phrases (the toLowerCase() fuction is done, because verification will be done via toLowerCase)
    constructor(phrase){
          this.phrase = phrase;

    }


    /*
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const displayPhrase = game.getRandomPhrase().phrase;

        const splitPhrase = displayPhrase.split('');

        let ul = '<ul>'

        splitPhrase.forEach(split => {
            if(split.match(/[a-z]/gi)){
                ul += `<li class="hide letter ${split.toLowerCase()}">` + split.toLowerCase() + '</li>';
            } else if(!split.match(/[a-z]/gi)){
                ul += `<li class="space"> </li>`;
            }
        }); 

        ul += '</ul>';
        document.getElementById("phrase").innerHTML = ul;

        // game.activePhrase = displayPhrase.toLowerCase();
    }


    // This function checks if a letter is contained in the this.phrase of the phrase object.
    checkLetter(letter) {
        console.log(letter);
        console.log(this.phrase);
        
        if (game.activePhrase.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    /** 
    * Displays passed letter on screen after a match is found 
    * * @param (string) letter - Letter to display
    *  
    */ 
   showMatchedLetter(letter) {
        for (let i = 0; i < document.querySelector("#phrase > ul").children.length; i++) {
            let showLetter = document.querySelector(`#phrase > ul > li.hide.letter.${letter}`);

            if (showLetter !== null) {
                showLetter.className = `show letter ${letter}`;
            }
        }        
    }




}