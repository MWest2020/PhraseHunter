/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * 
  */

  class Phrase{
    //handle creation of phrases (the toLowerCase() fuction is done, because verification will be done via toLowerCase)
    // constructor(phrase){
    //       this.phrase = phrase.toLowerCase();

    // }


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
        
        game.activePhrase = displayPhrase.toLowerCase();
    }
}
