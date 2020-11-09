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
        if (game.activePhrase.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

// This function reveals the letter supplied as an argument by changing it's class to the 'show' class
showMatchedLetter(letter) {
    for (let i = 0; i < document.querySelector("#phrase > ul").children.length; i++) {
        let letterVisual = document.querySelector(`#phrase > ul > li.hide.letter.${letter}`);

        if (letterVisual !== null) {
            letterVisual.className = `show letter ${letter}`;
        }
    }        
}






}








